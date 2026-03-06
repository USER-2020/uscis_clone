// resources/js/Layouts/PublicLayout.jsx
import React from "react";
import PublicNavbar from "./Partials/PublicNavbar";
import PublicGlobalFooter from "@/Components/PublicGlobalFooter";


export default function PublicLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
            {/* Navbar público completo */}
            <PublicNavbar />

            {/* Contenido */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer sencillo */}
            <PublicGlobalFooter />
        </div>
    );
}
