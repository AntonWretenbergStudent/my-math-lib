import { ensureNonEmpty, ensureArrayOfNumbers } from "./Validator.js";
import { sortedNumeric } from "./ArrayOps.js";

export class Dataset {
  constructor(numbers = []) {
    ensureNonEmpty(numbers);
    ensureArrayOfNumbers(numbers);
    this._data = [...numbers]; // defensiv kopia
  }

  median() {
    ensureNonEmpty(this._data);
    const sorted = sortedNumeric(this._data);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  }
}
