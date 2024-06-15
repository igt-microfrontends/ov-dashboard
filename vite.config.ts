import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "dashboard-app",
            filename: "remoteEntry.js",
            exposes: {
                "./DashboardApp": "./src/App.tsx",
            },
            remotes: {
                remoteHostApp: "http://localhost:4175/assets/remoteEntry.js",
            },
            shared: ["react"],
        }),
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
    },
});
