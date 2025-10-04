// open-next.config.ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

export default defineCloudflareConfig({
  // No incremental cache -> ISR disabled
});
