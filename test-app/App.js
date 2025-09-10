import { Dataset } from "../src/index.js";

const ds = new Dataset([1, 2, 3, 4, 5]);
console.log("Sum:", ds.sum());     // 10
console.log("Median:", ds.median()); // 2.5
