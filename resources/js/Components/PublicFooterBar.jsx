// resources/js/Components/PublicFooterBar.jsx
import React from "react";
import { Link } from "@inertiajs/react";
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaLinkedinIn,
    FaEnvelope,
} from "react-icons/fa";

const translations = {
    en: {
        returnToTop: "Return to top",
        menu: {
            topics: "Topics",
            forms: "Forms",
            newsroom: "Newsroom",
            citizenship: "Citizenship",
            greenCard: "Green Card",
            laws: "Laws",
            tools: "Tools",
        },
        logoAlt: "U.S. Citizenship and Immigration Services",
        logoLine1: "U.S. Citizenship",
        logoLine2: "and Immigration",
        logoLine3: "Services",
        contactLink: "Contact USCIS",
    },
    es: {
        returnToTop: "Volver al inicio",
        menu: {
            topics: "Temas",
            forms: "Formularios",
            newsroom: "Noticias",
            citizenship: "Ciudadanía",
            greenCard: "Residencia Permanente",
            laws: "Leyes",
            tools: "Herramientas",
        },
        logoAlt: "Servicios de Ciudadanía e Inmigración de EE. UU.",
        logoLine1: "Servicios de",
        logoLine2: "Ciudadanía e",
        logoLine3: "Inmigración",
        contactLink: "Contactar a USCIS",
    },
};

export default function PublicFooterBar({ t }) {
    // Lógica que ya usas en otros componentes
    const locale =
        t?.metaTitle && t.metaTitle.startsWith("Inicio") ? "es" : "en";

    const current = translations[locale] || translations.en;
    const menu = current.menu || {};

    const handleReturnTop = (e) => {
        e.preventDefault();
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="mt-10 border-t border-gray-300">
            {/* Return to top / Volver al inicio */}
            <div className="max-w-6xl mx-auto px-3 py-2 text-xs">
                <a
                    href="#"
                    onClick={handleReturnTop}
                    className="text-purple-800 underline hover:no-underline"
                >
                    {current.returnToTop}
                </a>
            </div>

            {/* Barra gris con menú, logo y redes */}
            <div className="bg-[#f5f5f5] border-y border-gray-300">
                <div className="max-w-6xl mx-auto px-3 py-4">
                    {/* Menú superior */}
                    <nav className="flex flex-wrap gap-4 text-sm font-semibold text-gray-800 mb-4">
                        <a href="#" className="hover:underline">
                            {menu.topics}
                        </a>
                        <a href="#" className="hover:underline">
                            {menu.forms}
                        </a>
                        <a href="#" className="hover:underline">
                            {menu.newsroom}
                        </a>
                        <a href="#" className="hover:underline">
                            {menu.citizenship}
                        </a>
                        <a href="#" className="hover:underline">
                            {menu.greenCard}
                        </a>
                        <a href="#" className="hover:underline">
                            {menu.laws}
                        </a>
                        <a href="#" className="hover:underline">
                            {menu.tools}
                        </a>
                    </nav>

                    {/* Logo + redes + Contact link */}
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        {/* Logo USCIS */}
                        <div className="flex items-center gap-3">
                            <img
                                src="/img/USCIS_Signature_Preferred_FC.png"
                                alt={current.logoAlt}
                                className="h-auto w-[290px]"
                            />
                            
                        </div>

                        {/* Redes sociales + Contact USCIS (texto debajo de iconos) */}
                        <div className="flex flex-col items-start md:items-end gap-2">
                            <div className="flex items-center gap-2">
                                {[
                                    { icon: <FaFacebookF />, href: "#" },
                                    { icon: <FaTwitter />, href: "#" },
                                    { icon: <FaYoutube />, href: "#" },
                                    { icon: <FaInstagram />, href: "#" },
                                    { icon: <FaLinkedinIn />, href: "#" },
                                    { icon: <FaEnvelope />, href: "#" },
                                ].map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className="w-12 h-12 flex items-center justify-center bg-gray-300 text-gray-800 text-lg hover:bg-gray-400"
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>

                            <Link
                                href="#"
                                className="text-sm font-semibold text-sky-800 hover:underline"
                            >
                                {current.contactLink}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
