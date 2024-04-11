function solution(nums) {
  var answer = 0;

  answer = new Set(nums);
  answer = answer.size;
  if (answer.size < nums.length / 2) {
    answer = answer.size + 1;
  }
  return answer;
}

// 예제 배열
const nums = [3, 3, 3, 2, 2, 2, 2];

// solution 호출
console.log(solution(nums));
