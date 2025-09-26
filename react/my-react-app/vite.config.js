// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // 1. tailwindcss 플러그인 불러오기

export default defineConfig({
  plugins: [react(), tailwindcss()], // 2. 플러그인 목록에 추가
});
