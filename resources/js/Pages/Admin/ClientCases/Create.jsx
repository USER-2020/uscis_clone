import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        full_name: '',
        nationality: '',
        passport: '',
        birth_date: '',
        notes: '',
        notes_en: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.client-cases.store'));
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Nuevo Caso</h2>}
        >
            <Head title="Nuevo Caso" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow sm:rounded-lg p-6">
                        <form onSubmit={submit} className="space-y-6">
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
                                    disabled={processing}
                                    className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 disabled:opacity-50"
                                >
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
