<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ClientCase;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ClientCaseController extends Controller
{
    public function index()
    {
        $cases = ClientCase::query()
            ->when(request('q'), function ($query, $search) {
                $query->where(function ($inner) use ($search) {
                    $inner->where('case_number', 'like', '%' . $search . '%')
                        ->orWhere('passport', 'like', '%' . $search . '%');
                });
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/ClientCases/Index', [
            'cases' => $cases,
            'filters' => [
                'q' => request('q'),
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/ClientCases/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => ['required', 'string', 'max:255'],
            'nationality' => ['required', 'string', 'max:100'],
            'passport' => ['required', 'string', 'max:50'],
            'birth_date' => ['required', 'date'],
            'notes' => ['nullable', 'string'],
            'notes_en' => ['nullable', 'string'],
        ]);

        $validated['case_number'] = $this->generateCaseNumber();
        $validated['created_by'] = $request->user()->id;

        ClientCase::create($validated);

        return redirect()->route('admin.client-cases.index')
            ->with('success', 'Caso creado correctamente.');
    }

    public function edit(ClientCase $clientCase)
    {
        return Inertia::render('Admin/ClientCases/Edit', [
            'clientCase' => $clientCase,
        ]);
    }

    public function show(ClientCase $clientCase)
    {
        $clientCase->load('creator');

        return Inertia::render('Admin/ClientCases/Show', [
            'clientCase' => $clientCase,
        ]);
    }

    public function update(Request $request, ClientCase $clientCase)
    {
        $validated = $request->validate([
            'case_number' => [
                'required',
                'regex:/^[A-Z]{3}\d{10}$/',
                Rule::unique('client_cases', 'case_number')->ignore($clientCase->id),
            ],
            'full_name' => ['required', 'string', 'max:255'],
            'nationality' => ['required', 'string', 'max:100'],
            'passport' => ['required', 'string', 'max:50'],
            'birth_date' => ['required', 'date'],
            'notes' => ['nullable', 'string'],
            'notes_en' => ['nullable', 'string'],
        ]);

        $clientCase->update($validated);

        return redirect()->route('admin.client-cases.index')
            ->with('success', 'Caso actualizado correctamente.');
    }

    public function destroy(ClientCase $clientCase)
    {
        $clientCase->delete();

        return redirect()->route('admin.client-cases.index')
            ->with('success', 'Caso eliminado correctamente.');
    }

    private function generateCaseNumber(): string
    {
        do {
            $letter1 = chr(random_int(65, 90));
            $letter2 = chr(random_int(65, 90));
            $digits = sprintf('%010d', random_int(0, 9999999999));
            $caseNumber = 'I' . Str::upper($letter1 . $letter2) . $digits;
        } while (ClientCase::where('case_number', $caseNumber)->exists());

        return $caseNumber;
    }
}
