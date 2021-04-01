import * as Discord from 'discord.js';
import { MessageEmbed } from "discord.js";
import {Category} from '../../extra/Category';
import { Colors } from '../../extra/Colors';
import { CommandManager } from './CommandManager';

export class PeacekeeperCommand {

    private _name: string;
    private _description: string;
    private _command: string;
    private _usage: string;
    private _category: Category;

    constructor(name: string, description: string, command: string, usage: string, category: Category) {
        this._name = name;
        this._description = description;
        this._command = command;
        this._usage = usage;
        this._category = category;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get description(): string {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public get command(): string {
        return this._command;
    }

    public set command(command: string) {
        this._command = command;
    }

    public get category(): Category {
        return this._category;
    }

    public set category(category: Category) {
        this._category = category;
    }

    public get usage() {
        return this._usage;
    }

    public set usage(usage: string) {
        this._usage = usage;
    }

    public execute(client: Discord.Client, message: Discord.Message, commandManager: CommandManager): boolean {
        let succeeded: boolean = false;

        console.log("attempted to execute blank command. name:"+this.name+";"+this.description+";"+this.command+";"+this.category+";");

        return succeeded;
    } 

    public generate(message: Discord.Message, content: string, color: Colors): MessageEmbed {
        let embed: MessageEmbed = new MessageEmbed();

        embed.setColor(color);
        embed.setTitle(this.name);
        embed.setDescription(content);
        embed.setAuthor(`Requested by ${message.author.username}#${message.author.discriminator}.`);
        embed.setTimestamp(Date.now());

        return embed;
    }

    public parseArgs(message: Discord.Message): string[] {
        let args = message.content.split(" ");
        args.shift();
        return args;
    }

}