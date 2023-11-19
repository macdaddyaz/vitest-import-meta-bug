/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
    test: {
        include: [
            "src/**/*.{spec,test}.{js,ts}",
        ],
        includeSource: [
            "src/**/*.{js,ts}"
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
