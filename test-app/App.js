import { Dataset } from "../src/index.js";

const ds = new Dataset([1, 2, 3, 4, 5, 6]);
console.log("Sum:", ds.sum())
console.log("Sort:", ds.sort())
console.log("Median:", ds.median())
console.log("Max:", ds.max())
console.log("Min:", ds.min())



console.log("Percentile rank of 30:", ds.percentileRank(30));
console.log("Percentile rank of 25:", ds.percentileRank(25));
console.log("Percentile rank of 50:", ds.percentileRank(50));
console.log("Percentile rank of 5:", ds.percentileRank(5));

console.log("The unique array is:", ds.unique())

console.log("All of the numbers in the array is in the range:", ds.ensureRange(0, 60))

console.log("The range between the highest and lowest number is:", ds.range())

console.log("Original:", ds.sort());
console.log("Shuffled:", ds.shuffle());