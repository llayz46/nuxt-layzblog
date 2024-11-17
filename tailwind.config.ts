import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { setupInspiraUI } from "@inspira-ui/plugins";

export default {
    darkMode: "selector",
    safelist: ["dark"],
    prefix: "",
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                'my-background': '#0E1118',
                'my-primary': {
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
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                xl: "calc(var(--radius) + 4px)",
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
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
        require("@tailwindcss/typography"),
        animate,
        setupInspiraUI
    ],
} satisfies Config;
