import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import vercel from "./vercel.json";

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const apiBaseUrl = env.VITE_API_BASE_URL ?? "/backend";
  const localPreview = command === "serve" && apiBaseUrl === "/backend";
  const vercelHosted = ["preview", "production"].includes(process.env.VERCEL_ENV ?? "");
  const hostedViewer = (vercelHosted || localPreview) && apiBaseUrl === "/backend";
  const browserTraining = hostedViewer && env.VITE_XOCOMPASS_BROWSER_TRAINING !== "0";
  return {
    plugins: [react()],
    define: {
      "import.meta.env.VITE_API_BASE_URL": JSON.stringify(apiBaseUrl),
      "import.meta.env.XOCOMPASS_HOSTED_PREVIEW": JSON.stringify(hostedViewer),
      "import.meta.env.VITE_XOCOMPASS_BROWSER_TRAINING": JSON.stringify(browserTraining ? "1" : "0"),
    },
    server: {
      port: 5173,
      proxy: localPreview ? {
        "/backend": {
          target: new URL(vercel.rewrites[0].destination).origin,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/backend(?=\/|$)/, ""),
        },
      } : undefined,
    },
  };
});
