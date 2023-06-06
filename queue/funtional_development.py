from collections import deque
from math import ceil


def solution(progresses, speeds):
    days = []

    for p, s in zip(progresses, speeds):
        rest = (100 - p)
        days.append(ceil(rest / s))

    # for p, s in zip(progresses, speeds):
    #     if (100 - p) % s != 0:
    #         days.append(((100 - p) // s) + 1)
    #     else:
    #         days.append((100 - p) // s)

    print(days)
    queue = deque(days)
    answer = []

    while queue:
        count = 1
        current = queue.popleft()  # 현재 검사 중인 작업

        while queue and current >= queue[0]:  # 현재 작업 미완료
            count += 1  # 같이 배포해야 하니까 count 증가
            queue.popleft()  # 다음 작업은 완료가 된 상태이므로 큐에서 뺀다.
        # 현재 작업(앞에 있는 기능)이 먼저 완료 된 경우이므로 , 현재 작업만 먼저 배포한다.
        answer.append(count)

    return answer


print(solution([93, 30, 55], [1, 30, 5]))
