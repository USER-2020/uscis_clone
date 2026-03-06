// resources/js/Components/HomeImageBlock.jsx
import React from "react";

export default function HomeImageBlock({ src, alt = "" }) {
    return (
        <div className="w-full h-full min-h-[220px] p-6 ">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
}
