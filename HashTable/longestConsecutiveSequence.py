# https://leetcode.com/problems/longest-consecutive-sequence/

# 연속 된 수의 첫 시작을 알 수 있다면 중복된 계산을 줄일 수 있다. 현재 숫자의 이전 숫자가 있는지 살펴본다. 

class Solution:
  def longestConsecutive(self, nums: list[int]) -> int:
    result = 0
    
    if not len(nums):
      return result
    
    # for num in nums:
    #   num_dict[num] = True
    
    # Comprehension 초기화 방식을 사용해서 { target :  nextTarget } 값으로 저장.
    num_dict = { x: x + 1 for x in nums } 
    
    for num in nums:
      target = num 
      count = 0 # 각 숫자의 연속 길이 초기화
      if num -1 not in num_dict: # 이전 값이 없다면 연속 된 수의 첫 시작이다
        while target in num_dict: # 첫번째 값을 찾는다
          target = num_dict[target] # 다음 값을 찾는다
          count += 1 # 카운트를 증가 한다
        result = max(result, count) # 현재 결과값과 count값을 비교하여 큰 수로 업데이트
    return result
      


# Solution 클래스의 인스턴스 생성
sol = Solution()

# 예제 배열
nums = [100, 4, 200, 1, 3, 2]

# longestConsecutive 메서드 호출
result = sol.longestConsecutive(nums)

print(result) 
  

  