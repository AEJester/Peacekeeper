export class Setting {

    private _key: string;
    private _value: any;

    constructor(key: string, value: any) {
        this._key = key;
        this._value = value;
    }

    public get key(): string {
        return this._key;
    }

    public set key(key: string) {
        this._key = key;
    }

    public get value(): any {
        return this._value;
    }

    public set value(value: any) {
        this._value = value;
    }

    public toObject(): object {
        return {
            key: this.key,
            value: this.value
        }
    }
}