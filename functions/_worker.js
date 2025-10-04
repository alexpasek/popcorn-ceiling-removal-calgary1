// functions/_worker.js
import worker from "../.open-next/worker.js";

export const config = {
    compatibility_date: "2025-09-01",
    compatibility_flags: ["nodejs_compat"],
};

// Hand off the whole request lifecycle to OpenNext's worker
export default worker;