/**
 * Sorts an array of numbers in ascending order using Bubble Sort.
 * Returns a new array without mutating the original.
 */
export function sortedNumeric(arr) {
  const copy = [...arr]; // defensive copy
  const n = copy.length;

  for (let pass = 0; pass < n - 1; pass++) {
    for (let j = 0; j < n - pass - 1; j++) {
      if (copy[j] > copy[j + 1]) {
        // Swap adjacent elements if they are out of order
        const temp = copy[j];
        copy[j] = copy[j + 1];
        copy[j + 1] = temp;
      }
    }
  }

  return copy;
}

/**
 * Calculates the median of an array of numbers.
 * Uses sortedNumeric to ensure correct ordering.
 */
export function medianArray(arr) {
  const sorted = sortedNumeric(arr);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 1) {
    // Odd length → middle element
    return sorted[mid];
  } else {
    // Even length → average of two middle elements
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
}

/**
 * Calculates the sum of an array of numbers.
 */
export function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

/**
 * Finds the maximum number in an array.
 */
export function maxArray(arr) {
  let highest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }
  return highest;
}

/**
 * Finds the minimum number in an array.
 */
export function minArray(arr) {
  let lowest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }
  return lowest;
}

/**
 * Calculates the percentile rank of a value within an array.
 * Returns a number between 0–100.
 */
export function percentileRankArray(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= value) {
      count++;
    }
  }
  const rank = (count / arr.length) * 100;
  return parseFloat(rank.toFixed(1));
}

/**
 * Returns a new array with only unique values from the input array.
 */
export function uniqueArray(arr) {
  return arr.reduce((acc, val) => {
    if (!acc.includes(val)) {
      acc.push(val);
    }
    return acc;
  }, []);
}

/**
 * Returns the range of an array (max - min).
 */
export function rangeArray(arr) {
  return maxArray(arr) - minArray(arr);
}

/**
 * Returns a new array with the elements shuffled randomly.
 * Uses Fisher–Yates shuffle algorithm.
 */
export function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]; // swap
  }
  return result;
}
