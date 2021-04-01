"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpCommand = void 0;
const Category_1 = require("../../extra/Category");
const Colors_1 = require("../../extra/Colors");
const PeacekeeperCommand_1 = require("./PeacekeeperCommand");
class HelpCommand extends PeacekeeperCommand_1.PeacekeeperCommand {
    constructor(name = "Help", description = "Displays the list of commands and how to use them.", command = "help", usage = "p!help <command>", category = Category_1.Category.HELP) {
        super(name, description, command, usage, category);
    }
    execute(client, message, commandManager) {
        let succeeded = false;
        let embed = super.generate(message, `Displaying help for Peacekeeper`, Colors_1.Colors.BLUE);
        commandManager.commands.forEach((command) => {
            embed.addField(command.name, command.description, true);
            embed.addField("Usage", command.usage, true);
            embed.addField("Category", command.category, true);
        });
        message.author.send({ embed });
        message.channel.send({ embed: super.generate(message, `Check your direct messages for help.`, Colors_1.Colors.BLUE) });
        succeeded = true;
        return succeeded;
    }
}
exports.HelpCommand = HelpCommand;
//# sourceMappingURL=HelpCommand.js.map