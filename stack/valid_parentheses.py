
# LIFO 후입선출
# https://leetcode.com/problems/valid-parentheses/

# () [] {} 를 포함하고 있는 문자열 s가 주어졌을 때, 괄호가 유효한지 아닌지 판별하셈

#  제약 조건
# 1 <= s.length <= 104
# s consists of parentheses only '()[]{}'

def isValid(s):
    stack = []
    for p in s:
        if p == "(":
            stack.append(")")
        elif p == "[":
            stack.append("]")
        elif p == "{":
            stack.append("}")
        # 스택이 비어있지 않고, 스택의 top에서 제거한 인덱스가 p와 같지 않으면 false를 리턴한다.
        elif not stack or stack.pop != p:
            return False
        return not stack
