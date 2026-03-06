// resources/js/Components/HomeNewsAndSocial.jsx

import React, { useEffect, useState } from "react";
import { Link, usePage } from "@inertiajs/react";

// Solo necesitas news + social aquí
const translations = {
    en: {
        news: {
            title: "News & Alerts",
            viewMore: "View More News",
            items: [
                {
                    month: "NOV",
                    day: "27",
                    title:
                        "USCIS Implements Additional National Security Measures in the Wake of National Guard Shooting by Afghan National",
                    date: "November 27, 2025",
                    type: "News Releases",
                },
                {
                    month: "NOV",
                    day: "26",
                    title: "DHS Terminates Temporary Protected Status for Haiti",
                    date: "November 26, 2025",
                    type: "Alerts",
                },
                {
                    month: "NOV",
                    day: "24",
                    title: "DHS Terminating Temporary Protected Status for Burma",
                    date: "November 24, 2025",
                    type: "News Releases",
                },
                {
                    month: "NOV",
                    day: "20",
                    title:
                        "USCIS Announces FY 2026 Inflation Increase for Certain Immigration-Related Fees",
                    date: "November 20, 2025",
                    type: "Alerts",
                },
                {
                    month: "NOV",
                    day: "18",
                    title:
                        "Former Connecticut Resident Pleads Guilty to Lying to Obtain U.S. Citizenship After Committing War Crimes in Bosnia",
                    date: "November 18, 2025",
                    type: "News Releases",
                },
            ],
        },

        social: {
            title: "Social Media",
            header: {
                pageName: "U.S. Citizenship and Immigration Services",
                followers: "912K followers",
                followBtn: "Follow Page",
            },
            labels: {
                source: "Facebook",
                likes: "Likes",
                comments: "Comments",
                shares: "shares",
            },
            posts: [
                {
                    id: 1,
                    author: "U.S. Citizenship and Immigration Services",
                    time: "22 hours ago",
                    text: `USCIS is committed to safeguarding the American people from public safety and national security threats the Biden administration rubberstamped into the country.

Nothing is off the table until every alien is vetted and screened to the maximum degree possible.`,
                    reactions: 373,
                    comments: 62,
                    shares: 47,
                },
                {
                    id: 2,
                    author: "U.S. Citizenship and Immigration Services",
                    time: "3 days ago",
                    text: `USCIS has halted all asylum decisions until we can ensure that every alien is vetted and screened to the maximum degree possible. The safety of the American people always comes first.`,
                    reactions: 394,
                    comments: 54,
                    shares: 48,
                },
            ],
        },
    },

    es: {
        news: {
            title: "Noticias y Alertas",
            viewMore: "Ver más noticias",
            items: [
                {
                    month: "NOV",
                    day: "27",
                    title:
                        "USCIS Implementa Medidas Adicionales de Seguridad Nacional tras el Tiroteo a la Guardia Nacional por un Ciudadano Afgano",
                    date: "27 de noviembre de 2025",
                    type: "Comunicados de prensa",
                },
                {
                    month: "NOV",
                    day: "26",
                    title:
                        "DHS Da por Terminado el Estatus de Protección Temporal (TPS) para Haití",
                    date: "26 de noviembre de 2025",
                    type: "Alertas",
                },
                {
                    month: "NOV",
                    day: "24",
                    title:
                        "DHS Termina el Estatus de Protección Temporal para Birmania",
                    date: "24 de noviembre de 2025",
                    type: "Comunicados de prensa",
                },
                {
                    month: "NOV",
                    day: "20",
                    title:
                        "USCIS Anuncia Aumento por Inflación para Ciertas Tarifas Migratorias para el Año Fiscal 2026",
                    date: "20 de noviembre de 2025",
                    type: "Alertas",
                },
                {
                    month: "NOV",
                    day: "18",
                    title:
                        "Residente de Connecticut se Declara Culpable de Mentir para Obtener la Ciudadanía de EE. UU. tras Cometer Crímenes de Guerra en Bosnia",
                    date: "18 de noviembre de 2025",
                    type: "Comunicados de prensa",
                },
            ],
        },

        social: {
            title: "Redes Sociales",
            header: {
                pageName:
                    "Servicios de Ciudadanía e Inmigración de Estados Unidos",
                followers: "912 mil seguidores",
                followBtn: "Seguir página",
            },
            labels: {
                source: "Facebook",
                likes: "Me gusta",
                comments: "Comentarios",
                shares: "compartidos",
            },
            posts: [
                {
                    id: 1,
                    author:
                        "Servicios de Ciudadanía e Inmigración de Estados Unidos",
                    time: "Hace 22 horas",
                    text: `USCIS está comprometido a proteger al pueblo estadounidense de amenazas a la seguridad pública y a la seguridad nacional.

Nada está fuera de la mesa hasta que cada persona extranjera sea examinada al máximo grado posible.`,
                    reactions: 373,
                    comments: 62,
                    shares: 47,
                },
                {
                    id: 2,
                    author: "Director de USCIS Joseph E. Edlow",
                    time: "Hace 4 días",
                    text: `USCIS ha detenido todas las decisiones de asilo hasta garantizar que cada persona extranjera sea examinada al máximo grado posible. La seguridad del pueblo estadounidense siempre es la prioridad.`,
                    reactions: 394,
                    comments: 54,
                    shares: 48,
                },
            ],
        },
    },
};

export default function HomeNewsAndSocial() {
    const { props } = usePage();
    const locale = props.locale || "en";
    const t = translations[locale] || translations.en;

    const socialPosts = t.social.posts;
    const socialLabels = t.social.labels;

    // ⏱ loader de Social Media 5s
    const [socialLoading, setSocialLoading] = useState(true);

    useEffect(() => {
        // cada vez que cambia el idioma / se monta el componente, reinicia loader
        setSocialLoading(true);
        const timer = setTimeout(() => {
            setSocialLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [locale]);

    return (
        <section className="max-w-6xl mx-auto mt-10 grid gap-6 lg:grid-cols-2">
            {/* LEFT: News & Alerts */}
            <div className="bg-white border shadow-sm p-6">
                <h2 className="text-2xl font-semibold mb-4">
                    {t.news.title}
                </h2>

                {/* Línea superior */}
                <div className="border-t border-gray-300 mt-2" />

                <div className="divide-y divide-gray-300">
                    {t.news.items.map((item, idx) => (
                        <div key={idx} className="py-6">
                            <div className="flex gap-4">
                                {/* Caja de fecha estilo USCIS */}
                                <div className="w-16 h-16 border border-[#005587] flex flex-col items-center justify-center">
                                    <div className="bg-[#005587] text-white w-full text-center text-xs font-bold py-1 tracking-wide">
                                        {item.month}
                                    </div>
                                    <div className="flex-1 flex items-center justify-center text-lg font-bold text-[#005587]">
                                        {item.day}
                                    </div>
                                </div>

                                {/* Contenido noticia */}
                                <div className="flex-1">
                                    <Link
                                        href="#"
                                        className="text-[#005587] hover:underline block font-medium leading-snug"
                                    >
                                        {item.title}
                                    </Link>

                                    <p className="text-gray-700 text-sm mt-2">
                                        {item.date}
                                    </p>

                                    <button
                                        type="button"
                                        className="mt-2 inline-block text-[#005587] text-xs px-2 py-0.5 hover:bg-sky-50"
                                    >
                                        {item.type}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Link
                    href="#"
                    className="mt-4 inline-block text-sm text-[#005587] hover:underline"
                >
                    {t.news.viewMore}
                </Link>
            </div>

            {/* RIGHT: Social Media (JSON, sin iframe) */}
            <div className="bg-white border shadow-sm p-6">
                <h2 className="text-2xl font-semibold mb-4">
                    {t.social.title}
                </h2>

                {/* Loader de 5 segundos */}
                {socialLoading ? (
                    <div className="space-y-4">
                        {[1, 2].map((s) => (
                            <div
                                key={s}
                                className="border rounded bg-white shadow-sm p-3 animate-pulse"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-3 bg-gray-200 rounded w-3/4" />
                                        <div className="h-2 bg-gray-200 rounded w-1/2" />
                                    </div>
                                </div>
                                <div className="space-y-2 mb-3">
                                    <div className="h-2 bg-gray-200 rounded w-full" />
                                    <div className="h-2 bg-gray-200 rounded w-11/12" />
                                    <div className="h-2 bg-gray-200 rounded w-10/12" />
                                </div>
                                <div className="h-3 bg-gray-200 rounded w-1/3" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {socialPosts.map((post) => (
                            <article
                                key={post.id}
                                className="border rounded bg-white shadow-sm"
                            >
                                {/* Header tipo tarjeta Facebook */}
                                <div className="px-3 pt-3 pb-2 flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-sky-700 text-white flex items-center justify-center text-[10px] font-bold leading-tight text-center">
                                        USCIS
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-semibold text-sky-800 leading-tight">
                                            {post.author}
                                        </div>
                                        <div className="text-[11px] text-gray-500">
                                            {post.time} · {socialLabels.source}
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-400">⋯</span>
                                </div>

                                {/* Texto del post */}
                                <div className="px-3 pb-3 text-sm text-gray-800 whitespace-pre-line leading-snug">
                                    {post.text}
                                </div>

                                {/* Footer reacciones */}
                                <div className="px-3 py-2 border-t text-[11px] text-gray-500 flex justify-between">
                                    <span>
                                        👍 {post.reactions} · {socialLabels.comments}{" "}
                                        {post.comments}
                                    </span>
                                    <span>
                                        {post.shares} {socialLabels.shares}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
