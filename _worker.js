// _worker.js  (at repo root)
import worker from "./.open-next/worker.js";

export const config = {
    compatibility_date: "2024-09-01",
    compatibility_flags: ["nodejs_compat"],
};

export default {
    async fetch(request, env, ctx) {
        return worker.fetch(request, env, ctx);
    },
};