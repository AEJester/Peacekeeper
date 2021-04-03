import { Server } from "./Server";

import * as fs from 'fs';

export class Database {

    private _name: string;

    private _servers: Server[];
    
    constructor(name: string) {
        this._name = name;

        this._servers = [];
    }

    public get name(): string {
        return this._name;
    }
    
    public set name(name: string) {
        this._name = name;
    }

    public addServer(id: string, name: string) {
        if (fs.existsSync("./database/"+id+".json")) {

            this._servers.push(new Server(id, name));
            fs.writeFileSync("./database/"+id+".json", JSON.stringify(this.getServerWithID(id).toObject()));

        }
    }

    public getServerWithID(id: string): Server {
        let server: Server;
        this._servers.forEach((_server) => {
            if (_server.id == id) {
                server = _server;
            }
        });
        return server;
    }

    public commit() {

        this._servers.forEach((server) => {

            let contents = JSON.parse(fs.readFileSync("./database/"+server.id+".json", "utf8"));

            if (contents != server.toObject()) {
                fs.writeFileSync("./database/"+server.id+".json", JSON.stringify(server.toObject));
            }

        })

    }

    public toObject(): object {
        let returnable = {
            name: this.name,
            servers: []
        };

        this._servers.forEach((server) => {
            returnable.servers.push(server.toObject());
        });

        return returnable;
    }

}