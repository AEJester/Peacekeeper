"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingCommand = void 0;
const Category_1 = require("../../extra/Category");
const Colors_1 = require("../../extra/Colors");
const PeacekeeperCommand_1 = require("./PeacekeeperCommand");
class PingCommand extends PeacekeeperCommand_1.PeacekeeperCommand {
    constructor(name = "Ping", description = "A command for measuring the response time it takes for the bot to process your message and respond.", command = "ping", usage = "p!ping", category = Category_1.Category.FUN) {
        super(name, description, command, usage, category);
    }
    execute(client, message, commandManager) {
        let succeeded = false;
        if (Date.now() - message.createdTimestamp > 0) {
            let embed = super.generate(message, `Pong. Response took ${Date.now() - message.createdTimestamp}ms.`, Colors_1.Colors.BLUE);
            message.channel.send({ embed });
            succeeded = true;
        }
        return succeeded;
    }
}
exports.PingCommand = PingCommand;
//# sourceMappingURL=PingCommand.js.map