
# LIFO 후입 선출
# https://leetcode.com/problems/valid-parentheses/

# () [] {} 를 포함하고 있는 문자열 s가 주어졌을 때, 괄호가 유효한지 아닌지 판별하셈

#  제약 조건
# 1 <= s.length <= 104
# s consists of parentheses only '()[]{}'


parentheses_dict = {
    '{': '}',
    '[': ']',
    '(': ')',
}


def is_valid(s):
    stack = []

    for p in s:
        if p in parentheses_dict.keys():
            stack.append(p)
        elif not stack or parentheses_dict[stack.pop()] != p:
            return False
    if stack:
        return False
    return True


lifo = is_valid("[]}")
print(lifo)
