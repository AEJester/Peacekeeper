import { PeacekeeperBot } from "./src/PeacekeeperBot";
import * as fs from 'fs';
import * as os from 'os';

const readEnv = (path: string): object => {
    let vals = {};

    let contents = fs.readFileSync("./.env", "utf8").split(os.EOL);

    contents.forEach((line) => {
        vals[line.split("=")[0]] = line.split("=")[1];
    });

    return vals;
}

let cfg = readEnv("./.env");

const bot: PeacekeeperBot = new PeacekeeperBot("Peacekeeper", cfg["token"], cfg["prefix"]);

bot.start();