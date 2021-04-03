import { PeacekeeperCommand } from "./PeacekeeperCommand";
import { PingCommand } from "./PingCommand";

export class CommandManager {

    private _commands: PeacekeeperCommand[];

    constructor() {
        this._commands = [];
    }

    public get commands() {
        return this._commands;
    }

    public set commands(commands: PeacekeeperCommand[]) {
        this._commands = commands;
    }

    public registerCommand(command: PeacekeeperCommand) {
        this._commands.push(command);
    }

}