const isEven = num => num % 2 === 0;
const sum = nums => nums.reduce((acc, el) => acc + el, 0);
const average = nums => sum(nums) / nums.length;

const median = nums => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length = sorted.length;
  const middle = length / 2 - 1;
  return isEven(length)? average([sorted[middle], sorted[middle + 1]]) : sorted[Math.ceil(middle)];
}

const spreadsheetFunctions = {
  sum,
  average,
  median
}