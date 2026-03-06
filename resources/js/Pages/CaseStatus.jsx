// resources/js/Pages/CaseStatus.jsx

import React, { useState } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import axios from "axios";
import PublicLayout from "@/Layouts/PublicLayout";
import PublicFooterBar from "@/Components/PublicFooterBar";

const translations = {
    en: {
        metaTitle: "Check Case Status | USCIS",
        pageTitle: "Check Case Status Online",
        form: {
            title: "Check Your Case Status",
            intro: (
                <p className="text-[16px]">
                    Use this tool to manage all your applications and petitions.
                </p>
            ),
            description: (
                <>
                    <i className="mb-2 text-[16px]">
                        Your receipt number is a 13-character identifier that
                        consists of three letters and 10 numbers. Omit hyphens
                        (&quot;-&quot;) when you enter your receipt number.
                        However, you may include all other characters,
                        including asterisks (&quot;*&quot;), if they appear on
                        your notice as part of the receipt number. <strong>When a receipt number is entered, the Check Status
                            button will be enabled and you can check your status.</strong>
                    </i>
                </>
            ),
            label: (<p className="text-[16px] font-light">Enter Your Receipt Number</p>),
            placeholder: "EAC1234567890",
            button: "Check Status",
            loading: "Checking...",
            invalid: "The receipt number entered is not valid. Please try again.",
            haveAccount: "Already have an account?",
            linkSignIn: "Sign In",
            needAccount: "Need an account?",
            linkCreate: "Create an account",
        },
        status: {
            successTitle: "Case Status",
            foundBody: "We found your case in our system.",
            notFoundTitle: "Case Not Found",
            notFoundBody: "We did not find a case with that receipt number. Please check and try again.",
            summaryTitle: "Case Summary",
            labels: {
                name: "Name",
                nationality: "Nationality",
                passport: "Passport",
                birthDate: "Date of Birth",
                caseNumber: "Receipt Number",
            },
        },
        notifications: {
            title1: "DHS PRIVACY NOTICE",
            title2: "PAPERWORK REDUCTION ACT",

        },
        tools: {
            title: "Related Tools",
            main: {
                title: "Change of Address",
                body: (
                    <>
                        <p className="mb-2">
                            We recommend that you update your address with USCIS
                            to make sure you receive all correspondence and
                            benefits in a timely manner and avoid possible
                            delays or denials related to your case.
                        </p>
                        <p>
                            Visit the{" "}
                            <span className="underline text-[#0000ee] cursor-pointer" >
                                Change of Address
                            </span>{" "}
                            webpage to begin the process.
                        </p>
                    </>
                ),
                button: "Visit Page",
            },
            cards: [
                {
                    title: "Submit a Case Inquiry",
                    body: "Submit an online inquiry about your case or request other services, such as an accommodation or how to correct an error on your notice.",
                    button: "Visit Page",
                },
                {
                    title: "USCIS Processing Times",
                    body: "See an estimate of how long USCIS is taking to process your application or petition at our offices.",
                    button: "Visit Page",
                },
                {
                    title: "USCIS Office Locations",
                    body: "Find local and international USCIS offices and get directions to the office.",
                    button: "Visit Page",
                },
            ],
        },
    },

    es: {
        metaTitle: "Estatus de Caso en Línea | USCIS",
        pageTitle: "El Estatus de Caso en Línea",
        form: {
            title: "Verifique el Estatus de su Caso",
            intro:
                (
                    <p className="text-[16px]">Utilice esta herramienta para administrar todas sus solicitudes y peticiones.</p>
                ),
            description: (
                <>
                    <i className="mb-2 text-[16px]">
                        El número de recibo es un identificador único de 13
                        caracteres que se compone de tres letras y 10 números.
                        Omita los guiones (&quot;-&quot;) al ingresar un número
                        de recibo. Sin embargo, puede incluir todos los demás
                        caracteres, incluidos los asteriscos (&quot;*&quot;),
                        si aparecen en su notificación como parte del número de
                        recibo. <strong>Cuando se ingresa un número de recibo, el botón de
                            Verificación de Estatus se habilitará y podrá verificar
                            el estado.</strong>
                    </i>
                </>
            ),
            label: (<p className="text-[16px] font-light">Ingrese el Número de Su Recibo</p>),
            placeholder: "EAC1234567890",
            button: "Verifique Estatus",
            loading: "Consultando...",
            invalid: "El numero de recibo ingresado no es valido, intente nuevamente.",
            haveAccount: "¿Tiene una cuenta?",
            linkSignIn: "Acceso",
            needAccount: "¿Crea una cuenta?",
            linkCreate: "Inscribirse",
        },
        status: {
            successTitle: "Estatus del Caso",
            foundBody: "Encontramos su caso en nuestro sistema.",
            notFoundTitle: "Caso No Encontrado",
            notFoundBody: "No encontramos un caso con ese numero de recibo. Verifique e intente nuevamente.",
            summaryTitle: "Resumen del Caso",
            labels: {
                name: "Nombre",
                nationality: "Nacionalidad",
                passport: "Pasaporte",
                birthDate: "Fecha de Nacimiento",
                caseNumber: "Numero de Recibo",
            },
        },
        notifications: {
            title1: "NOTIFICACIÓN DE PRIVACIDAD DE DHS",
            title2: "LEY DE REDUCCIÓN DE PAPELEO",
        },
        tools: {
            title: "Herramientas Relacionadas",
            main: {
                title: "Cambio de Dirección",
                body: (
                    <>
                        <p className="mb-2">
                            Le recomendamos que actualice su dirección con USCIS
                            para asegurarse que recibe toda la correspondencia y
                            beneficios de parte de nuestra de manera oportuna y
                            evitar posibles retrasos o denegaciones relacionadas
                            con su caso.
                        </p>
                        <p>
                            Visite la página web de{" "}
                            <span className="underline text-[#0000ee] cursor-pointer" >
                                Cambio de Dirección
                            </span>{" "}
                            para comenzar el proceso.
                        </p>
                    </>
                ),
                button: "Visite La Página",
            },
            cards: [
                {
                    title: "Envíe una Consulta de Caso",
                    body: "Envíe su consulta en línea acerca de su caso o solicite otros servicios, como una solicitud de alojamiento, o la manera de corregir un error en su notificación.",
                    button: "Visite La Página",
                },
                {
                    title: "Tiempos de Procesamiento de USCIS",
                    body: "Ver una estimación de cuánto tiempo está tomando USCIS para procesar su solicitud o petición en sus oficinas.",
                    button: "Visite La Página",
                },
                {
                    title: "Localidades de Oficinas de USCIS",
                    body: "Encuentre las oficinas locales e internacionales de USCIS y obtenga direcciones a la oficina.",
                    button: "Visite La Página",
                },
            ],
        },
    },
};

export default function CaseStatus() {
    const { props } = usePage();
    const locale = props.locale || "en";
    const t = translations[locale] || translations.en;

    const [receipt, setReceipt] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const clean = receipt.trim().toUpperCase();
    const isValid = /^[A-Z]{3}\d{10}$/.test(clean);

    const handleReceiptChange = (e) => {
        const raw = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
        const letters = raw.replace(/[^A-Z]/g, "").slice(0, 3);
        const digits = raw.replace(/[^0-9]/g, "").slice(0, 10);
        setReceipt(letters + digits);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (!isValid) return;
        setLoading(true);
        setError("");
        setResult(null);
        axios
            .post(route("case-status.lookup"), { receipt: clean })
            .then((response) => {
                setResult(response.data.case);
            })
            .catch(() => {
                setError(t.status.notFoundBody);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const caseNotes =
        result && (locale === "es" ? result.notes : result.notes_en || result.notes);

    return (
        <PublicLayout>
            <Head title={t.metaTitle} />

            <div className="max-w-6xl mx-auto mt-10 bg-white p-6 rounded shadow-md">


                <section className="max-w-6xl mx-auto ">
                    <h1 className="text-3xl font-bold mb-6">
                        {t.pageTitle}
                    </h1>

                    <div className="bg-white border shadow-md p-6 ">
                        <h2 className="text-2xl font-semibold mb-4">
                            {t.form.title}
                        </h2>

                        <p className="text-md text-gray-800 mb-3">
                            {t.form.intro}
                        </p>

                        <div className="text-md text-gray-800 mb-4 space-y-2">
                            {caseNotes ? (
                                <div dangerouslySetInnerHTML={{ __html: caseNotes }} />
                            ) : (
                                t.form.description
                            )}
                        </div>

                        <form onSubmit={handleSubmit} className="mt-4">
                            <label className="block text-md font-semibold text-gray-800 mb-1">
                                {t.form.label}
                            </label>
                            <div className={`${submitted && !isValid ? "border-l-4 border-red-600 pl-3" : ""}`}>
                                {submitted && !isValid && (
                                    <div className="text-sm text-red-700 font-semibold mb-2">
                                        {t.form.invalid}
                                    </div>
                                )}
                                <input
                                    type="text"
                                    value={receipt}
                                    onChange={handleReceiptChange}
                                    maxLength={13}
                                    inputMode="text"
                                    className={`w-full max-w-xs border px-3 py-2 text-md ${
                                        submitted && !isValid ? "border-red-600" : "border-gray-400"
                                    }`}
                                    placeholder={t.form.placeholder}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                aria-disabled={!isValid}
                                className={`mt-4 block px-6 py-2 text-md font-semibold border rounded ${
                                    isValid
                                        ? "bg-[#005EA2] text-white hover:bg-slate-700 border-[#005EA2] cursor-pointer"
                                        : "bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed"
                                }`}
                            >
                                {loading ? t.form.loading : t.form.button}
                            </button>
                        </form>

                        {error && (
                            <div className="mt-6 border border-red-300 bg-red-50 p-4">
                                <div className="text-sm font-semibold text-red-800">
                                    {t.status.notFoundTitle}
                                </div>
                                <div className="text-sm text-red-700 mt-1">
                                    {t.status.notFoundBody}
                                </div>
                            </div>
                        )}

                        {result && null}

                        <div className="mt-4 text-md text-gray-800 space-y-1">
                            <p>
                                {t.form.haveAccount}{" "}
                                <Link
                                    href="#"
                                    className="text-sky-700 hover:underline"
                                >
                                    {t.form.linkSignIn}
                                </Link>
                            </p>
                            <p>
                                {t.form.needAccount}{" "}
                                <Link
                                    href="#"
                                    className="text-sky-700 hover:underline"
                                >
                                    {t.form.linkCreate}
                                </Link>
                            </p>
                        </div>
                    </div>

                </section>

                <section className="max-w-6xl mx-auto mt-10 mb-12">
                    <div className="text-md flex justify-between items-center p-6">
                        <a href="#" className="text-decoration-none text-[#069] text-[14px]">{t.notifications.title1}</a>
                        <a href="#" className="text-decoration-none text-[#069] text-[14px]">{t.notifications.title2}</a>
                    </div>
                </section>

                {/* Herramientas relacionadas */}
                <section className="max-w-6xl mx-auto mt-10 mb-12">


                    <h2 className="text-2xl font-semibold mb-4">
                        {t.tools.title}
                    </h2>

                    {/* Card grande arriba */}
                    <div className="bg-white border shadow-md  mb-6 grid gap-4 md:grid-cols-[260px,1fr] items-stretch">

                        <img
                            src="/img/coaImage.image1.jpg"
                            alt={t.tools.main.title}
                            className="w-full h-[290px]"
                        />

                        <div className="flex flex-col justify-between p-4">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {t.tools.main.title}
                                </h3>
                                <div className="text-md text-gray-800 space-y-2">
                                    {t.tools.main.body}
                                </div>
                            </div>
                            <button className="mb-12 inline-flex items-center justify-center bg-sky-700 text-white text-md font-semibold px-4 py-2 hover:bg-sky-800 self-start rounded">
                                {t.tools.main.button}
                            </button>
                        </div>
                    </div>

                    {/* Tres tarjetas pequeñas debajo */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {t.tools.cards.map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white border shadow-md flex flex-col"
                            >
                                <div className="h-50 overflow-hidden">
                                    <img
                                        src={`/img/uscis-tools-card-${idx + 1}.jpg`}
                                        alt={card.title}
                                        className="w-full h-[290px] object-cover"
                                    />
                                </div>
                                <div className="p-4 flex-1 flex flex-col">
                                    <h3 className="text-base font-semibold mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-md text-gray-800 flex-1">
                                        {card.body}
                                    </p>
                                    <button className="mt-4 inline-flex items-center justify-center bg-sky-700 text-white text-md font-semibold px-4 py-2 hover:bg-sky-800 self-start rounded">
                                        {card.button}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <PublicFooterBar t={t}/>
        </PublicLayout>
    );
}






