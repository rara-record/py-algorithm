function countUniqueValues(arr) {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 5, 5, 12, 16, 17])); // 6

// i
// [1,1,1,2,5,5,12,16,17]
//    j
