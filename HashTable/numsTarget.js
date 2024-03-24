// nums라는 배열과 target이 주어졌을 때, nums의 원조중 두 숫자를 더해 target이 될 수 있으면 true를 반환하고,
// 그렇지 않으면 fasle를 반환해라. 단 같은 원소를 두번 사용할 수는 없다.

//  O(n)

function solution(nums, target) {
  const memo = new Map();

  for (let i = 0; i < nums.length; i++) {
    const needNumber = target - nums[i];
    if (memo.has(needNumber)) {
      return true;
    }
    memo.set(nums[i], 1);
  }

  return false;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7], 12));
