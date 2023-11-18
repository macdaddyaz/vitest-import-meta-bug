/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
    test: {
        include: [
            "src/**/*.{js,ts}",
        ],
        exclude: [
            "src/**/*.d.ts",
        ],
        passWithNoTests: true,
    },
    define: {
        'import.meta.vitest': 'undefined',
    },
});
