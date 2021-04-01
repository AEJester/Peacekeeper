import { PeacekeeperCommand } from "./PeacekeeperCommand";
import { PingCommand } from "./PingCommand";

export class CommandManager {

    private _commands: [PeacekeeperCommand];

    constructor() {
        this._commands = [null];
    }

    public get commands() {
        return this._commands;
    }

    public set commands(commands: [PeacekeeperCommand]) {
        this._commands = commands;
    }

    public registerCommand(command: PeacekeeperCommand) {
        if (this._commands[0] == null) {
            this._commands[0] = command;
        } else {
            this._commands.push(command);
        }
    }

}