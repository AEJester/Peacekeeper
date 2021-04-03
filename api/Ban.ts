import { ModerationDocument } from "./ModerationDocument";
import { User } from "./User";

export class Ban extends ModerationDocument {

    private _isTemp: boolean;
    private _unbanDate: number;

    constructor(id: number, reason: string, dateIssued: number, user: User, issuer: User, isTemp: boolean, unbanDate: number) {
        super(id, reason, dateIssued, user, issuer);
        this._isTemp = isTemp;
        this._unbanDate = unbanDate;
    }

    public get isTemp(): boolean {
        return this._isTemp;
    }
    
    public set isTemp(isTemp: boolean) {
        this._isTemp = isTemp;
    }

    public get unbanDate(): number {
        return this._unbanDate;
    }
    
    public set unbanDate(unbanDate: number) {
        this._unbanDate = unbanDate;
    }

    public toObject(): object {
        return {
            ...super.toObject(),
            isTemp: this.isTemp,
            unbanDate: this.unbanDate
        }
    }

}