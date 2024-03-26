// https://leetcode.com/problems/longest-consecutive-sequence/

// 연속 된 수의 첫 시작을 알 수 있다면 중복된 계산을 줄일 수 있다. 현재 숫자의 이전 숫자가 있는지 살펴본다.

function solution(nums) {
  // 결과값 초기화
  let result = 0;

  // 해쉬 테이블 초기화
  const numsMap = {};
  for (const num of nums) {
    numsMap[num] = true;
  }

  for (const num in numsMap) {
    // 이전 숫자가 존재하지 않는지 확인
    if (!(num - 1 in numsMap)) {
      let target = Number(num);
      let count = 1;
      // 다음 숫자가 존재하는지도 확인해야 계산이 더 효율적.
      while (target + 1 in numsMap) {
        target++;
        count++;
      }
      result = Math.max(result, count);
    }
  }

  return result;
}

// 예제 배열
nums = [100, 4, 200, 1, 3, 2];

// solution 메서드 호출
console.log(solution(nums));
