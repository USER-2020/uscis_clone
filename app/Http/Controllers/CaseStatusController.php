<?php

namespace App\Http\Controllers;

use App\Models\ClientCase;
use Illuminate\Http\Request;

class CaseStatusController extends Controller
{
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'receipt' => ['required', 'regex:/^[A-Z]{3}\d{10}$/'],
        ]);

        $case = ClientCase::query()
            ->where('case_number', $validated['receipt'])
            ->first();

        if (!$case) {
            return response()->json([
                'found' => false,
                'message' => 'Case number not found.',
            ], 404);
        }

        return response()->json([
            'found' => true,
            'case' => [
                'full_name' => $case->full_name,
                'nationality' => $case->nationality,
                'passport' => $case->passport,
                'birth_date' => $case->birth_date,
                'case_number' => $case->case_number,
                'notes' => $case->notes,
                'notes_en' => $case->notes_en,
            ],
        ]);
    }
}
