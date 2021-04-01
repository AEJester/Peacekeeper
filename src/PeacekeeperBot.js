"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeacekeeperBot = void 0;
const Discord = require("discord.js");
const CommandManager_1 = require("./commands/CommandManager");
const HelpCommand_1 = require("./commands/HelpCommand");
const PingCommand_1 = require("./commands/PingCommand");
class PeacekeeperBot {
    constructor(name, token, prefix) {
        this._name = name;
        this._token = token;
        this._prefix = prefix;
        this._commandManager = new CommandManager_1.CommandManager();
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get token() {
        return this._token;
    }
    set token(token) {
        this._token = token;
    }
    get prefix() {
        return this._prefix;
    }
    set prefix(prefix) {
        this._prefix = prefix;
    }
    get commandManager() {
        return this._commandManager;
    }
    set commandManager(commandManager) {
        this._commandManager = commandManager;
    }
    start() {
        const client = new Discord.Client();
        client.on("ready", () => {
            console.log(client.user.username + "#" + client.user.discriminator + " is running...");
            this._commandManager.registerCommand(new PingCommand_1.PingCommand());
            this._commandManager.registerCommand(new HelpCommand_1.HelpCommand());
        });
        client.on("message", (message) => {
            if (message.author.bot)
                return;
            if (!message.content.startsWith(this.prefix))
                return;
            let command = message.content.split(" ")[0].replace(this.prefix, "");
            this._commandManager.commands.forEach(cmd => {
                if (cmd.command == command) {
                    cmd.execute(client, message, this._commandManager);
                }
            });
        });
        client.login(this.token);
    }
}
exports.PeacekeeperBot = PeacekeeperBot;
//# sourceMappingURL=PeacekeeperBot.js.map