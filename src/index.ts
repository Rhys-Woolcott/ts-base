import dotenv from "dotenv";
import path from "path";
import { Bot, Container } from "ndbf";
import { sftpCommand } from "./commands";

dotenv.config({
	path: path.resolve(__dirname, "../.env"),
});

(async () => {
	const developers: string[] = process.env.DEVELOPERS?.split(",") || [""];
	const bot = new Bot(process.env.TOKEN!, {
		commands: [sftpCommand],
		developers,
		prefix: "faq ",
	});

	bot.client.once("ready", () => console.log("Bot Started!"));

	await bot.start();
})();
