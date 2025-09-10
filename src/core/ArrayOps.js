export function sortedNumeric(arr) {
  const copy = [...arr];
  for (let i = 0; i < copy.length - 1; i++) {
    for (let j = 0; j < copy.length - i - 1; j++) {
      if (copy[j] > copy[j + 1]) {
        const t = copy[j]; copy[j] = copy[j + 1]; copy[j + 1] = t;
      }
    }
  }
  return copy;
}
