import worker from '../.open-next/worker.js';
export const onRequest = (ctx) => worker.fetch(ctx.request, ctx.env, ctx);