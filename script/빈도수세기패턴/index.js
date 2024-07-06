// ! 핵심 !
// 두 개의 배열을 객체로 세분화하여, 각 배열 요소를 분류한 다음 각 배열을 비교한다.

// 빈도수 체크 javascript 알고리즘 중 O(n2)으로 느린 예시로,
// indexOf는 중첩루프를 가짐

// ex) [1, 2, 3] [4, 1, 9] true
// [1, 2, 1] [2, 2, 1] false

// indexOf. : 해당 요소의 인덱스를 찾아줌, 없으면 -1 반환
// splice:  배열의 기존 요소를 삭제 또는 교체

function badSame(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log("badSame", badSame([1, 2, 3], [4, 9, 1]));

// 빈도수 체크 javascript 알고리즘 O(n)으로 중첩된 루프 대신
// 개별 루프를 돌아 적용하는 방법

// 각 배열에 개별 object를 만들고, 배열의 각 숫자를 key로 두며,
// value 자리에는 1을 더하거나, 이미 있다면 1로 초기화한다.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let value of arr1) {
    // frequencyCounter1[value]가 처음에는 아무것도 할당되지 않은 상태이기 때문에
    //  undifined일 경우를 대비해서 0으로 둔 후, 거기에 1을 더한다 (초기화한다)
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  }

  for (let value of arr2) {
    // frequencyCounter2[value]가 처음에는 아무것도 할당되지 않은 상태이기 때문에
    //  undifined일 경우를 대비해서 0으로 둔 후, 거기에 1을 더한다 (초기화한다)
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }

  console.log("frequencyCounter1", frequencyCounter1);
  console.log("frequencyCounter2", frequencyCounter2);

  // 첫번째 배열에 루프를 적용하여, 각각의 키를 살펴본다.
  for (let key in frequencyCounter1) {
    // 우선 frequencyCounter2에 key의 제곱이 없다면 false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // 빈도수까지 체크
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log("same", same([1, 2, 3, 3], [4, 9, 1, 78]));
