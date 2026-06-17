import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico"],
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
            src: "/screenshots/Screenshot 2026-06-17 014936.png",
            sizes: "390x844",
            type: "image/png",
            form_factor: "narrow",
            label: "Wallet Home Screen",
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
