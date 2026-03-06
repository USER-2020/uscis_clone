// resources/js/Components/PublicGlobalFooter.jsx
import React from "react";
import { usePage } from "@inertiajs/react";

const translations = {
    en: {
        headingSite: "USCIS.gov",
        headingSubtitle:
            "An official website of the U.S. Department of Homeland Security",
        col1: {
            about: "About USCIS",
            accessibility: "Accessibility",
            budget: "Budget and Performance",
            dhsComponents: "DHS Components",
        },
        col2: {
            foia: "Freedom of Information Act",
            noFear: "No FEAR Act Data",
            privacy: "Privacy and Legal Disclaimers",
            siteMap: "Site Map",
        },
        col3: {
            oig: "Office of the Inspector General",
            whiteHouse: "The White House",
            usagov: "USA.gov",
        },
        ntasTitle: "National Terrorism Advisory System",
        ntasStatus: "NO CURRENT ADVISORIES",
        ntasLink: "Put this widget on your web page",
    },
    es: {
        headingSite: "USCIS.gov",
        headingSubtitle:
            "Un sitio web oficial del Departamento de Seguridad Nacional de EE. UU.",
        col1: {
            about: "Acerca de USCIS",
            accessibility: "Accesibilidad",
            budget: "Presupuesto y desempeño",
            dhsComponents: "Componentes del DHS",
        },
        col2: {
            foia: "Ley de Libertad de Información (FOIA)",
            noFear: "Datos de la Ley No FEAR",
            privacy: "Avisos de privacidad y legales",
            siteMap: "Mapa del sitio",
        },
        col3: {
            oig: "Oficina del Inspector General",
            whiteHouse: "La Casa Blanca",
            usagov: "USA.gov",
        },
        ntasTitle: "Sistema Nacional de Avisos de Terrorismo",
        ntasStatus: "NO HAY AVISOS VIGENTES",
        ntasLink: "Incluya este widget en su página web",
    },
};

export default function PublicGlobalFooter() {
    const { props } = usePage();
    const locale = props.locale || "en";
    const t = translations[locale] || translations.en;

    // clase reutilizable para los links del footer
    const linkClass =
        "block underline hover:no-underline leading-snug mb-2 sm:mb-1";

    return (
        <footer className="bg-[#005587] text-xs text-white mt-0 text-[16px]">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
                {/* Izquierda: logo + texto + 3 columnas de links */}
                <div className="flex-1 flex flex-col gap-3">
                    {/* Logo + texto superior */}
                    <div className="flex items-start gap-3">
                        <img
                            src="/img/logoUSCIS.svg"
                            alt="USCIS logo"
                            className="h-10 w-auto"
                        />
                        <div className="leading-snug">
                            <div className="font-semibold">{t.headingSite}</div>
                            <div>{t.headingSubtitle}</div>
                        </div>
                    </div>

                    {/* Links en 3 columnas */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 sm:gap-y-1 sm:gap-x-4 mt-3">
                        {/* Columna 1 */}
                        <div className="flex flex-col">
                            <a href="#" className={linkClass}>
                                {t.col1.about}
                            </a>
                            <a href="#" className={linkClass}>
                                {t.col1.accessibility}
                            </a>
                            <a href="#" className={linkClass}>
                                {t.col1.budget}
                            </a>
                            <a href="#" className={linkClass}>
                                {t.col1.dhsComponents}
                            </a>
                        </div>

                        {/* Columna 2 */}
                        <div className="flex flex-col">
                            <a href="#" className={linkClass}>
                                {t.col2.foia}
                            </a>
                            <a href="#" className={linkClass}>
                                {t.col2.noFear}
                            </a>
                            <a href="#" className={linkClass}>
                                {t.col2.privacy}
                            </a>
                            <a href="#" className={linkClass}>
                                {t.col2.siteMap}
                            </a>
                        </div>

                        {/* Columna 3 */}
                        <div className="flex flex-col">
                            <a href="#" className={linkClass}>
                                {t.col3.oig}
                            </a>
                            <a href="#" className={linkClass}>
                                {t.col3.whiteHouse}
                            </a>
                            <a href="#" className={linkClass}>
                                {t.col3.usagov}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Derecha: bloque NTAS */}
                <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                    <div className="px-4 py-3 text-center leading-snug">
                        <div className="text-[10px] mb-1">{t.ntasTitle}</div>

                        <div className="bg-white/10 px-3 py-2 mb-2 text-[11px] font-semibold">
                            <img src="/img/ntas.svg" alt="NTAS" />
                        </div>

                        <div className="text-[11px] font-semibold mb-2">
                            {t.ntasStatus}
                        </div>

                        <a
                            href="#"
                            className="text-[10px] underline hover:no-underline inline-block"
                        >
                            {t.ntasLink}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
