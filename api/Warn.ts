import { ModerationDocument } from "./ModerationDocument";
import { User } from "./User";

export class Warn extends ModerationDocument {

    constructor(id: number, reason: string, dateIssued: number, user: User, issuer: User) {
        super(id, reason, dateIssued, user, issuer);
    }

}