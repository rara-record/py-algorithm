// https://leetcode.com/problems/two-sum/description/
// O(n)
function solution(nums, target) {
  const seen = {};
  let result = [-1, -1];
  nums.forEach((num, i) => {
    const needed = target - num;
    if (needed in seen) {
      result = [seen[needed], i];
      return;
    }
    seen[num] = i;
  });
  return result;
}

function solution(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const numNeeded = target - nums[i];
    if (seen.has(numNeeded)) {
      return [seen.get(numNeeded), i];
    }
    seen.set(nums[i], i);
  }

  return [0, 0];
}

console.log(solution([2, 7, 11, 15], 9));
