// functions/[[path]].js
import worker from "../.open-next/worker.js";

export const config = {
    compatibility_date: "2024-11-08",
    compatibility_flags: ["nodejs_compat"],
};

export async function onRequest(ctx) {
    // Route every request to the OpenNext worker
    return worker.fetch(ctx.request, ctx.env, ctx);
}