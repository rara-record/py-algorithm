/**
 * 각 의상의 종류별로 몇 개의 옵션이 있는지 세고
 * 해당 의상을 아예 선택하지 않는 경우도 포함하기 때문에,
 * 각 종류별로 선택하지 않는 경우를 포함하여 계산
 * - 각 종류별 선택할 수 있는 옵션의 수를 곱하여 모든 경우의 수를 구한다.
 *
 * 예를 들어, 얼굴에 대한 의상이 2개 있다고 가정하고, 이 경우 가능한 선택
 * - 동그란 안경을 선택
 * - 검정 선글라스를 선택
 * - 얼굴에 대한 의상을 선택하지 않음
 */

function solution(clothes) {
  let clothesMap = new Map();

  // 종류별로 의상이 몇개 있는지 저장
  for (let [_, category] of clothes) {
    // 해당 종류가 있다면 +1, 없으면 1
    clothesMap.set(category, (clothesMap.get(category) || 0) + 1);
  }

  const combinations = Array.from(clothesMap.values()).reduce(
    (acc, current) => acc * (current + 1), // 선택하지 않은 경우를 포함해야 하므로 +1을 더해준 값을 곱함
    1
  );

  return combinations - 1; // 적어도 하나의 의상을 선택해야 하므로 "모두" 선택하지 않는 경우를 빼준다
}

// 예제 배열
const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

// solution 호출
console.log(solution(clothes));
