import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
        svgProps: { fill: "currentColor" },
        svgoConfig: {
          plugins: [
            { name: "preset-default", params: { overrides: { removeViewBox: false } } },
          ],
        },
      },
    }),
    react(),
    tailwindcss(),
  ],
  build: {
    target: "esnext",
    outDir: "dist",
  },
});
