import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  server: {
    // 개발 서버 설정
    proxy: {
      // "/api"로 시작하는 모든 요청을
      "/api": {
        // http://localhost:5000 (백엔드 서버 주소)로 프록시
        target: "http://localhost:5000",
        // 호스트 헤더를 백엔드 서버의 URL로 변경
        changeOrigin: true,
        // (선택 사항) HTTPS를 사용하는 경우 true로 설정
        secure: false,
      },
    },
    // Vite Dev Server가 백엔드 서버와 충돌하지 않도록 다른 포트를 사용하는 것이 일반적입니다.
    // (예: 3000)
    port: 3000,
  },
});
