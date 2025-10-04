// functions/[[path]].js
import worker from "../.open-next/worker.js";

// File-based Pages Function wrapper that forwards everything to OpenNext.
export async function onRequest(context) {
    return worker.fetch(context.request, context.env, context);
}