from collections import deque


def solution(priorities, location):
    answer = 0

    queue = deque([(index, value) for index, value in enumerate(priorities)])  # [(0, 9), (1, 8, (2, 7))]

    while len(queue) > 0:
        current = queue.popleft()
        # max_value = max(item[1] for item in queue)
        #
        # if current[1] < max_value:  
        #     queue.append(current)
        if any(current[1] < item[1] for item in queue): # 현재 요소 보다 우선 순위가 더 높은 요소가 큐에 있는지 확인 한다.
            queue.append(current)
 
        else:
            answer += 1
            if current[0] == location:
                return answer
    return answer


result = solution([2, 1, 3, 2], 2)
print(result)
