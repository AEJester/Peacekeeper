import * as fs from 'fs';

/*

warn has properties:

id: number
user: {
    id: number
    name: string
    discriminator: string
}
reason: string
issuer: {
    id: number
    name: string
    discriminator: string
}
dateIssued: date

*/

export class Warns {

    public static writeWarn(serverID: string, warn: object): boolean {
        let didSucceed: boolean = false;
        let warns = JSON.parse(fs.readFileSync("../database/"+serverID+"/warns.json", "utf8"));
        warns.warns.push({id: this.getLatestWarnID(serverID), ...warn});
        fs.writeFileSync("./database/"+serverID+"/warns.json", JSON.stringify(warns));
        didSucceed = true;
        return didSucceed;
    } 

    public static readWarns(serverID: string): object[] {
        let warns = JSON.parse(fs.readFileSync("../database/"+serverID+"/warns.json", "utf8"));
        return warns.warns;
    }

    public static readWarnWithID(serverID: string, warnID: number): object {
        let warns = JSON.parse(fs.readFileSync("../database/"+serverID+"/warns.json", "utf8")); 
        let foundWarn = {};
        warns.warns.forEach(warn => {
            if (warn["id"] == warnID) {
                foundWarn = warn;
            }
        });
        return foundWarn;
    }

    public static getLatestWarnID(serverID: string): number {
        let warns = JSON.parse(fs.readFileSync("../database/"+serverID+"/warns.json", "utf8"));
        let id = warns.usableID;
        warns.usableID++;
        fs.writeFileSync("./database/"+serverID+"/warns.json", JSON.stringify(warns));
        return id;
    }

}