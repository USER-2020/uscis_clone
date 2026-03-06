import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Edit({ auth, clientCase }) {
    const { data, setData, put, processing, errors } = useForm({
        case_number: clientCase.case_number || '',
        full_name: clientCase.full_name || '',
        nationality: clientCase.nationality || '',
        passport: clientCase.passport || '',
        birth_date: clientCase.birth_date || '',
        notes: clientCase.notes || '',
        notes_en: clientCase.notes_en || '',
    });
    const caseNumberValid = /^[A-Z]{3}\d{10}$/.test(data.case_number);

    const submit = (e) => {
        e.preventDefault();
        put(route('admin.client-cases.update', clientCase.id));
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Caso</h2>}
        >
            <Head title="Editar Caso" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow sm:rounded-lg p-6 space-y-6">
                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <InputLabel value="Número de caso" />
                                <TextInput
                                    className={`mt-1 block w-full ${data.case_number && !caseNumberValid ? 'border-red-600' : ''}`}
                                    value={data.case_number}
                                    onChange={(e) => {
                                        const raw = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
                                        const letters = raw.replace(/[^A-Z]/g, '').slice(0, 3);
                                        const digits = raw.replace(/[^0-9]/g, '').slice(0, 10);
                                        setData('case_number', letters + digits);
                                    }}
                                    maxLength={13}
                                    inputMode="text"
                                    pattern="[A-Z]{3}[0-9]{10}"
                                    title="Formato esperado: 3 letras y 10 números (ej. IER8012451614)"
                                    required
                                />
                                {data.case_number && !caseNumberValid && (
                                    <div className="mt-2 text-sm text-red-600">
                                        Formato inválido. Usa 3 letras y 10 números.
                                    </div>
                                )}
                                <InputError className="mt-2" message={errors.case_number} />
                            </div>
                            <div>
                                <InputLabel value="Nombre completo" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.full_name}
                                    onChange={(e) => setData('full_name', e.target.value)}
                                    required
                                />
                                <InputError className="mt-2" message={errors.full_name} />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <InputLabel value="Nacionalidad" />
                                    <TextInput
                                        className="mt-1 block w-full"
                                        value={data.nationality}
                                        onChange={(e) => setData('nationality', e.target.value)}
                                        required
                                    />
                                    <InputError className="mt-2" message={errors.nationality} />
                                </div>
                                <div>
                                    <InputLabel value="Pasaporte" />
                                    <TextInput
                                        className="mt-1 block w-full"
                                        value={data.passport}
                                        onChange={(e) => setData('passport', e.target.value)}
                                        required
                                    />
                                    <InputError className="mt-2" message={errors.passport} />
                                </div>
                            </div>

                            <div>
                                <InputLabel value="Fecha de nacimiento" />
                                <TextInput
                                    type="date"
                                    className="mt-1 block w-full"
                                    value={data.birth_date}
                                    onChange={(e) => setData('birth_date', e.target.value)}
                                    required
                                />
                                <InputError className="mt-2" message={errors.birth_date} />
                            </div>

                            <div>
                                <InputLabel value="Notas (texto enriquecido) - ES" />
                                <div className="mt-2">
                                    <ReactQuill
                                        theme="snow"
                                        value={data.notes}
                                        onChange={(value) => setData('notes', value)}
                                    />
                                </div>
                                <InputError className="mt-2" message={errors.notes} />
                            </div>

                            <div>
                                <InputLabel value="Notes (rich text) - EN" />
                                <div className="mt-2">
                                    <ReactQuill
                                        theme="snow"
                                        value={data.notes_en}
                                        onChange={(value) => setData('notes_en', value)}
                                    />
                                </div>
                                <InputError className="mt-2" message={errors.notes_en} />
                            </div>

                            <div className="flex items-center justify-end gap-3">
                                <Link
                                    href={route('admin.client-cases.index')}
                                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-xs uppercase tracking-widest"
                                >
                                    Cancelar
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing || !caseNumberValid}
                                    className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 disabled:opacity-50"
                                >
                                    Actualizar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}









