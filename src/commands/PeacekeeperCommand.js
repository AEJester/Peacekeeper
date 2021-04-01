"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeacekeeperCommand = void 0;
const discord_js_1 = require("discord.js");
class PeacekeeperCommand {
    constructor(name, description, command, usage, category) {
        this._name = name;
        this._description = description;
        this._command = command;
        this._usage = usage;
        this._category = category;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    get command() {
        return this._command;
    }
    set command(command) {
        this._command = command;
    }
    get category() {
        return this._category;
    }
    set category(category) {
        this._category = category;
    }
    get usage() {
        return this._usage;
    }
    set usage(usage) {
        this._usage = usage;
    }
    execute(client, message, commandManager) {
        let succeeded = false;
        console.log("attempted to execute blank command. name:" + this.name + ";" + this.description + ";" + this.command + ";" + this.category + ";");
        return succeeded;
    }
    generate(message, content, color) {
        let embed = new discord_js_1.MessageEmbed();
        embed.setColor(color);
        embed.setTitle(this.name);
        embed.setDescription(content);
        embed.setAuthor(`Requested by ${message.author.username}#${message.author.discriminator}.`);
        embed.setTimestamp(Date.now());
        return embed;
    }
    parseArgs(message) {
        let args = message.content.split(" ");
        args.shift();
        return args;
    }
}
exports.PeacekeeperCommand = PeacekeeperCommand;
//# sourceMappingURL=PeacekeeperCommand.js.map