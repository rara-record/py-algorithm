def daily_temperatures(temperatures):
    ans = [0] * len(temperatures) # answer 배열 초기화 
    stack = []
    # O(n)
    for cur_day, cur_temp in enumerate(temperatures): # enumerate(temperatures): index, temperatures 
        # cur_temp보다 온도가 낮을 날이 있으면 pop을 해준다. 
        # stack[-1] : 스택의 마지막요소, stack[1] 튜플 자료구조의 1번째, 즉 마지막 요소의 온도를 확인
        while stack and stack[-1][1] < cur_temp: 
            prev_day, _ = stack.pop()
            ans[prev_day] = cur_day - prev_day
        stack.append((cur_day, cur_temp))  
    return ans


print(daily_temperatures([73, 74, 75, 71, 69, 72, 76, 73]))
