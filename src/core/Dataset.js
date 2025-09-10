import { ensureNonEmpty, ensureArrayOfNumbers } from "./Validator.js";
import { sortedNumeric } from "./ArrayOps.js";

export class Dataset {
  constructor(numbers = []) {
    ensureNonEmpty(numbers);
    ensureArrayOfNumbers(numbers);
    this._data = [...numbers];
  }

  median() {
    ensureNonEmpty(this._data);
    const sorted = sortedNumeric(this._data);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2
      ? sorted[mid]
      : (sorted[mid - 1] + sorted[mid]) / 2;
  }

  sum() {
    ensureNonEmpty(this._data);
    ensureArrayOfNumbers(this._data);

    let total = 0;
    for (let i = 0; i < this._data.length; i++) {
      total += this._data[i];
    }
    return total;
  }
}
