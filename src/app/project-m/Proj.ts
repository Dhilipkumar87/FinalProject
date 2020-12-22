export class Proj {


    constructor(public _title: string,public startdate: string,public Enddate: string, public Epices: object[], public id?: number) {
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        // encapsulation checks
        this._title = title;
    }
}