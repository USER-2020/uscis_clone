// resources/js/Components/HomeResearchAndVerification.jsx

import React, { useState } from "react";
import { Link } from "@inertiajs/react";

const translations = {
    en: {
        research: {
            title: "Research",
            image: "/img/USCIS_Homepage_Research.jpg",
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
            image: "/img/USCIS_Homepage_Verify.jpg",
            links: ["E-Verify", "E-Verify+", "I-9 Central", "myE-Verify", "SAVE"],
        },
        feedback: {
            question: "Was this page helpful?",
            yes: "Yes",
            no: "No",
            submit: "Submit",

            yesPrompt: "Great! Any other feedback? (Optional)",
            noPrompt: "This page was not helpful because the content:",
            improveLabel: "How can the content be improved?",

            selectPlaceholder: "Select a reason",
            reasons: [
                { value: "too_little", label: "has too little information" },
                { value: "too_much", label: "has too much information" },
                { value: "confusing", label: "is confusing" },
                { value: "out_of_date", label: "is out of date" },
                { value: "other", label: "other" },
            ],

            privacyText:
                "To protect your privacy, please do not include any personal information in your feedback. Review our",
            privacyLinkText: "Privacy Policy",
            privacyUrl: "#",
        },
    },

    es: {
        research: {
            title: "Investigación",
            image: "/img/USCIS_Homepage_Research.jpg",
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
            image: "/img/USCIS_Homepage_Verify.jpg",
            links: [
                "E-Verify – Verifique la autorización de empleo",
                "E-Verify+",
                "Central I-9 para Empleadores",
                "myE-Verify",
                "SAVE",
            ],
        },
        feedback: {
            question: "¿Le resultó útil esta página?",
            yes: "Sí",
            no: "No",
            submit: "Enviar",

            yesPrompt: "¡Excelente! ¿Algún otro comentario? (Opcional)",
            noPrompt: "Esta página no fue útil porque el contenido:",
            improveLabel: "¿Cómo se puede mejorar el contenido?",

            selectPlaceholder: "Seleccione un motivo",
            reasons: [
                { value: "too_little", label: "tiene muy poca información" },
                { value: "too_much", label: "tiene demasiada información" },
                { value: "confusing", label: "es confuso" },
                { value: "out_of_date", label: "está desactualizado" },
                { value: "other", label: "otro" },
            ],

            privacyText:
                "Para proteger su privacidad, por favor no incluya información personal en sus comentarios. Revise nuestra",
            privacyLinkText: "Política de Privacidad",
            privacyUrl: "#",
        },
    },
};

export default function HomeResearchAndVerification({ t }) {
    // Detectamos idioma usando el metaTitle que ya traes
    const locale =
        t?.metaTitle && t.metaTitle.startsWith("Inicio") ? "es" : "en";
    const current = translations[locale];

    const research = current.research;
    const employment = current.employment;
    const fb = current.feedback;

    const [helpful, setHelpful] = useState(null); // "yes" | "no" | null
    const [comments, setComments] = useState(""); // textarea (yes u 'other')
    const [reason, setReason] = useState(""); // value del select
    const maxChars = 2000;

    const isOtherReason = reason === "other";

    const canSubmit =
        helpful === "yes"
            ? comments.trim().length > 0
            : helpful === "no"
                ? isOtherReason
                    ? comments.trim().length > 0
                    : reason !== ""
                : false;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!canSubmit) return;

        const payload =
            helpful === "yes"
                ? { helpful, comments }
                : { helpful, reason, details: comments || null };

        console.log("Feedback:", payload);
    };

    const followupLabel =
        helpful === "yes" ? fb.yesPrompt : fb.noPrompt;

    return (
        <section className="max-w-6xl mx-auto mt-10">
            {/* Cards Research / Verification */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Research */}
                <div className="bg-white border shadow-sm p-4">
                    <h2 className="text-2xl font-semibold mb-4">
                        {research.title}
                    </h2>

                    <div className="w-full h-48 overflow-hidden">
                        <img
                            src={research.image}
                            alt={research.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <ul className="mt-4 list-disc list-inside space-y-1 text-sm">
                        {research.links.map((label, idx) => (
                            <li key={idx}>
                                <Link
                                    href="#"
                                    className="text-sky-700 hover:underline"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Verification Services */}
                <div className="bg-white border shadow-sm p-4">
                    <h2 className="text-2xl font-semibold mb-4">
                        {employment.title}
                    </h2>

                    <div className="w-full h-48 overflow-hidden">
                        <img
                            src={employment.image}
                            alt={employment.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <ul className="mt-4 list-disc list-inside space-y-1 text-sm">
                        {employment.links.map((label, idx) => (
                            <li key={idx}>
                                <Link
                                    href="#"
                                    className="text-sky-700 hover:underline"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Feedback */}
            <div className="mt-8 bg-white border shadow-sm px-8 py-6 text-center">
                <p className="mb-4 text-gray-800">
                    {fb.question}
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="inline-flex flex-col items-center gap-4 w-full max-w-xl"
                >
                    {/* Radios Yes / No */}
                    <div className="flex items-center justify-center gap-8">
                        <label className="inline-flex items-center gap-2 text-sm text-gray-800">
                            <input
                                type="radio"
                                name="helpful"
                                value="yes"
                                checked={helpful === "yes"}
                                onChange={() => {
                                    setHelpful("yes");
                                    setReason("");
                                    setComments("");
                                }}
                                className="h-4 w-4"
                            />
                            <span>{fb.yes}</span>
                        </label>

                        <label className="inline-flex items-center gap-2 text-sm text-gray-800">
                            <input
                                type="radio"
                                name="helpful"
                                value="no"
                                checked={helpful === "no"}
                                onChange={() => {
                                    setHelpful("no");
                                    setReason("");
                                    setComments("");
                                }}
                                className="h-4 w-4"
                            />
                            <span>{fb.no}</span>
                        </label>
                    </div>

                    {/* Bloque que se despliega solo cuando se elige Yes/No */}
                    {helpful && (
                        <div className="w-full text-left mt-2">
                            <p className="text-sm font-semibold text-gray-800 mb-2">
                                {followupLabel}
                            </p>

                            {helpful === "yes" && (
                                <>
                                    <textarea
                                        className="w-full border border-gray-300 rounded-sm min-h-[120px] text-sm p-2 focus:outline-none focus:ring-1 focus:ring-sky-700"
                                        value={comments}
                                        onChange={(e) =>
                                            setComments(
                                                e.target.value.slice(
                                                    0,
                                                    maxChars
                                                )
                                            )
                                        }
                                        maxLength={maxChars}
                                    />
                                    <div className="text-right text-xs text-gray-500 mt-1">
                                        {comments.length} / {maxChars}
                                    </div>
                                </>
                            )}

                            {helpful === "no" && (
                                <>
                                    <div className="mt-1">
                                        <select
                                            className="w-full border border-gray-300 rounded-sm text-sm p-2 focus:outline-none focus:ring-1 focus:ring-sky-700"
                                            value={reason}
                                            onChange={(e) => {
                                                setReason(e.target.value);
                                                setComments("");
                                            }}
                                        >
                                            <option value="">
                                                {fb.selectPlaceholder}
                                            </option>
                                            {fb.reasons.map((r) => (
                                                <option
                                                    key={r.value}
                                                    value={r.value}
                                                >
                                                    {r.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {isOtherReason && (
                                        <>
                                            <p className="mt-4 mb-1 text-sm font-semibold text-gray-800">
                                                {fb.improveLabel}
                                            </p>
                                            <textarea
                                                className="w-full border border-gray-300 rounded-sm min-h-[120px] text-sm p-2 focus:outline-none focus:ring-1 focus:ring-sky-700"
                                                value={comments}
                                                onChange={(e) =>
                                                    setComments(
                                                        e.target.value.slice(
                                                            0,
                                                            maxChars
                                                        )
                                                    )
                                                }
                                                maxLength={maxChars}
                                            />
                                            <div className="text-right text-xs text-gray-500 mt-1">
                                                {comments.length} / {maxChars}
                                            </div>
                                        </>
                                    )}
                                </>
                            )}

                            <p className="mt-3 text-xs text-gray-600">
                                {fb.privacyText}{" "}
                                <Link
                                    href={fb.privacyUrl}
                                    className="text-sky-700 hover:underline"
                                >
                                    {fb.privacyLinkText}
                                </Link>
                                .
                            </p>
                        </div>
                    )}

                    {/* Botón: solo habilitado si hay texto (yes) o razón / other+texto (no) */}
                    <button
                        type="submit"
                        disabled={!canSubmit}
                        className={`mt-4 inline-flex items-center justify-center border px-6 py-1.5 text-sm ${canSubmit
                                ? "border-sky-700 bg-white text-sky-700 hover:bg-sky-50"
                                : "border-gray-400 bg-gray-100 text-gray-400 cursor-not-allowed opacity-60"
                            }`}
                    >
                        {fb.submit}
                    </button>
                </form>
            </div>
        </section>
    );
}
