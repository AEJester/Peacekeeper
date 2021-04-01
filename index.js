"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PeacekeeperBot_1 = require("./src/PeacekeeperBot");
const fs = require("fs");
const os = require("os");
const readEnv = (path) => {
    let vals = {};
    let contents = fs.readFileSync("./.env", "utf8").split(os.EOL);
    contents.forEach((line) => {
        vals[line.split("=")[0]] = line.split("=")[1];
    });
    return vals;
};
let cfg = readEnv("./.env");
const bot = new PeacekeeperBot_1.PeacekeeperBot("Peacekeeper", cfg["token"], cfg["prefix"]);
bot.start();
//# sourceMappingURL=index.js.map