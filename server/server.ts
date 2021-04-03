import * as express from 'express';
import * as http from 'http';
import * as morgan from 'morgan';
import * as fs from "fs";

import { Warns } from "./api";
import { Actions } from "../extra/Actions";

const app: express.Express = express();
const server = new http.Server(app);
const PORT = process.env.PORT || 8000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
    let response = {
        text: "homepage requested. no response"
    }
    res.send(JSON.stringify(response));
});

app.get("/:serverID/:route/:action", (req, res) => {
    let serverID = req.params.serverID;
    let route = req.params.route;
    let action = req.params.action;

    let response = {};
    let dbPath = "./database/"+serverID+"/"+route+".json";
    if (fs.existsSync(dbPath)) {

        if (route == "warns") {
            let out = {};
            switch(action) {
                case Actions.ADD:
                    let ran: boolean = Warns.writeWarn(serverID, req.query);
                    res.send({"succeeded": ran});
                    break;
                case Actions.READ:
                    out = {warns: Warns.readWarns(serverID)};
                    res.send(out);
                    break;
                case Actions.READ_ONE:
                    out = {warn: Warns.readWarnWithID(serverID, parseInt(req.query.id as string))};
                    res.send(out);
                    break;
                default:
                    res.send({"body": "unknown aciton", "code": 500});
                    break;
            }
        }

    } else {
        response["body"] = "Error when looking for the specified server/database. Check spelling. Contact the bot owner if this error persists.";
        response["code"] = 404;
    }
});

server.listen(PORT, () => {
    console.log("listening on *:"+PORT);
});