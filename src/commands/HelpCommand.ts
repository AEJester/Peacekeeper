import * as Discord from "discord.js";
import { Category } from "../../extra/Category";
import { Colors } from "../../extra/Colors";
import { CommandManager } from "./CommandManager";
import { PeacekeeperCommand } from "./PeacekeeperCommand";

export class HelpCommand extends PeacekeeperCommand {

    constructor(name: string = "Help", description: string = "Displays the list of commands and how to use them.", command: string = "help", usage: string = "p!help <command>", category: Category = Category.HELP) {

        super(name, description, command, usage, category);

    }

    public execute(client: Discord.Client, message: Discord.Message, commandManager: CommandManager): boolean {
        let succeeded: boolean = false;

        let embed: Discord.MessageEmbed = super.generate(message, `Displaying help for Peacekeeper`, Colors.BLUE);
        let args: string[] = super.parseArgs(message);

        let doesContainSpecicHelp: boolean = false;

        if (args[0] != undefined) doesContainSpecicHelp = true;

        commandManager.commands.forEach((command) => {
            
            if (doesContainSpecicHelp) {
                if (command.command == args[0].toLowerCase()) {
                    embed.addField(command.name, command.description, true);
                    embed.addField("Usage", command.usage, true);
                    embed.addField("Category", command.category, true);
                }
            } else {
                embed.addField(command.name, command.description, true);
                embed.addField("Usage", command.usage, true);
                embed.addField("Category", command.category, true);
            }
            
        });

        if (!doesContainSpecicHelp) {
            message.channel.send({ embed: super.generate(message, `Check your direct messages for help.`, Colors.BLUE) });
            message.author.send({ embed });
        } else {
            message.channel.send({ embed });
        }

        succeeded = true;

        return succeeded;
    }

}