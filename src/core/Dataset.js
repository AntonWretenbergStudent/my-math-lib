import { ensureNonEmpty, ensureArrayOfNumbers } from "./Validator.js";
import { sortedNumeric, sumArray, maxArray, minArray } from "./ArrayOps.js";

export class Dataset {
  #data; // private field

  constructor(numbers = []) {
    ensureNonEmpty(numbers);
    ensureArrayOfNumbers(numbers);
    this.#data = [...numbers]; // defensiv kopia
  }

  median() {
    const sorted = sortedNumeric(this.#data);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2
      ? sorted[mid]
      : (sorted[mid - 1] + sorted[mid]) / 2;
  }

  sum() {
    return sumArray(this.#data);
  }

  max() {
    return maxArray(this.#data);
  }

  min() {
    return minArray(this.#data);
  }
}
