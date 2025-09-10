import { Dataset } from "../src/index.js";

const ds = new Dataset([5, 12, 3, 9]);
console.log("Sum:", ds.sum());       // 29
console.log("Median:", ds.median()); // 7.5
console.log("Max:", ds.max());       // 12
console.log("Min:", ds.min());       // 3
