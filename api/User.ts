export class User {
    private _userID: string;
    private _username: string;
    private _discriminator: string;

    constructor(userID: string, username: string, discriminator: string) {
        this._userID = userID;
        this._username = username;
        this._discriminator = discriminator;
    }

    public get userID(): string {
        return this._userID;
    }

    public set userID(userID: string) {
        this._userID = userID;
    }

    public get username(): string {
        return this._username
    }

    public set username(username: string) {
        this._username = username;
    }

    public get disciminator(): string {
        return this._discriminator;
    }

    public set discriminator(disciminator: string) {
        this._discriminator = disciminator;
    }

    public toObject(): object {
        return {
            userID: this.userID,
            username: this.username,
            discriminator: this.disciminator
        }
    }

}