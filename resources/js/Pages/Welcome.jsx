// resources/js/Pages/Welcome.jsx
import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import UscisCard from "@/Components/UscisCard";
import HeaderCarousel from "@/Components/HeaderCarousel";
import HomeInfoSections from "@/Components/HomeInfoSections";
import HomeNewsAndSocial from "@/Components/HomeNewsAndSocial";
import HomeResearchAndVerification from "@/Components/HomeResearchAndVerification";
import PublicFooterBar from "@/Components/PublicFooterBar";

const translations = {
    en: {
        metaTitle: "Home | USCIS",
        langLabelEn: "English",
        langLabelEs: "Español",
        hero: {
            badge: "New Reporting Tool Available",
            title: "to SAVE and E-Verify Users",
            body: "Log in to your account to generate a Status Change Report to identify cases affected by parole terminations and EAD revocations.",
            btnEverify: "E-Verify Users",
            btnSave: "SAVE Users",
        },
        beforeVisit: {
            title: "Know Before You Go",
            body: "Check for current office closure information and office location prior to visiting one of our offices.",
            linkOffices: "Office Closings",
            linkFindOffice: "Find a USCIS Office",
        },
        fileOnline: {
            title: "File Online",
            body1: `Filing a form online is easier and faster than paper filing. It gives you a simple and personalized way to track your case online. You can also access other USCIS services.`,
            body2: "The first step is to create an account.",
            formLink: "form online",
            accountLink: "create an account",
        },
        manageCase: {
            title: "Manage Your Case",
            intro: "Use our online tools and resources to manage your case:",
            item1: "Check your case status",
            item2: "Check processing times",
            item3: "Change your address online",
        },
        news: {
            title: "News & Alerts",
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
                    title:
                        "DHS Terminates Temporary Protected Status for Haiti",
                    date: "November 26, 2025",
                    type: "Alerts",
                },
            ],
        },
        social: {
            title: "Social Media",
            placeholder:
                "Here you could embed the Facebook/Twitter widget (placeholder for educational purposes).",
        },
        research: {
            title: "Research",
            links: [
                "Immigration and Citizenship Data",
                "Electronic Reading Room",
                "USCIS Freedom of Information Act (FOIA)",
                "Laws and Policy",
                "Historical Library",
            ],
        },
        employment: {
            title: "Verification Services",
            links: [
                "E-Verify",
                "E-Verify+",
                "I-9 Central",
                "myE-Verify",
                "SAVE",
            ],
        },
    },

    es: {
        metaTitle: "Inicio | USCIS",
        langLabelEn: "English",
        langLabelEs: "Español",
        hero: {
            badge: "Nueva herramienta de informes disponible",
            title: "para usuarios de SAVE y E-Verify",
            body: "Inicie sesión en su cuenta para generar un Informe de Cambio de Estatus y así identificar casos afectados por la terminación de permisos de permanencia (parole) y revocación de EAD.",
            btnEverify: "Usuarios de E-Verify",
            btnSave: "Usuarios de SAVE",
        },
        beforeVisit: {
            title: "Antes de Visitarnos",
            body: "Verifique la información actualizada sobre cierres de oficinas y su ubicación antes de visitar una de nuestras oficinas.",
            linkOffices: "Estatus de Nuestras Oficinas",
            linkFindOffice: "Encuentre una Oficina de USCIS",
        },
        fileOnline: {
            title: "Presentar Solicitud en Línea",
            body1: `Presentar un formulario en línea es más fácil y rápido que presentarlo en papel. Esto le permite una manera simple y personalizada de verificar su caso en línea. También puede acceder a otros servicios de USCIS.`,
            body2: "El primer paso es crear una cuenta.",
            formLink: "formulario en línea",
            accountLink: "crear una cuenta",
        },
        manageCase: {
            title: "Maneje su Caso",
            intro:
                "Utilice nuestras herramientas y otros recursos en línea para manejar su caso:",
            item1: "Verificar el estatus de su caso",
            item2: "Verificar los tiempos de procesamiento",
            item3: "Cambiar su dirección en línea",
        },
        news: {
            title: "Noticias y Alertas",
            items: [
                {
                    month: "NOV",
                    day: "27",
                    title:
                        "USCIS Implementa Medidas Adicionales de Seguridad Nacional tras el Tiroteo a la Guardia Nacional",
                    date: "27 de noviembre de 2025",
                    type: "Comunicados de Prensa",
                },
                {
                    month: "NOV",
                    day: "26",
                    title:
                        "DHS Da por Terminado el Estatus de Protección Temporal (TPS) para Haití",
                    date: "26 de noviembre de 2025",
                    type: "Alertas",
                },
            ],
        },
        social: {
            title: "Redes Sociales",
            placeholder:
                "Aquí podrías incrustar el widget de Facebook/Twitter (solo como demostración).",
        },
        research: {
            title: "Investigación",
            links: [
                "Datos de Inmigración y Ciudadanía",
                "Sala de Lectura Electrónica",
                "Ley de Libertad de Información (FOIA)",
                "Leyes y Políticas",
                "Biblioteca Histórica",
            ],
        },
        employment: {
            title: "Verificación de Empleo",
            links: [
                "E-Verify – Verifique la autorización de empleo",
                "E-Verify+",
                "Central I-9 para Empleadores",
                "myE-Verify",
                "SAVE",
            ],
        },
    },
};

export default function Welcome() {
    const { props } = usePage();
    // Laravel te puede mandar esto desde el controlador:
    // Inertia::render('Welcome', ['locale' => app()->getLocale(), ...])
    const locale = props.locale || "en";
    const t = translations[locale] || translations.en;

    return (
        <PublicLayout>
            <Head title={t.metaTitle} />

            {/* HERO principal (banner azul con botones E-Verify / SAVE) */}
            <HeaderCarousel />

            {/* Sección Know / File Online / Manage con imágenes */}
            <HomeInfoSections t={t} />

            {/* Sección News & Social Media */}
            <HomeNewsAndSocial t={t} />

            {/* Sección Research & Verification Services */}
            <HomeResearchAndVerification t={t} />

            {/* Footer público completo */}
            <PublicFooterBar t={t} />


        </PublicLayout>
    );
}
