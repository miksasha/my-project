import {makeAutoObservable} from "mobx";

class LineState {
    line = null;
    constructor() {
        makeAutoObservable(this);
    }

    setLine (line) {
        this.line = line;
    }
}

export default new LineState()