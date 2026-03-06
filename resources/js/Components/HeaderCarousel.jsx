// resources/js/Components/HeaderCarousel.jsx
import React, { useEffect, useState } from "react";
import { Link, usePage } from "@inertiajs/react";

// Configuración de slides con textos en EN y ES
const SLIDES = [
    {
        id: 1,
        layout: "default",
        title: {
            en: "USCIS to Mandate Electronic Payments for Applications",
            es: "USCIS exigirá pagos electrónicos para las solicitudes",
        },
        body: {
            en: "Starting on Oct. 28, 2025, USCIS will no longer accept checks, money orders, or other forms of paper payments.",
            es: "A partir del 28 de octubre de 2025, USCIS ya no aceptará cheques, giros postales ni otras formas de pago en papel.",
        },
        buttonText: {
            en: "Learn More",
            es: "Más información",
        },
        buttonHref: "#",
        image: "/img/paymetn-secured.png",
        imageAlt: {
            en: "Secure credit card illustration",
            es: "Ilustración de pago con tarjeta segura",
        },
    },
    {
        id: 2,
        layout: "recruitment",
        title: {
            en: "Join USCIS",
            es: "Únete a USCIS",
        },
        body: {
            en: "USCIS is hiring! Help us defend the homeland and secure our immigration system.",
            es: "USCIS está contratando. Ayúdanos a defender el país y proteger nuestro sistema de inmigración.",
        },
        buttonText: {
            en: "Learn More",
            es: "Más información",
        },
        secondaryButtonText: {
            en: "Apply Now",
            es: "Postúlate ahora",
        },
        buttonHref: "#",
        secondaryButtonHref: "#",
        backgroundImage: "/img/defend-banner-full.jpg",
        imageAlt: {
            en: "Defend the homeland",
            es: "Defender la patria",
        },
    },
    {
        id: 3,
        layout: "default",
        title: {
            en: "USCIS Releases New H-1B Guidance",
            es: "USCIS publica nueva guía sobre visas H-1B",
        },
        body: {
            en: "This guidance is based on President Trump’s Sept. 19, 2025 proclamation.",
            es: "Esta guía se basa en la proclamación del presidente Trump del 19 de septiembre de 2025.",
        },
        buttonText: {
            en: "Learn More",
            es: "Más información",
        },
        buttonHref: "#",
        backgroundImage: "/img/US-DEPARTAMENTO.jpg", // usa el mismo fondo del sello o cámbialo si tienes otro
        imageAlt: {
            en: "DHS Seal background",
            es: "Fondo con el sello del Departamento de Seguridad Nacional",
        },
    },
    {
        id: 4,
        layout: "default",
        title: {
            en: "USCIS Announces 2025 Naturalization Civics Test",
            es: "USCIS Anuncia el Examen Cívico de Naturalización 2025",
        },
        body: {
            en: "The 2025 test satisfies the statutory requirement for aliens to demonstrate knowledge and understanding of American history and U.S. government.",
            es: "El examen de 2025 cumple con el requisito legal para que los solicitantes demuestren conocimiento y comprensión de la historia estadounidense y del gobierno de los EE. UU.",
        },
        buttonText: {
            en: "Learn More",
            es: "Más información",
        },
        buttonHref: "#",
        backgroundImage: "/img/US-DEPARTAMENTO.jpg",
        imageAlt: {
            en: "DHS Seal background",
            es: "Fondo con el sello del Departamento de Seguridad Nacional",
        },
    },
    {
        id: 5,
        layout: "default",
        title: {
            en: "USCIS is now collecting new fees for certain immigration benefit requests.",
            es: "USCIS ahora está cobrando nuevas tarifas para ciertas solicitudes de beneficios de inmigración.",
        },
        body: {
            en: "",
            es: "",
        },
        buttonText: {
            en: "Learn More",
            es: "Más información",
        },
        buttonHref: "#",
        backgroundImage: "/img/flags-usa.jpg", // cámbiala al nombre real
        imageAlt: {
            en: "People waving U.S. flags",
            es: "Personas ondeando banderas de Estados Unidos",
        },
    },
    {
        id: 6,
        layout: "recruitment",
        title: {
            en: "U.S. Government Provides Assistance to Voluntarily Self Deport",
            es: "El Gobierno de EE. UU. ofrece asistencia para la salida voluntaria del país",
        },
        body: {
            en: "Learn how you could receive $1000 and a free plane ticket. DHS is using the CBP Home App to incentivize the voluntary self-departure of aliens illegally in the United States.",
            es: "Conozca cómo podría recibir 1.000 dólares y un tiquete aéreo gratuito. El DHS está usando la aplicación CBP Home para incentivar la salida voluntaria de personas que se encuentran ilegalmente en los Estados Unidos.",
        },
        buttonText: {
            en: "DHS – Learn More",
            es: "DHS – Más información",
        },
        secondaryButtonText: {
            en: "USCIS – Learn More",
            es: "USCIS – Más información",
        },
        buttonHref: "#",
        secondaryButtonHref: "#",
        backgroundImage: "/img/phone-app.jpg", // cambia al nombre real del archivo
        imageAlt: {
            en: "Hand holding smartphone showing the CBP Home App",
            es: "Mano sosteniendo un teléfono que muestra la aplicación CBP Home",
        },
    },
    {
        id: 7,
        layout: "recruitment",
        title: {
            en: "New Reporting Tool Available to SAVE and E-Verify Users",
            es: "Nueva herramienta de reportes disponible para usuarios de SAVE y E-Verify",
        },
        body: {
            en: "Login to your account to generate a Status Change Report to identify cases affected by parole terminations and EAD revocations.",
            es: "Inicia sesión en tu cuenta para generar un Reporte de Cambio de Estatus y así identificar los casos afectados por terminaciones de parole y revocaciones de EAD.",
        },
        buttonText: {
            en: "E-Verify Users",
            es: "Usuarios de E-Verify",
        },
        secondaryButtonText: {
            en: "SAVE Users",
            es: "Usuarios de SAVE",
        },
        buttonHref: "#",
        secondaryButtonHref: "#",
        backgroundImage: "/img/e-verify.jpg", // pon aquí el nombre real del archivo
        imageAlt: {
            en: "Banner announcing a new reporting tool for SAVE and E-Verify users",
            es: "Banner que anuncia una nueva herramienta de reportes para usuarios de SAVE y E-Verify",
        },
    },
    {
        id: 8,
        layout: "recruitment",
        title: {
            en: "How to Comply with the Alien Registration Requirement",
            es: "Cómo cumplir con el requisito de registro de extranjeros",
        },
        body: {
            en: "DHS has implemented an alien registration system as directed by President Trump. Learn who this affects and how to register.",
            es: "El DHS ha implementado un sistema de registro de extranjeros según lo ordenado por el presidente Trump. Conozca a quién afecta y cómo registrarse.",
        },
        buttonText: {
            en: "Learn More",
            es: "Más información",
        },
        secondaryButtonText: {
            en: "ARR Determination Tool",
            es: "Herramienta de determinación ARR",
        },
        buttonHref: "#",
        secondaryButtonHref: "#",
        backgroundImage: "/img/arr.jpg", // cámbialo al nombre real del archivo
        imageAlt: {
            en: "Banner about complying with the alien registration requirement",
            es: "Banner sobre cómo cumplir con el requisito de registro de extranjeros",
        },
    },
    {
        id: 9,
        layout: "default",
        title: {
            en: "Making America Safe Again",
            es: "Haciendo a América Segura Nuevamente",
        },
        body: {
            en: "USCIS is proud to support DHS efforts to Make America Safe Again.",
            es: "USCIS se enorgullece de apoyar los esfuerzos del DHS para hacer que América sea segura nuevamente.",
        },
        buttonText: {
            en: "Learn More",
            es: "Más información",
        },
        buttonHref: "#",

        // Fondo (puedes cambiar el archivo según tu asset real)
        backgroundImage: "/img/make-america-safe.jpg",

        imageAlt: {
            en: "Patriotic background banner for Making America Safe Again",
            es: "Banner patriótico para Haciendo a América Segura Nuevamente",
        },
    },
    {
        id: 10,
        layout: "default",
        title: {
            en: "Help USCIS by Reporting Fraud",
            es: "Ayude a USCIS denunciando el fraude",
        },
        body: {
            en: "Protecting the integrity of the immigration process is a priority for USCIS.",
            es: "Proteger la integridad del proceso de inmigración es una prioridad para USCIS.",
        },
        buttonText: {
            en: "Learn More",
            es: "Más información",
        },
        buttonHref: "#",
        backgroundImage: "/img/report-fraud.jpg", // cambia al nombre real del archivo
        imageAlt: {
            en: "Banner encouraging people to report immigration fraud to USCIS",
            es: "Banner que invita a reportar fraude de inmigración a USCIS",
        },
    }








];

export default function HeaderCarousel() {
    const { locale = "en" } = usePage().props;
    const lang = locale === "es" ? "es" : "en";

    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const id = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, 8000);

        return () => clearInterval(id);
    }, [isPaused]);

    const rawSlide = SLIDES[current];
    const activeSlide = {
        ...rawSlide,
        title: rawSlide.title[lang],
        body: rawSlide.body[lang],
        buttonText: rawSlide.buttonText[lang],
        secondaryButtonText: rawSlide.secondaryButtonText
            ? rawSlide.secondaryButtonText[lang]
            : undefined,
        imageAlt:
            (rawSlide.imageAlt && rawSlide.imageAlt[lang]) ||
            (rawSlide.imageAlt && rawSlide.imageAlt.en) ||
            "",
    };

    const isRecruitment = rawSlide.layout === "recruitment";

    return (
        <>
            {/* CARRUSEL (alto fijo 400px) */}
            <section className="w-full relative h-[400px] overflow-hidden">
                {/* Fondo genérico */}
                <div className="absolute inset-0 bg-[#f5f5f5]" />

                {/* Fondo con imagen para cualquier slide que lo tenga (2 y 3) */}
                {rawSlide.backgroundImage && (
                    <div className="absolute inset-0">
                        <img
                            src={rawSlide.backgroundImage}
                            alt={activeSlide.imageAlt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Contenido */}
                <div className="max-w-6xl mx-auto h-full px-4 flex flex-col justify-center relative z-10 pb-6">
                    {isRecruitment ? (
                        // ===== SLIDE 2 =====
                        <div className="h-full flex items-center">
                            <div className="bg-[#003e67] text-white px-10 py-10 max-w-xl shadow-md">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
                                    {activeSlide.title}
                                </h2>
                                <p className="text-[16.96px] leading-snug">
                                    {activeSlide.body}
                                </p>

                                <div className="flex flex-wrap gap-4 mt-8">
                                    <Link
                                        href={rawSlide.buttonHref}
                                        className="inline-flex items-center justify-center border border-white px-5 py-2 text-sm font-semibold hover:bg-white hover:text-[#005587] transition-colors"
                                    >
                                        {activeSlide.buttonText}
                                    </Link>

                                    {activeSlide.secondaryButtonText && (
                                        <Link
                                            href={rawSlide.secondaryButtonHref}
                                            className="inline-flex items-center justify-center border border-white px-5 py-2 text-sm font-semibold hover:bg-white hover:text-[#005587] transition-colors"
                                        >
                                            {activeSlide.secondaryButtonText}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        // ===== Slides 1 y 3 =====
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="max-w-xl bg-[#005587] text-white px-8 py-6 shadow-md">
                                <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">
                                    {activeSlide.title}
                                </h2>
                                <p className="text-[16.96px] mb-6 leading-snug">
                                    {activeSlide.body}
                                </p>

                                <Link
                                    href={rawSlide.buttonHref}
                                    className="inline-flex items-center justify-center border border-white px-5 py-2 text-sm font-semibold hover:bg-white hover:text-[#005587] transition-colors"
                                >
                                    {activeSlide.buttonText}
                                </Link>
                            </div>

                            {rawSlide.image && (
                                <div className="flex-1 flex justify-center md:justify-end">
                                    <img
                                        src={rawSlide.image}
                                        alt={activeSlide.imageAlt}
                                        className="max-h-64 w-auto object-contain"
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* CONTROLES CENTRADOS FUERA DEL CARRUSEL */}
            <div className="w-full bg-[#f5f5f5]">
                <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 py-3 px-4">
                    {/* Play / Pause */}
                    <button
                        type="button"
                        onClick={() => setIsPaused((p) => !p)}
                        className="w-5 h-5 flex items-center justify-center rounded-full bg-black text-white text-xs"
                        aria-label={isPaused ? "Play carousel" : "Pause carousel"}
                    >
                        {isPaused ? (
                            <svg viewBox="0 0 24 24" className="w-3 h-3" aria-hidden="true">
                                <path d="M8 5v14l11-7z" fill="currentColor" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" className="w-3 h-3" aria-hidden="true">
                                <path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="currentColor" />
                            </svg>
                        )}
                    </button>

                    {/* Puntos */}
                    <div className="flex items-center gap-2">
                        {SLIDES.map((slide, index) => (
                            <button
                                key={slide.id}
                                type="button"
                                onClick={() => setCurrent(index)}
                                className={`w-2.5 h-2.5 rounded-full border border-[#005587] ${index === current ? "bg-[#005587]" : "bg-white"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
