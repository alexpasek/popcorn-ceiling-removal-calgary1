// functions/[[path]].js
import worker from "../.open-next/worker.js";

// Service-Worker style handler that Wrangler recognizes
export async function onRequest(context) {
    // context = { request, env, params, next, data, waitUntil }
    return worker.fetch(context.request, context.env, context);
}