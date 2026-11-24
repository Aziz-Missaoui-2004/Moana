import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";

// VMware shared folders can miss native file change notifications.
const onVmwareShare = fileURLToPath(import.meta.url).startsWith("/mnt/hgfs/");

export default defineConfig({
  base: process.env.MOANA_SITE_BASE || "/",
  devToolbar: { enabled: false },
  vite: {
    server: {
      watch: onVmwareShare ? { usePolling: true, interval: 400 } : undefined,
    },
  },
});
