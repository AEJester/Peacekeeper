"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandManager = void 0;
class CommandManager {
    constructor() {
        this._commands = [null];
    }
    get commands() {
        return this._commands;
    }
    set commands(commands) {
        this._commands = commands;
    }
    registerCommand(command) {
        if (this._commands[0] == null) {
            this._commands[0] = command;
        }
        else {
            this._commands.push(command);
        }
    }
}
exports.CommandManager = CommandManager;
//# sourceMappingURL=CommandManager.js.map