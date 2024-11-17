/** @type {import('tailwindcss').Config} */

export default {
    content: [],
    theme: {
        extend: {
            colors: {
                'background': '#0E1118',
                'primary': {
                    '50': '#eef8ff',
                    '100': '#d9efff',
                    '200': '#bce3ff',
                    '300': '#8ed3ff',
                    '400': '#59b9ff',
                    '500': '#3b9eff',
                    '600': '#1b7af5',
                    '700': '#1464e1',
                    '800': '#1750b6',
                    '900': '#19468f',
                    '950': '#142b57',
                },
            },
            fontFamily: {
                'sg': ['Space Grotesk', 'sans-serif'],
                'sans': ['DM Sans', 'sans-serif'],
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}