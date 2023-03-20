import { createBot, getLogger, Intents } from "../../../deps.ts";

export function createDiscordBot() {
  const token = Deno.env.get("DISCORD_TOKEN");
  if (token === undefined) {
    throw new Error("Please set the DISCORD_TOKEN environment variable");
  }
  return createBot({
    token,
    intents: Intents.Guilds | Intents.GuildMessages,
    events: {
      ready() {
        getLogger("Successfully connected to gateway");
      },
    },
  });
}
