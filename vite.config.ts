import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "192x192.svg", "512x512.svg"],
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

        // ✅ SCREENSHOTS - Use your existing SVG files in the screenshots folder
        screenshots: [
          // Mobile (narrow) - REQUIRED
          {
            src: "/screenshots/390x844.svg",
            sizes: "390x844",
            type: "image/svg+xml", // ✅ Correct MIME type
            form_factor: "narrow",
            label: "Wallet Home Screen",
          },
          // Desktop (wide) - REQUIRED for desktop install
          {
            src: "/screenshots/1280x720.svg",
            sizes: "1280x720",
            type: "image/svg+xml", // ✅ Correct MIME type
            form_factor: "wide",
            label: "Wallet Home Screen (Desktop)",
          },
        ],

        // ✅ ICONS - Use your actual SVG files
        icons: [
          {
            src: "192x192.svg", // ✅ Matches your file
            sizes: "192x192",
            type: "image/svg+xml", // ✅ Correct MIME type
            purpose: "any maskable",
          },
          {
            src: "512x512.svg", // ✅ Matches your file
            sizes: "512x512",
            type: "image/svg+xml", // ✅ Correct MIME type
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
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
        ],
      },
    }),
  ],
});
