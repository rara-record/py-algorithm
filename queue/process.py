from collections import deque


def solution(priorities, location):
    queue = deque(priorities)
    answer = 0
    print(queue, 'queue')

    # 우선 순위가 높다면?
    while queue:
        # 대기 중인 큐에서 맨 앞에 요소를 뺀다
        current = queue.popleft()
        max_number = max(queue)

        if max_number <= current:
            answer += 1

            if location == 0:
                return answer
            else:
                location -= 1
        else:
            # 다시 큐에 넣는다
            queue.append(current)
            location = (location + len(queue) - 1) % len(queue)


result = solution([9, 8, 7], 0)
print(result, 'answer')
