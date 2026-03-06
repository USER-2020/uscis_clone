// resources/js/Components/PublicNavbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import HeaderCarousel from "@/Components/HeaderCarousel";

export default function PublicNavbar() {
    const { locale = "en" } = usePage().props;
    const isEnglish = locale === "en";

    const [signOpen, setSignOpen] = useState(false);
    const [howOpen, setHowOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null); // menú activo

    const signRef = useRef(null);
    const megaRef = useRef(null); // contenedor del mega-menú

    const [isMobile, setIsMobile] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Cerrar dropdown de Sign In al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!signOpen) return;
            if (!signRef.current) return;
            if (!signRef.current.contains(event.target)) {
                setSignOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [signOpen]);



    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // Cerrar mega-menú al hacer click fuera
    useEffect(() => {
        const handleClickOutsideMega = (event) => {
            // En móvil NO queremos cerrar por click fuera
            if (isMobile) return;

            if (!openMenu) return;
            if (!megaRef.current) return;
            if (!megaRef.current.contains(event.target)) {
                setOpenMenu(null);
            }
        };

        document.addEventListener("click", handleClickOutsideMega, true);
        return () => {
            document.removeEventListener("click", handleClickOutsideMega, true);
        };
    }, [openMenu, isMobile]);

    const switchLangHref = (lang) => {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", lang);
        return url.pathname + url.search;
    };


    // Helper de traducción rápida
    const t = (en, es) => (isEnglish ? en : es);

    // Configuración de todos los mega-menús
    const megaMenus = [
        {
            key: "topics",
            label: t("Topics", "Temas"),
            title: t("Topics", "Temas"),
            columns: [
                // Columna 1: Familia + Adopciones
                {
                    heading: t("Family", "Familia"),
                    links: [
                        t(
                            "Family of U.S. Citizens",
                            "Familiares de Ciudadanos Estadounidenses"
                        ),
                        t(
                            "Family of Refugees and Asylees",
                            "Familiares de Refugiados y Asilados"
                        ),
                        t(
                            "Family of Green Card Holders (Permanent Residents)",
                            "Familiares de Residentes Permanentes"
                        ),
                    ],
                    extraHeading: t("Adoption", "Adopciones"),
                    extraLinks: [
                        t("Before You Start", "Antes de Empezar"),
                        t(
                            "Immigration through Adoption",
                            "Inmigración por Medio de la Adopción"
                        ),
                    ],
                },

                // Columna 2: Militares
                {
                    heading: t("Military", "Militares"),
                    links: [
                        t(
                            "Citizenship for Military Family Members",
                            "Ciudadanía para Familiares de Militares"
                        ),
                        t(
                            "Naturalization Through Military Service",
                            "Naturalización por Medio del Servicio Militar"
                        ),
                    ],
                },

                // Columna 3: Visite / Trabajar
                {
                    heading: t("Visit the U.S.", "Visite Estados Unidos"),
                    links: [
                        t(
                            "Change My Nonimmigrant Status",
                            "Cambiar su Estatus de No Inmigrante"
                        ),
                        t("Extend Your Stay", "Extienda su Estadía"),
                    ],
                    extraHeading: t(
                        "Working in the United States",
                        "Trabajar en Estados Unidos"
                    ),
                    extraLinks: [
                        t("Permanent Workers", "Trabajadores Permanentes"),
                        t(
                            "Temporary (Nonimmigrant) Workers",
                            "Trabajadores Temporales (No Inmigrantes)"
                        ),
                        t("E-Verify", "E-Verify"),
                        t("I-9 Central", "Central I-9"),
                    ],
                },

                // Columna 4: Evite / Empleos
                {
                    heading: t(
                        "Avoid Immigration Scams",
                        "Evite las Estafas de Inmigración"
                    ),
                    links: [
                        t("Find Legal Services", "Encuentre Servicios Legales"),
                        t("Common Scams", "Estafas Comunes"),
                        t(
                            "Report Immigration Scams",
                            "Reporte Estafas de Inmigración"
                        ),
                    ],
                    extraHeading: t("Careers at USCIS", "Empleos en USCIS"),
                    extraLinks: [
                        t("Career Opportunities", "Oportunidades Profesionales"),
                        t(
                            "Special Hiring Programs",
                            "Programas de Reclutamiento Especial"
                        ),
                    ],
                },
            ],
        },
        {
            key: "forms",
            label: t("Forms", "Formularios"),
            title: t("Forms", "Formularios"),
            columns: [
                {
                    heading: t(
                        "Most Accessed Forms",
                        "Formularios más consultados"
                    ),
                    links: [
                        t(
                            "I-9, Employment Eligibility Verification",
                            "I-9, Verificación de Elegibilidad de Empleo"
                        ),
                        t(
                            "I-485, Application to Register Permanent Residence or Adjust Status",
                            "I-485, Solicitud para registrar la residencia permanente o ajustar estatus"
                        ),
                        t(
                            "I-765, Application for Employment Authorization",
                            "I-765, Solicitud de autorización de empleo"
                        ),
                        t(
                            "I-90, Application to Replace Permanent Resident Card (Green Card)",
                            "I-90, Solicitud para reemplazar la Tarjeta de Residente Permanente (Green Card)"
                        ),
                        t(
                            "N-400, Application for Naturalization",
                            "N-400, Solicitud de naturalización"
                        ),
                    ],
                },
                {
                    heading: t(
                        "Family Based Forms",
                        "Formularios basados en la familia"
                    ),
                    links: [
                        t(
                            "I-129F, Petition for Alien Fiancé(e)",
                            "I-129F, Petición para prometido(a) extranjero(a)"
                        ),
                        t(
                            "I-130, Petition for Alien Relative",
                            "I-130, Petición para familiar extranjero"
                        ),
                        t(
                            "I-360, Petition for Amerasian, Widow(er), or Special Immigrant",
                            "I-360, Petición para amerasiano, viudo(a) o inmigrante especial"
                        ),
                        t(
                            "I-600, Petition to Classify Orphan as an Immediate Relative",
                            "I-600, Petición para clasificar a un huérfano como familiar inmediato"
                        ),
                        t(
                            "I-751, Petition to Remove Conditions on Residence",
                            "I-751, Petición para eliminar las condiciones de la residencia"
                        ),
                    ],
                    // bloque adicional en la MISMA columna (All Forms / File Online)
                    extraHeading: "", // puedes dejarlo vacío para que solo se vean los links
                    extraLinks: [
                        t("All Forms", "Todos los formularios"),
                        t("File Online", "Presentar en línea"),
                    ],
                },
                {
                    heading: t(
                        "Employment Based Forms",
                        "Formularios basados en el empleo"
                    ),
                    links: [
                        t(
                            "I-129, Petition for a Nonimmigrant Worker",
                            "I-129, Petición para trabajador no inmigrante"
                        ),
                        t(
                            "I-140, Immigrant Petition for Alien Workers",
                            "I-140, Petición de inmigrante para trabajador extranjero"
                        ),
                        t(
                            "I-526, Immigrant Petition by Standalone Investor",
                            "I-526, Petición de inmigrante por inversionista individual"
                        ),
                        t(
                            "I-539, Application to Extend/Change Nonimmigrant Status",
                            "I-539, Solicitud para extender/cambiar estatus de no inmigrante"
                        ),
                    ],
                },
                {
                    heading: t(
                        "Humanitarian Based Forms",
                        "Formularios de carácter humanitario"
                    ),
                    links: [
                        t(
                            "I-589, Application for Asylum and for Withholding of Removal",
                            "I-589, Solicitud de asilo y suspensión de deportación"
                        ),
                        t(
                            "I-730, Refugee/Asylee Relative Petition",
                            "I-730, Petición para familiar de refugiado o asilado"
                        ),
                        t(
                            "I-821, Application for Temporary Protected Status",
                            "I-821, Solicitud de Estatus de Protección Temporal (TPS)"
                        ),
                    ],
                },
            ],
        }
        ,
        {
            key: "newsroom",
            label: t("Newsroom", "Noticias"),
            title: t("Newsroom", "Noticias"),
            columns: [
                {
                    heading: t("All News", "Todas las noticias"),
                    links: [
                        t("Alerts", "Alertas"),
                        t("Fact Sheets", "Hojas informativas"),
                        t("News Releases", "Comunicados de prensa"),
                    ],
                },
                {
                    // Columna derecha: solo headings, sin bullets
                    heading: t("Media Contacts", "Contactos de prensa"),
                    links: [],

                    // todos estos deben verse como headings en la misma columna
                    headingsOnly: [
                        t("Multimedia Gallery", "Galería multimedia"),
                        t("Social Media Directory", "Directorio de redes sociales"),
                        t(
                            "Speeches, Statements, Testimony",
                            "Discursos, declaraciones y testimonios"
                        ),
                    ],
                },
            ],
        },
        {
            key: "citizenship",
            label: t("Citizenship", "Ciudadanía"),
            title: t("Citizenship", "Ciudadanía"),
            columns: [
                {
                    heading: t("Learners", "Estudiantes"),
                    links: [
                        t("Apply for Naturalization", "Solicitar la naturalización"),
                        t(
                            "Learn About Citizenship",
                            "Aprender sobre la ciudadanía"
                        ),
                    ],
                },
                {
                    heading: t("Educators", "Educadores"),
                    links: [
                        t(
                            "Educational Products for Educators",
                            "Material educativo para educadores"
                        ),
                        t(
                            "Resources for Educational Programs",
                            "Recursos para programas educativos"
                        ),
                        t(
                            "Teacher Training Sessions",
                            "Sesiones de formación para docentes"
                        ),
                    ],
                },
                {
                    heading: t("Organizations", "Organizaciones"),
                    links: [
                        t("Outreach Tools", "Herramientas de divulgación"),
                        t(
                            "Naturalization-Related Data and Statistics",
                            "Datos y estadísticas sobre naturalización"
                        ),
                    ],
                },
                {
                    heading: t("Grants", "Subvenciones"),
                    links: [],
                },
            ],
        },
        {
            key: "green-card",
            label: t("Green Card", "Residencia permanente"),
            title: t("Green Card", "Residencia permanente"),
            columns: [
                {
                    heading: t(
                        "Green Card Processes and Procedures",
                        "Procesos y procedimientos de la Green Card"
                    ),
                    links: [
                        t("Adjustment of Status", "Ajuste de estatus"),
                        t(
                            "After We Grant Your Green Card",
                            "Después de aprobar su Green Card"
                        ),
                        t(
                            "Employment Authorization Document",
                            "Documento de autorización de empleo"
                        ),
                        t(
                            "Visa Availability and Priority Dates",
                            "Disponibilidad de visas y fechas de prioridad"
                        ),
                    ],
                },
                {
                    // Columna derecha: solo headings, sin bullets
                    heading: t(
                        "Green Card Eligibility Categories",
                        "Categorías de elegibilidad para la Green Card"
                    ),
                    links: [],

                    // todos estos deben verse como headings en la misma columna
                    headingsOnly: [
                        t(
                            "How to Apply for a Green Card",
                            "Cómo solicitar una Green Card"
                        ),
                        t(
                            "Replace Your Green Card",
                            "Reemplazar su Green Card"
                        ),
                        t(
                            "While Your Green Card Application Is Pending with USCIS",
                            "Mientras su solicitud de Green Card está pendiente con USCIS"
                        ),
                    ],
                },
            ],
        },
        {
            key: "laws",
            label: t("Laws", "Leyes"),
            title: t("Laws", "Leyes"),

            columns: [
                {
                    // Columna derecha: solo headings, sin bullets
                    heading: t("Legislation", "Legislación"),
                    links: [
                        t(
                            "Immigration and Nationality Act",
                            "Ley de Inmigración y Nacionalidad"
                        ),
                    ],

                    // todos estos deben verse como headings en la misma columna
                    headingsOnly: [
                        t(
                            "Class Action, Settlement Notices and Agreements",
                            "Demandas colectivas, avisos y acuerdos de conciliación"
                        ),
                        t(
                            "Unlawful Presence and Inadmissibility",
                            "Presencia ilegal e inadmisibilidad"
                        ),
                        t("Policy Manual", "Manual de políticas"),
                    ],
                },
                {
                    heading: t("Regulations", "Reglamentos"),
                    links: [],
                    headingsOnly: [
                        t("Administrative Appeals", "Recursos administrativos"),
                    ],         // solo heading, sin items debajo
                },
            ],
        },
        {
            key: "tools",
            label: t("Tools", "Herramientas"),
            title: t("Tools", "Herramientas"),
            columns: [
                {
                    // Columna 1: Alien + Self-Help Tools
                    heading: t(
                        "Alien Registration Requirement",
                        "Requisito de registro de extranjeros"
                    ),
                    links: [],

                    extraHeading: t("Self-Help Tools", "Herramientas de autoayuda"),
                    extraLinks: [
                        t(
                            "Check Case Processing Times",
                            "Consultar tiempos de procesamiento"
                        ),
                        t("Case Status Online", "Estatus de caso en línea"),
                        t("Change of Address", "Cambio de dirección"),
                        t("E-Request", "Solicitud electrónica (E-Request)"),
                        t(
                            "Password Resets and Technical Support",
                            "Restablecimiento de contraseña y soporte técnico"
                        ),
                    ],
                },
                {
                    // Columna 2
                    heading: t("Website Resources", "Recursos del sitio web"),
                    links: [
                        t("Archive", "Archivo"),
                        t("A-Z Index", "Índice A-Z"),
                        t("Website Policies", "Políticas del sitio web"),
                    ],
                },
                {
                    // Columna 3
                    heading: t("Additional Resources", "Recursos adicionales"),
                    links: [
                        t("Explore my Options", "Explorar mis opciones"),
                        t(
                            "Immigration and Citizenship Data",
                            "Datos de inmigración y ciudadanía"
                        ),
                        t(
                            "Multilingual Resource Center",
                            "Centro de recursos multilingües"
                        ),
                        t(
                            "USCIS Tools and Resources",
                            "Herramientas y recursos de USCIS"
                        ),
                    ],
                },
            ],
        }

    ];

    const currentMega = megaMenus.find((m) => m.key === openMenu);

    return (
        <>
            {/* Franja superior gobierno */}
            <div className="w-full bg-[#f5f5f5] text-[11px] text-gray-700">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-3 py-1">
                    <div className="flex items-center gap-2">
                        <img
                            alt="U.S. flag"
                            src="/img/USFlag-Icon-2x.png"
                            height={13}
                            width={23}
                        />
                        <span>
                            {isEnglish
                                ? "An official website of the United States government"
                                : "Un sitio web oficial del gobierno de Estados Unidos"}
                        </span>
                        <button
                            onClick={() => setHowOpen(!howOpen)}
                            className="ml-2 text-[11px] text-[#006699] hover:underline flex items-center gap-1"
                        >
                            {isEnglish
                                ? "Here’s how you know"
                                : "Así es como usted puede verificarlo"}
                            <span>{howOpen ? "▴" : "▾"}</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        {isEnglish ? (
                            <Link
                                href={switchLangHref("es")}
                                className="text-[11px] text-[#006699] hover:underline"
                            >
                                Español
                            </Link>
                        ) : (
                            <Link
                                href={switchLangHref("en")}
                                className="text-[11px] text-[#006699] hover:underline"
                            >
                                English
                            </Link>
                        )}

                        {!isMobile && (
                            <>
                                <span className="text-gray-400">|</span>

                                <button className="flex items-center gap-1 text-[11px] text-[#006699] hover:underline">
                                    <svg
                                        className="w-3 h-3"
                                        role="presentation"
                                        aria-hidden="true"
                                        focusable="false"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 496 512"
                                        width="12"
                                        height="12"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm193.2 152h-82.5c-9-44.4-24.1-82.2-43.2-109.1 55 18.2 100.2 57.9 125.7 109.1zM336 256c0 22.9-1.6 44.2-4.3 64H164.3c-2.7-19.8-4.3-41.1-4.3-64s1.6-44.2 4.3-64h167.4c2.7 19.8 4.3 41.1 4.3 64zM248 40c26.9 0 61.4 44.1 78.1 120H169.9C186.6 84.1 221.1 40 248 40zm-67.5 10.9c-19 26.8-34.2 64.6-43.2 109.1H54.8c25.5-51.2 70.7-90.9 125.7-109.1zM32 256c0-22.3 3.4-43.8 9.7-64h90.5c-2.6 20.5-4.2 41.8-4.2 64s1.6 43.5 4.2 64H41.7c-6.3-20.2-9.7-64zm22.8 96h82.5c9 44.4 24.1 82.2 43.2 109.1-55-18.2-100.2-57.9-125.7-109.1zM248 472c-26.9 0-61.4-44.1-78.1-120h156.2c-16.7 75.9-51.2 120-78.1 120zm67.5-10.9c19-26.8 34.2-64.6 43.2-109.1h82.5c-25.5 51.2-70.7 90.9-125.7 109.1zM363.8 320c2.6-20.5 4.2-41.8 4.2-64s-1.5-43.5-4.2-64h90.5c6.3 20.2 9.7 41.7 9.7 64s-3.4 43.8-9.7 64h-90.5z"
                                        />
                                    </svg>
                                    {isEnglish ? "Multilingual Resources" : "Recursos multilingües"}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Bloque explicativo */}
            {howOpen && (
                <div className="w-full bg-[#f5f5f5] text-[11px] text-gray-700">
                    <div className="max-w-6xl mx-auto px-3 py-3">
                        <div className="bg-transparent px-6 py-4 flex flex-col sm:flex-row sm:justify-between gap-6">
                            {/* Izquierda */}
                            <div className="flex items-start gap-3 sm:flex-1">
                                <div className="mt-1">
                                    <div className="rounded-full flex items-center justify-center text-[#006699]">
                                        <img
                                            alt="Official Government Website"
                                            src="/img/icon-dot-gov@2x.png"
                                            height={60}
                                            width={60}
                                        />
                                    </div>
                                </div>
                                <div className="text-[16.96px] leading-snug text-gray-700 text-justify">
                                    <h3 className="font-extrabold text-gray-800 mb-1">
                                        {isEnglish ? (
                                            <>
                                                Official websites use <strong>.org</strong>
                                            </>
                                        ) : (
                                            <>
                                                Los sitios oficiales usan <strong>.org</strong>
                                            </>
                                        )}
                                    </h3>
                                    <p>
                                        {isEnglish ? (
                                            <>
                                                A <strong>.org</strong> website belongs to an official
                                                government organization in the United States.
                                            </>
                                        ) : (
                                            <>
                                                Un sitio <strong>.org</strong> pertenece a una
                                                organización oficial del gobierno de los Estados Unidos.
                                            </>
                                        )}
                                    </p>
                                </div>
                            </div>

                            {/* Derecha */}
                            <div className="flex items-start gap-3 sm:flex-1">
                                <div className="mt-1">
                                    <div className="rounded-full flex items-center justify-center text-green-600">
                                        <img
                                            alt="Secure Website"
                                            src="/img/icon-https@2x.png"
                                            height={100}
                                            width={100}
                                        />
                                    </div>
                                </div>
                                <div className="text-[16.96px] leading-snug text-gray-700 text-justify">
                                    <h3 className="font-extrabold text-gray-800 mb-1">
                                        {isEnglish
                                            ? "Secure .org websites use HTTPS"
                                            : "Los sitios .org seguros usan HTTPS"}
                                    </h3>
                                    <p className="text-[16.96px] leading-snug text-gray-700 text-justify">
                                        {isEnglish ? (
                                            <>

                                                A &nbsp;
                                                <strong>
                                                    lock (
                                                    <span className="inline-block align-middle">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 52 64"
                                                            className="w-3 h-3 inline-block"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                                                                fill="currentColor"
                                                                fillRule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                </strong>
                                                ) or <strong>https://</strong> means you've safely connected to the .org
                                                website. Share sensitive information only on official,
                                                secure websites.
                                            </>
                                        ) : (
                                            <>
                                                Un &nbsp;
                                                <strong>

                                                    candado (
                                                    <span className="inline-block align-middle">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 52 64"
                                                            className="w-3 h-3 inline-block"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                                                                fill="currentColor"
                                                                fillRule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                </strong>
                                                ) o <strong>https://</strong> significa que se ha conectado de forma
                                                segura al sitio .org. Comparta información sensible solo
                                                en sitios oficiales y seguros.
                                            </>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Header principal */}
            {/* Header principal */}
            <header className="bg-white border-b">
                {/* DESKTOP / TABLET (>= lg) */}
                {!isMobile && (
                    <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 gap-8 mt-4">
                        {/* Logo USCIS */}
                        <div className="flex items-center gap-4">
                            <Link href="/">
                                <img
                                    src="/img/USCIS_Signature_Preferred_FC.png"
                                    alt="U.S. Citizenship and Immigration Services"
                                    width={220}
                                    className="block"
                                />
                            </Link>
                        </div>

                        {/* Search + Sign In */}
                        <div className="flex items-center justify-end gap-6 flex-1">
                            {/* Search bar */}
                            <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 w-[400px]">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    name="search"
                                    title="search"
                                    aria-label="search"
                                    id="gsc-i-id1"
                                    dir="ltr"
                                    spellCheck={false}
                                    placeholder={
                                        isEnglish ? "Search our site" : "Buscar en nuestro sitio"
                                    }
                                    className="flex-1 text-sm border-none outline-none focus:outline-none focus:ring-0 bg-transparent text-gray-800 placeholder:text-gray-500 h-[28px]"
                                />
                                <button
                                    type="submit"
                                    className="ml-2 text-[#0066a1] hover:text-[#004f7a] flex items-center justify-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <circle cx="11" cy="11" r="7" />
                                        <line x1="16" y1="16" x2="21" y2="21" />
                                    </svg>
                                </button>
                            </div>

                            {/* Separador vertical */}
                            <div className="h-6 border-l border-gray-300" />

                            {/* Sign In con dropdown */}
                            <div className="flex items-center justify-end">
                                <div className="relative" ref={signRef}>
                                    <button
                                        type="button"
                                        onClick={() => setSignOpen((prev) => !prev)}
                                        className="flex items-center gap-1 font-semibold text-sm hover:underline text-[#004272]"
                                        style={{
                                            fontFamily:
                                                'source_sans_pro_semibold, "Source Sans Pro Semibold", Arial, sans-serif',
                                            fontSize: "18px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {isEnglish ? "Sign In" : "Iniciar sesión"}

                                        <svg
                                            className="w-4 h-4"
                                            viewBox="0 0 320 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                        >
                                            <path
                                                fill="currentColor"
                                                d={
                                                    signOpen
                                                        ? "M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                                                        : "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                                }
                                            />
                                        </svg>
                                    </button>

                                    {signOpen && (
                                        <div className="absolute right-0 mt-4 w-48 bg-white border border-gray-200 shadow-lg text-sm py-2 px-1 z-30">
                                            <button
                                                type="button"
                                                className="block w-full text-left px-4 py-2 text-[#004272] text-[17px] font-semibold hover:bg-[#E6F5FD]"
                                            >
                                                {isEnglish ? "Sign In" : "Iniciar sesión"}
                                            </button>
                                            <button
                                                type="button"
                                                className="block w-full text-left px-4 py-2 text-[#004272] text-[17px] font-semibold hover:bg-[#E6F5FD]"
                                            >
                                                {isEnglish ? "Create Account" : "Crear cuenta"}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* MOBILE (logo + MENU arriba, buscador abajo a todo el ancho) */}
                {isMobile && (
                    <div className="max-w-6xl mx-auto px-4 py-4 mt-4">
                        {/* Fila 1: Logo + MENU */}
                        <div className="flex items-center justify-between mb-3">
                            <Link href="/">
                                <img
                                    src="/img/USCIS_Signature_Preferred_FC.png"
                                    alt="U.S. Citizenship and Immigration Services"
                                    width={180}
                                    className="block"
                                />
                            </Link>

                            <button
                                onClick={() => setMobileOpen(true)}
                                className="px-4 py-2 bg-[#0c5a87] text-white font-semibold"
                            >
                                MENU
                            </button>
                        </div>

                        {/* Fila 2: Search bar a todo el ancho */}
                        <div className="w-full">
                            <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 w-full">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    name="search"
                                    title="search"
                                    aria-label="search"
                                    id="gsc-i-id1"
                                    dir="ltr"
                                    spellCheck={false}
                                    placeholder={
                                        isEnglish ? "Search our site" : "Buscar en nuestro sitio"
                                    }
                                    className="flex-1 text-sm border-none outline-none focus:outline-none focus:ring-0 bg-transparent text-gray-800 placeholder:text-gray-500 h-[28px]"
                                />
                                <button
                                    type="submit"
                                    className="ml-2 text-[#0066a1] hover:text-[#004f7a] flex items-center justify-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <circle cx="11" cy="11" r="7" />
                                        <line x1="16" y1="16" x2="21" y2="21" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Menú inferior + mega-menú (ya lo tienes, solo lo dejo igual) */}
                <nav className={`bg-white relative ${isMobile ? "hidden" : ""}`} ref={megaRef}>
                    <div className="max-w-6xl mx-auto flex justify-center gap-6 px-4 text-sm">
                        {megaMenus.map((item) => (
                            <button
                                key={item.key}
                                type="button"
                                // CLICK: abre/cierra ese menú y lo deja fijo
                                onClick={() =>
                                    setOpenMenu((prev) =>
                                        prev === item.key ? null : item.key
                                    )
                                }
                                className={`py-3 font-semibold flex items-center gap-1 ${openMenu === item.key
                                    ? "text-[#0071bc] border-b-2 border-[#0071bc]"
                                    : "text-[#004272] hover:text-[#0071bc]"
                                    }`}
                            >
                                <span>{item.label}</span>
                                <svg
                                    className="w-3 h-3"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d={
                                            openMenu === item.key
                                                ? "M5 13l5-5 5 5"
                                                : "M5 7l5 5 5-5"
                                        }
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        ))}
                    </div>

                    {/* Mega menú azul */}
                    {currentMega && (
                        <div className="absolute left-0 right-0 bg-[#004272] text-white shadow-lg z-40 min-h-[350px] overflow-auto">
                            <div className="max-w-6xl mx-auto px-6 py-6">
                                <h2 className="text-[30px] font-bold mb-2">
                                    {currentMega.title}
                                </h2>
                                <div className="h-px bg-white/60 mb-4" />

                                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm">
                                    {currentMega.columns.map((col, idx) => (
                                        <div key={idx}>
                                            {/* Bloque principal */}
                                            {col.heading && (
                                                <h3 className="font-semibold mb-2 text-[17px]">
                                                    {col.heading}
                                                </h3>
                                            )}

                                            {col.links?.length > 0 && (
                                                <ul className="space-y-1">
                                                    {col.links.map((link) => (
                                                        <li
                                                            key={link}
                                                            className="ml-3 mb-4 w-[200px]"
                                                        >
                                                            <Link
                                                                href="#"
                                                                onClick={() => setOpenMenu(null)}
                                                                className="hover:underline text-[14.88px]"
                                                            >
                                                                {link}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Bloque extra opcional (Adopciones, Visite/Trabajar, All Forms, etc.) */}
                                            {(col.extraHeading ||
                                                (col.extraLinks && col.extraLinks.length > 0)) && (
                                                    <>
                                                        {col.extraHeading && (
                                                            <h3 className="font-semibold mt-5 mb-2 text-[17px]">
                                                                {col.extraHeading}
                                                            </h3>
                                                        )}

                                                        {col.extraLinks?.length > 0 && (
                                                            <ul
                                                                className={`space-y-1 ${col.extraHeading ? "" : "mt-4"
                                                                    }`}
                                                            >
                                                                {col.extraLinks.map((link) => (
                                                                    <li
                                                                        key={link}
                                                                        className="ml-3 mb-4 w-[200px]"
                                                                    >
                                                                        <Link
                                                                            href="#"
                                                                            onClick={() =>
                                                                                setOpenMenu(null)
                                                                            }
                                                                            className="hover:underline text-[14.88px]"
                                                                        >
                                                                            {link}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </>
                                                )}

                                            {/* SOLO headings adicionales (caso Green Card derecha) */}
                                            {col.headingsOnly?.length > 0 &&
                                                col.headingsOnly.map((h, i) => (
                                                    <h3
                                                        key={h}
                                                        className={`font-semibold text-[17px] ${
                                                            // primer heading extra: dale margen arriba
                                                            i === 0 &&
                                                                (col.links?.length > 0 ||
                                                                    col.heading)
                                                                ? "mt-5"
                                                                : "mt-2"
                                                            }`}
                                                    >
                                                        {h}
                                                    </h3>
                                                ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </header>

            {/* MOBILE SLIDE MENU */}
            {isMobile && mobileOpen && (
                <div className="fixed inset-0 z-50">
                    {/* overlay oscuro */}
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setMobileOpen(false)}
                    />

                    {/* panel derecho */}
                    <div
                        className="absolute top-0 right-0 h-full w-72 max-w-full bg-white shadow-xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* header con X a la derecha */}
                        <div className="flex justify-end px-4 py-3">
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="w-8 h-8 flex items-center justify-center border-2 border-[#0168a5] text-[#0168a5] font-bold"
                            >
                                ×
                            </button>
                        </div>

                        {/* Sign In / Create Account */}
                        <div className="px-4 pb-3 border-b">
                            <button
                                type="button"
                                className="block w-full text-left text-[#004272] font-semibold text-[16px] mb-2"
                                // TODO: cambia href/acción real
                                onClick={() => setMobileOpen(false)}
                            >
                                {isEnglish ? "Sign In" : "Iniciar sesión"}
                            </button>
                            <button
                                type="button"
                                className="block w-full text-left text-[#004272] font-semibold text-[16px]"
                                // TODO: cambia href/acción real
                                onClick={() => setMobileOpen(false)}
                            >
                                {isEnglish ? "Create Account" : "Crear cuenta"}
                            </button>
                        </div>

                        {/* acordeones de menús */}
                        <nav className="flex-1 overflow-y-auto">
                            {megaMenus.map((item) => (
                                <div key={item.key} className="border-b">
                                    <button
                                        className="w-full flex justify-between items-center px-4 py-3 text-left text-[#004272] font-semibold"
                                        onClick={() =>
                                            setOpenMenu(openMenu === item.key ? null : item.key)
                                        }
                                    >
                                        <span>{item.label}</span>
                                        <span className="text-xl leading-none">
                                            {openMenu === item.key ? "−" : "+"}
                                        </span>
                                    </button>

                                    {openMenu === item.key && (
                                        <div className="px-6 pb-3 text-sm space-y-2">
                                            {item.columns.map((col, cidx) => (
                                                <div key={cidx} className="mt-1">
                                                    {col.heading && (
                                                        <div className="font-semibold mt-1">
                                                            {col.heading}
                                                        </div>
                                                    )}

                                                    {col.links?.map((l) => (
                                                        <Link
                                                            key={l}
                                                            href="#"
                                                            className="block py-1 text-[#006699]"
                                                            onClick={() => setMobileOpen(false)}
                                                        >
                                                            {l}
                                                        </Link>
                                                    ))}

                                                    {col.headingsOnly?.map((h) => (
                                                        <div
                                                            key={h}
                                                            className="font-semibold mt-2"
                                                        >
                                                            {h}
                                                        </div>
                                                    ))}

                                                    {col.extraLinks?.map((l) => (
                                                        <Link
                                                            key={l}
                                                            href="#"
                                                            className="block py-1 text-[#006699]"
                                                            onClick={() => setMobileOpen(false)}
                                                        >
                                                            {l}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* parte inferior: Contact us / Multilingual Resources */}
                        <div className="border-t px-4 py-4 text-sm space-y-2">
                            <button
                                type="button"
                                className="block text-left text-[#004272]"
                                onClick={() => setMobileOpen(false)}
                            >
                                {isEnglish ? "Contact us" : "Contáctenos"}
                            </button>
                            <button
                                type="button"
                                className="block text-left text-[#004272]"
                                onClick={() => setMobileOpen(false)}
                            >
                                {isEnglish
                                    ? "Multilingual Resources"
                                    : "Recursos multilingües"}
                            </button>
                        </div>
                    </div>
                </div>
            )}



        </>
    );
}
