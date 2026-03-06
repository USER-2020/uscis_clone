import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ auth, cases, filters }) {
    const { data, setData, get } = useForm({
        q: filters?.q || '',
    });

    const submit = (e) => {
        e.preventDefault();
        get(route('admin.client-cases.index'), { preserveState: true });
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Casos de Clientes</h2>}
        >
            <Head title="Casos de Clientes" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <p className="text-sm text-gray-600">Administra casos y genera numeros de caso.</p>
                        <Link
                            href={route('admin.client-cases.create')}
                            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700"
                        >
                            Nuevo Caso
                        </Link>
                    </div>

                    <form onSubmit={submit} className="bg-white shadow sm:rounded-lg p-4 flex flex-col sm:flex-row gap-3">
                        <TextInput
                            className="w-full"
                            placeholder="Buscar por numero de caso o pasaporte..."
                            value={data.q}
                            onChange={(e) => setData('q', e.target.value)}
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700"
                        >
                            Buscar
                        </button>
                        {filters?.q && (
                            <Link
                                href={route('admin.client-cases.index')}
                                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-xs uppercase tracking-widest"
                            >
                                Limpiar
                            </Link>
                        )}
                    </form>

                    <div className="bg-white shadow sm:rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nacionalidad</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pasaporte</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">F. Nacimiento</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Numero de Caso</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {cases.data.length === 0 && (
                                        <tr>
                                            <td className="px-6 py-4 text-sm text-gray-500" colSpan="6">
                                                No hay casos registrados.
                                            </td>
                                        </tr>
                                    )}
                                    {cases.data.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 text-sm text-gray-900">{item.full_name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-900">{item.nationality}</td>
                                            <td className="px-6 py-4 text-sm text-gray-900">{item.passport}</td>
                                            <td className="px-6 py-4 text-sm text-gray-900">{item.birth_date}</td>
                                            <td className="px-6 py-4 text-sm text-gray-900">{item.case_number}</td>
                                            <td className="px-6 py-4 text-right text-sm">
                                                <Link
                                                    href={route('admin.client-cases.show', item.id)}
                                                    className="text-gray-700 hover:text-gray-900 mr-4"
                                                >
                                                    Ver
                                                </Link>
                                                <Link
                                                    href={route('admin.client-cases.edit', item.id)}
                                                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                >
                                                    Editar
                                                </Link>
                                                <Link
                                                    href={route('admin.client-cases.destroy', item.id)}
                                                    method="delete"
                                                    as="button"
                                                    className="text-red-600 hover:text-red-900"
                                                    onBefore={() => confirm('¿Eliminar este caso?')}
                                                >
                                                    Eliminar
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {cases.links.length > 3 && (
                        <div className="flex flex-wrap gap-2">
                            {cases.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || '#'}
                                    preserveScroll
                                    className={`px-3 py-1 rounded text-sm ${
                                        link.active ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 border'
                                    } ${!link.url ? 'opacity-50 pointer-events-none' : ''}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
