// resources/js/Components/HomeInfoSections.jsx
import React from "react";
import { Link } from "@inertiajs/react";
import HomeImageBlock from "@/Components/HomeImageBlock";

export default function HomeInfoSections({ t }) {
    return (
        <section className="max-w-6xl mx-auto mt-10 grid gap-6 lg:grid-cols-2">
            {/* BANNER: Know Before You Go (ocupa todo el ancho) */}
            <div className="bg-white border shadow-sm grid md:grid-cols-2 lg:col-span-2">
                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-3">
                        {t.beforeVisit.title}
                    </h2>
                    <p className="text-gray-700 mb-4">
                        {t.beforeVisit.body}
                    </p>
                    <ul className="list-disc list-inside text-sky-700 space-y-1 text-sm">
                        <li>
                            <Link href="#" className="hover:underline">
                                {t.beforeVisit.linkOffices}
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">
                                {t.beforeVisit.linkFindOffice}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Imagen tipo banner */}
                <HomeImageBlock
                    src="/img/USCIS.Gov_KnowBeforeYouGo_Blank.jpg"
                    alt="Person checking phone and keys on a table"
                />
            </div>

            {/* CARD 1: File Online */}
            <div className="bg-white border shadow-sm grid md:grid-cols-1">
                <div className="p-6 border-b md:border-b-0">
                    <h2 className="text-2xl font-semibold mb-3">
                        {t.fileOnline.title}
                    </h2>
                </div>

                <HomeImageBlock
                    src="/img/USCIS_Homepage_File-Online.jpg"
                    alt="Hands typing on a laptop"
                />

                <div className="p-6">
                    <p className="text-gray-700 mb-3">
                        {t.fileOnline.body1}
                    </p>
                    <p className="text-gray-700">
                        {t.fileOnline.body2}{" "}
                        <Link href="#" className="text-sky-700 hover:underline">
                            {t.fileOnline.accountLink}
                        </Link>
                        .
                    </p>
                </div>
            </div>

            {/* CARD 2: Manage Your Case */}
            <div className="bg-white border shadow-sm grid md:grid-cols-1">
                <div className="p-6 border-b md:border-b-0">
                    <h2 className="text-2xl font-semibold mb-3">
                        {t.manageCase.title}
                    </h2>
                </div>

                <HomeImageBlock
                    src="/img/USCIS_Homepage_Manage-Your-Case.jpg"
                    alt="Woman checking her case on a phone"
                />

                <div className="p-6">
                    <p className="text-gray-700 mb-3">
                        {t.manageCase.intro}
                    </p>
                    <ul className="list-disc list-inside text-sky-700 space-y-1 text-sm">
                        <li>
                            <Link href="/case-status" className="hover:underline">
                                {t.manageCase.item1}
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">
                                {t.manageCase.item2}
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">
                                {t.manageCase.item3}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
