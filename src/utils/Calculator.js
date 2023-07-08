export default class Calculator {
    constructor() {
        this._result = 0;
    }

    get result() {
        return this._result;
    }

    set result(value) {
        this._result = value;
    }

    reverse() {
        this._result = -this._result;
    }

    percentage() {
        this._result = this._result / 100;
    }

    add(value) {
        this._result += value;
    }

    subtract(value) {
        this._result -= value;
    }

    multiply(value) {
        this._result *= value;
    }

    divide(value) {
        this._result /= value;
    }

    clear() {
        this._result = 0;
    }
}