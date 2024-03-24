# nums라는 배열과 target이 주어졌을 때, nums의 원조중 두 숫자를 더해 target이 될 수 있으면 true를 반환하고,
# 그렇지 않으면 fasle를 반환해라. 단 같은 원소를 두번 사용할 수는 없다.

# O(n)

def solution(nums, target):
  memo = {}
  for v in nums:
    memo[v] = 1
    
  for v in nums:
    need_num = target - v
    if need_num in memo:
      return True
  return False
    
print(solution([1,2,3,4,5,6,7], 19))
