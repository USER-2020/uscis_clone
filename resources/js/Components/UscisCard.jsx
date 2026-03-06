import React from "react";

export default function UscisCard({ title, image, children }) {
    return (
        <section className="bg-white border border-gray-300 shadow-sm">
            <div className="px-6 pt-5 pb-4 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900">
                    {title}
                </h2>
            </div>

            {image && (
                <div className="border-b border-gray-200">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-56 object-cover"
                    />
                </div>
            )}

            <div className="px-6 py-4 text-sm text-gray-800 leading-relaxed">
                {children}
            </div>
        </section>
    );
}
