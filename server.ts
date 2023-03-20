import { serve } from "./deps.ts";

function handler(_req: Request): Response {
  return new Response("Hello, World!");
}
console.log("Listening on http://localhost:8000");
serve(handler);
