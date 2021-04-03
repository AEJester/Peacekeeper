import { User } from "./User";
import { Ban } from "./Ban";
import { Kick } from "./Kick";
import { Setting } from "./Setting";
import { Warn } from "./Warn";
import { Warns } from "../server/api";

export class Server {

    private _id: string;
    private _name: string; 

    private _warns: Warn[];
    private _kicks: Kick[];
    private _bans: Ban[];
    private _settings: Setting[];

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;

        this._warns = [];
        this._bans = [];
        this._kicks = [];
        this._settings = [];
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public addWarn(reason: string, user: User, issuer: User) {
        let warn;

        if (this._warns.length == 0) {
            warn = new Warn(0, reason, Date.now(), user, issuer);
        } else {
            warn = new Warn(this._warns[this._warns.length-1].id, reason, Date.now(), user, issuer);
        }

        this._warns.push(warn);
    }

    public addKick(reason: string, user: User, issuer: User) {
        let kick;

        if (this._kicks.length == 0) {
            kick = new Warn(0, reason, Date.now(), user, issuer);
        } else {
            kick = new Warn(this._kicks[this._kicks.length-1].id, reason, Date.now(), user, issuer);
        }

        this._kicks.push(kick);
    }

    public addBan(reason: string, user: User, issuer: User) {
        let ban;

        if (this._bans.length == 0) {
            ban = new Warn(0, reason, Date.now(), user, issuer);
        } else {
            ban = new Warn(this._bans[this._bans.length-1].id, reason, Date.now(), user, issuer);
        }

        this._kicks.push(ban);
    }

    public addSetting(key: string, value: any) {

        this._settings.push(new Setting(key, value));

    }

    public toObject(): object {
        let returnable = {
            id: this.id,
            name: this.name,
            warns: [],
            bans: [],
            kicks: [],
            settings: []
        }

        this._warns.forEach((warn) => {
            returnable.warns.push(warn.toObject());
        })
        this._bans.forEach((ban) => {
            returnable.warns.push(ban.toObject());
        })
        this._kicks.forEach((kick) => {
            returnable.warns.push(kick.toObject());
        })
        this._settings.forEach((setting) => {
            returnable.warns.push(setting.toObject());
        })

        return returnable;
    }

}