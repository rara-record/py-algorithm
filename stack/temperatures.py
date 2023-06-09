
def daily_temperatures(temperatures):
    ans = [0] * len(temperatures)
    stack = []

    for cur_day, _ in enumerate(temperatures):
        while stack and temperatures[stack[-1]] < temperatures[cur_day]:
            last_day = stack.pop()
            ans[last_day] = cur_day - last_day
        stack.append(cur_day)
    return ans


print(daily_temperatures([73, 74, 75, 71, 69, 72, 76, 73]))
