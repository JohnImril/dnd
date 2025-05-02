import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/dnd/",
	plugins: [react()],
	assetsInclude: ["**/*.glb", "**/*.dds"],
});
