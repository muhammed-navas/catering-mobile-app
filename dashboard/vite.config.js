import react from '@vitejs/plugin-react'

// import { defineConfig } from "vite";
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // define: {
  //   "import.meta.env.VITE_URL": JSON.stringify(process.env.VITE_URL),
  // },
});

