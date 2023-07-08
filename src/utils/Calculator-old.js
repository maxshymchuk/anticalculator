export default class Calculator {
    constructor() {
        this._int = 0;
        this._frac = undefined;
    }

    _split(value) {
        const newInt = Math.trunc(value);
        return {
            int: newInt,
            frac: value - newInt,
        }
    }

    get int() {
        return this._int;
    }

    get frac() {
        return this._frac;
    }

    get result() {
        if (this._frac === undefined) return this._int;
        return this._int + this._frac;
    }

    set result(value) {
        const newResult = this._split(value);
        this._int = newResult.int;
        this._frac = newResult.frac;
    }

    // concat(symbol) {
    //     if (symbol === ',') symbol = '.';
    //
    //     // const availableSymbols = '1234567890.';
    //     // if (!availableSymbols.includes(symbol)) return;
    //
    //     if (symbol === '.') {
    //         if (this._frac !== undefined) return;
    //         this._frac = 0;
    //     }
    //
    //     if (this._frac === undefined) {
    //         this._int = +`${this._int}${symbol}`;
    //         return;
    //     }
    //
    //     if (this._frac === 0 && symbol !== '.') {
    //         this._frac = +symbol / 10;
    //     } else {
    //         this._frac = +`${this._frac}${symbol}`;
    //     }
    //
    //     console.log('Int', this._int);
    //     console.log('Frac', this._frac);
    // }

    reverse() {
        this._int = -this._int;
        this._frac = this._frac !== undefined ? -this._frac : undefined;
    }

    percentage() {
        const newResult = this._split(this._int / 100);
        this._int = newResult.int;
        this._frac = newResult.frac + (this._frac ?? 0) / 100;
    }

    add(value) {
        const newResult = this._split(value);
        this._int += newResult.int;
        this._frac = (this._frac ?? 0) + newResult.frac;
    }

    subtract(value) {
        const newResult = this._split(value);
        this._int -= newResult.int;
        this._frac -= newResult.frac;
    }

    multiply(value) {
        const newResult = this._split(value);
        console.log(newResult)
        this._int *= newResult.int;
        this._frac *= newResult.frac;
    }

    divide(value) {
        const newResult = this._split(value);
        this._int /= newResult.int;
        this._frac /= newResult.frac;
    }

    clear() {
        this._int = 0;
        this._frac = undefined;
    }
}