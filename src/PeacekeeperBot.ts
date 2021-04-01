import * as Discord from 'discord.js';
import { CommandManager } from './commands/CommandManager';
import { HelpCommand } from './commands/HelpCommand';
import { PeacekeeperCommand } from "./commands/PeacekeeperCommand";
import { PingCommand } from "./commands/PingCommand";

export class PeacekeeperBot {

    private _name;
    private _token;
    private _prefix;
    private _commandManager;

    constructor(name: string, token: string, prefix: string) {
        this._name = name;
        this._token = token;
        this._prefix = prefix;
        this._commandManager = new CommandManager();
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get token(): string {
        return this._token;
    }
    
    public set token(token: string) {
        this._token = token;
    }

    public get prefix(): string {
        return this._prefix;
    }

    public set prefix(prefix: string) {
        this._prefix = prefix;
    }

    public get commandManager() {
        return this._commandManager;
    }

    public set commandManager(commandManager: CommandManager) {
        this._commandManager = commandManager;
    }

    public start(): void {

        const client: Discord.Client = new Discord.Client();

        client.on("ready", () => {
            console.log(client.user.username+"#"+client.user.discriminator+" is running...");
            this._commandManager.registerCommand(new PingCommand());
            this._commandManager.registerCommand(new HelpCommand());
        });

        client.on("message", (message: Discord.Message) => {

            if (message.author.bot) return;
            if (!message.content.startsWith(this.prefix)) return;

            let command = message.content.split(" ")[0].replace(this.prefix, "");

            this._commandManager.commands.forEach(cmd => {
                if (cmd.command == command) {
                    cmd.execute(client, message, this._commandManager);
                }
            })

        });

        client.login(this.token);

    }

}