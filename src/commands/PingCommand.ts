import * as Discord from "discord.js";
import { MessageEmbed } from "discord.js";
import { Category } from "../../extra/Category";
import { Colors } from "../../extra/Colors";
import { CommandManager } from "./CommandManager";
import { PeacekeeperCommand } from "./PeacekeeperCommand";

export class PingCommand extends PeacekeeperCommand {

    constructor(name: string = "Ping", description: string = "A command for measuring the response time it takes for the bot to process your message and respond.", command: string = "ping", usage: string = "p!ping", category: Category = Category.FUN) {

        super(name, description, command, usage, category);

    }

    public execute(client: Discord.Client, message: Discord.Message, commandManager: CommandManager): boolean {
        let succeeded: boolean = false;

        if (Date.now() - message.createdTimestamp > 0) {
            let embed: MessageEmbed = super.generate(message, `Pong. Response took ${Date.now() - message.createdTimestamp}ms.`, Colors.BLUE);

            message.channel.send({embed});
            
            succeeded = true;
        }

        return succeeded;
    } 

}