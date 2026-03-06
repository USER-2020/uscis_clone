// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                // Fuente global del proyecto
                sans: [
                    'Source Sans Pro Web',
                    'Helvetica Neue',
                    'Helvetica',
                    'Roboto',
                    'Arial',
                    'sans-serif',
                ],
            },
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
    ],
};
