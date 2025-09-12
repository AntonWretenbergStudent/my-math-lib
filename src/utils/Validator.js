export function ensureNonEmpty(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  if (arr.length === 0) throw new Error("Array must not be empty");
}

export function ensureArrayOfNumbers(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array")

 for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || Number.isNaN(arr[i])) {
      throw new Error(`Invalid element at index ${i}: ${arr[i]} (must be a number)`);
    }
  }
}

export function ensureInRange(arr, min, max) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min || arr[i] > max) {
      throw new Error(
        `Value ${arr[i]} at index ${i} is out of range [${min}, ${max}]`
      )
    }
  } 
}
