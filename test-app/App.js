import { Dataset } from "../src/index.js";

const ds = new Dataset([44, 44, 3, 22, 54, 12, 10, 20, 30, 40, 50]);
console.log("Sum:", ds.sum())
console.log("Sort:", ds.sort())
console.log("Median:", ds.median())
console.log("Max:", ds.max())
console.log("Min:", ds.min())



console.log("Percentile rank of 30:", ds.percentileRank(30)); // 0.6
console.log("Percentile rank of 25:", ds.percentileRank(25)); // 0.4
console.log("Percentile rank of 50:", ds.percentileRank(50)); // 1
console.log("Percentile rank of 5:", ds.percentileRank(5));   // 0

console.log("The unique array is:", ds.unique())

console.log("All of the numbers in the array is in the range:", ds.ensureRange(0, 60))
