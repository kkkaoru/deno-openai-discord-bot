import "https://deno.land/std@0.180.0/dotenv/load.ts";

import { startBot } from "./deps.ts";
import { createDiscordBot } from "./utils/index.ts";

const bot = createDiscordBot();

// // Another way to do events
bot.events.messageCreate = function (b, message) {
  // Process the message here with your command handler.
};

await startBot(bot);
