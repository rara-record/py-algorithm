from collections import deque
from math import ceil


# https://school.programmers.co.kr/learn/courses/30/lessons/42583
# 1. 모든 트럭은 1초에 1만큼의 거리를 이동 한다.
# 2. 다리에 진입 하는 트럭과 다리를 통과 하는 트럭을 모두 고려 한다
# 3. 트럭이 다리에 올라올 때, 해당 트럭의 무게를 큐(Queue)에 추가 하고, 만약 다리가 최대 하중 이상이 되면, 가장 오래된 트럭을 큐에서 제거 한다.
# 4. 트럭이 다리를 건너 면서 하강할 때, 다리 위 트럭 들의 상태를 갱신 한다.

# 입력값
# 1. 다리의 길이
# 2. 다리가 견딜 수 있는 무게
# 3. 트럭의 배열
# 출력값
# 모든 트럭이 다리를 건너는 데 걸리는 시간

def solution(bridge_length, weight, truck_weights):
    bridge = deque([0] * bridge_length)  # 다리를 만든다.
    time = 0  # 다리를 건너는 시간을 초기화
    current_weight = 0  # 다리 위의 트럭 무게

    while truck_weights:
        time += 1   # 시간이 1초마다 증가
        removed_truck = bridge.popleft()
        current_weight -= removed_truck

        if current_weight + truck_weights[0] <= weight:
            truck = truck_weights.pop(0)
            bridge.append(truck)
            current_weight += truck
        else:
            bridge.append(0)

    return time + bridge_length


solution(2, 10, [7, 4, 5, 6])
