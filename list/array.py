# nums라는 배열과 target이 주어졌을 때, nums의 원조중 두 숫자를 더해 target이 될 수 있으면 true를 반환하고,
# 그렇지 않으면 fasle를 반환해라. 단 같은 원소를 두번 사용할 수는 없다.

# O(n2)
def toSum(nums, target):
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return True
    return False


print(toSum(nums=[2, 3, 4, 5, 6], target=8))


# O(n log n)
def toSum(nums, target):
    nums.sort()
    l, r = 0, len(nums) - 1
    while l < r:
        if nums[l] + nums[r] > target:
            r -= 1
        elif nums[l] + nums[r] < target:
            l += 1
        elif nums[l] + nums[r] == target:
            return True
    return False


print(toSum(nums=[4, 1, 9, 7, 5, 3, 16], target=14))
