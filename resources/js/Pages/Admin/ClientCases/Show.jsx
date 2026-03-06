import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ auth, clientCase }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Detalle del Caso</h2>}
        >
            <Head title="Detalle del Caso" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="bg-white shadow sm:rounded-lg p-6 space-y-4">
                        <div className="bg-gray-50 border rounded-md px-4 py-3 text-sm text-gray-700">
                            <span className="font-semibold">Numero de caso:</span> {clientCase.case_number}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <div className="text-xs uppercase text-gray-500">Nombre completo</div>
                                <div className="text-sm text-gray-900">{clientCase.full_name}</div>
                            </div>
                            <div>
                                <div className="text-xs uppercase text-gray-500">Nacionalidad</div>
                                <div className="text-sm text-gray-900">{clientCase.nationality}</div>
                            </div>
                            <div>
                                <div className="text-xs uppercase text-gray-500">Pasaporte</div>
                                <div className="text-sm text-gray-900">{clientCase.passport}</div>
                            </div>
                            <div>
                                <div className="text-xs uppercase text-gray-500">Fecha de nacimiento</div>
                                <div className="text-sm text-gray-900">{clientCase.birth_date}</div>
                            </div>
                            <div>
                                <div className="text-xs uppercase text-gray-500">Creado por</div>
                                <div className="text-sm text-gray-900">
                                    {clientCase.creator?.name} ({clientCase.creator?.email})
                                </div>
                            </div>
                        </div>

                        {clientCase.notes && (
                            <div>
                                <div className="text-xs uppercase text-gray-500 mb-2">Notas - ES</div>
                                <div
                                    className="prose max-w-none"
                                    dangerouslySetInnerHTML={{ __html: clientCase.notes }}
                                />
                            </div>
                        )}

                        {clientCase.notes_en && (
                            <div>
                                <div className="text-xs uppercase text-gray-500 mb-2">Notes - EN</div>
                                <div
                                    className="prose max-w-none"
                                    dangerouslySetInnerHTML={{ __html: clientCase.notes_en }}
                                />
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href={route('admin.client-cases.index')}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-xs uppercase tracking-widest"
                        >
                            Volver
                        </Link>
                        <Link
                            href={route('admin.client-cases.edit', clientCase.id)}
                            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700"
                        >
                            Editar
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
