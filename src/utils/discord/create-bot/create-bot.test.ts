import { assertEquals, assertThrows, stub } from "../../../dev_depts.ts";

import { createDiscordBot } from "./create-bot.ts";

Deno.test("should throw error", () => {
  const envStub = stub(Deno.env, "get", () => undefined);
  assertThrows(
    () => createDiscordBot(),
    Error,
    "Please set the DISCORD_TOKEN environment variable",
  );
  envStub.restore();
});

Deno.test("should create a bot", () => {
  const envStub = stub(Deno.env, "get", () => `${btoa("9999")}.X.X`);
  const bot = createDiscordBot();
  assertEquals(bot.id, BigInt(9999));
  envStub.restore();
});
