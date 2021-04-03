import { User } from "./User";

export class ModerationDocument {

    private _id: number;
    private _reason: string;s
    private _dateIssued: number;
    private _user: User;
    private _issuer: User;

    constructor(id: number, reason: string, dateIssued: number, user: User, issuer: User) {
        this._id = id;
        this._reason = reason;
        this._dateIssued = dateIssued;
        this._user = user;
        this._issuer = issuer;
    }

    public get id(): number {
        return this._id;
    }
    
    public set id(id: number) {
        this._id = id;
    }

    public get reason(): string {
        return this._reason;
    }

    public set reason(reason: string) {
        this._reason = reason;
    }

    public get dateIssued(): number {
        return this._dateIssued;
    }

    public set dateIssued(dateIssued: number) {
        this._dateIssued = dateIssued;
    }

    public get user(): User {
        return this._user;
    }

    public set user(user: User) {
        this._user = user;
    }

    public get issuer(): User {
        return this._issuer;
    }

    public set issuer(issuer: User) {
        this._issuer = issuer;
    }

    public toObject(): object {
        return {
            id: this.id,
            reason: this.reason,
            dateIssued: this.dateIssued,
            user: this.user.toObject(),
            issuer: this.issuer.toObject()
        };
    }

}