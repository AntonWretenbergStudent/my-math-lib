import { Dataset } from "../src/index.js";

function testCase(description, fn) {
  try {
    console.log(`\n[TEST] ${description}`);
    console.log(fn());
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

// 1. Normal dataset
testCase("Median of [1,2,3,4,5]", () => {
  const ds = new Dataset([1, 2, 3, 4, 5]);
  return ds.median(); // 3
});

// 2. Even number of items
testCase("Median of [1,2,3,4]", () => {
  const ds = new Dataset([1, 2, 3, 4]);
  return ds.median(); // 2.5
});

// 3. Unsorted input
testCase("Median of [9,1,5,3]", () => {
  const ds = new Dataset([9, 1, 5, 3]);
  return ds.median(); // 4
});

// 4. Includes a string (should fail)
testCase("Dataset with [1, '2', 3]", () => {
  const ds = new Dataset([1, "2", 3]);
  return ds.median();
});

// 5. Empty array (should fail)
testCase("Dataset with []", () => {
  const ds = new Dataset([]);
  return ds.median();
});

// 6. Array with NaN (should fail if Validator blocks NaN)
testCase("Dataset with [1, 2, NaN]", () => {
  const ds = new Dataset([1, 2, NaN]);
  return ds.median();
});

// 7. Large dataset
testCase("Median of [100,200,300,400,500,600]", () => {
  const ds = new Dataset([100, 200, 300, 400, 500, 600]);
  return ds.median(); // 350
});
