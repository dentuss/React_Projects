class export Club {

    private _clubName: String;
    private _clubDesc: String;

    constructor(inpName: String, inpDesc: String) {

        this._clubDesc = inpDesc;
        this._clubName = inpName;
    }

    get name() {

        return this._clubName;
    }
    get desc() {

        return this._clubDesc;
    }
}