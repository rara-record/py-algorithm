// 이 패턴의 개념은 인덱스나 위치에 해당하는 포인트나 값을 만든 다음
// 특정 조건에 따라 중간 지점부터 시작지점이나 끝지점, 양쪽 지점으로 이동시키는 것이다.

// 배열에서 두 수의 합이 0인 숫자를 찾아 반환

// O(N^2)
function badSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// O(N)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log("badSumZero", badSumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]
console.log("sumZero", sumZero([-4, -3, -2, -1, 2, 3, 10])); // [-3,3]
console.log("sumZero", sumZero([-1, 0, 5])); // undefined
