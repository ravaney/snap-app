import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "144x144.svg"],
      manifest: {
        name: "Wallet - Send Money Instantly",
        short_name: "Wallet",
        description: "Send and receive money instantly with your wallet app",
        theme_color: "#0f172a",
        background_color: "#f8fafc",
        display: "standalone",
        start_url: "/",
        orientation: "portrait",
        categories: ["finance", "payments", "wallet"],
        screenshots: [
          {
            src: "/screenshots/390x844.svg",
            sizes: "390x844",
            type: "image/svg",
            form_factor: "narrow",
            label: "Wallet Home Screen",
          },
        ],
        icons: [
          {
            src: "/144x144.svg",
            sizes: "192x192",
            type: "image/svg",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
            },
          },
        ],
      },
    }),
  ],
});
