import {
  ensureNonEmpty,
  ensureArrayOfNumbers,
  ensureInRange,
} from "../utils/Validator.js";
import {
  medianArray,
  sumArray,
  maxArray,
  minArray,
  sortedNumeric,
  percentileRankArray,
  uniqueArray,
  rangeArray,
  shuffleArray,
} from "../utils/ArrayOps.js";

export class Dataset {
  #data; // private field

  constructor(numbers = []) {
    ensureNonEmpty(numbers);
    ensureArrayOfNumbers(numbers);
    this.#data = [...numbers]; // defensiv kopia
  }

  median() {
    return medianArray(this.#data);
  }

  sort() {
    return sortedNumeric(this.#data);
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

  mean() {
    return this.sum() / this.#data.length;
  }

  percentileRank(value) {
    return percentileRankArray(this.#data, value);
  }

  unique() {
    return uniqueArray(this.#data);
  }

  ensureRange(min, max) {
    ensureInRange(this.#data, min, max);
    return true;
  }

  range() {
    return rangeArray(this.#data);
  }

  shuffle() {
    return shuffleArray(this.#data)
  }
}
