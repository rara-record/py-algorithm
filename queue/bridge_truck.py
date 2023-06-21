from collections import deque
from math import ceil


# https://school.programmers.co.kr/learn/courses/30/lessons/42583
# 모든 트럭은한다.
# 다리에 진입하는 트럭 무게를 on_bridge 리스트(큐 역할)에 추가하고, 다리에 올라갈 때와 빠져나올 때 무게 총합을 업데이트한다.
# 매 반복마다 다리 위 트럭의 상태를 갱신하고, 대기 중인 트럭이 1초에 1만큼의 거리를 이동한다.
# # 다리에 올라간 트럭과 다리를 빠져나오는 트럭을 모두 고려 다리를 건너게 한다. (다리 무게 제한을 고려하여)

# 입력값
# 1. 다리의 길이
# 2. 다리가 견딜 수 있는 무게
# 3. 트럭의 배열
# 출력값
# 모든 트럭이 다리를 건너는 데 걸리는 시간


def solution(bridge_length, weight, truck_weights):
    answer = 0
    on_bridge = [0] * bridge_length  # 다리를 만든다
    bridge_weights = 0  # 다리의 무게를 계산 할 변수

    while truck_weights or any(on_bridge):  # 대기 중인 트럭이 있거나 or 다리 위에 진입한 트럭이 있을 경우
        answer += 1  # 1초 증가
        bridge_weights -= on_bridge.pop(0)  # 배열의 맨 앞 트럭이 다리에서 하강 한다

        if truck_weights:  # 대기 중인 트럭이 있을 경우에만 실행
            next_truck_weight = truck_weights[0]  # 이어서 진입할 트럭의 무게를 구한다

            if bridge_weights + next_truck_weight <= weight:    # 새로 진입할 트럭의 무게가 다리의 최대 무게를 초과하지 않는다면, 
                on_bridge.append(next_truck_weight)  # 다리에 진입 한다
                bridge_weights += next_truck_weight  # 다리의 무게를 갱신한다
                current_truck = truck_weights.pop(0)  # 대기 중인 트럭 배열에서 다리에 진입한 트럭 삭제
            else:
                on_bridge.append(0)  # 진입하지 못했을 경우 다리 무게를 0 추가

    return answer   # 모든 트럭이 다리를 지나면 총 시간을 반환


print(solution(2, 10, [7, 4, 5, 6]))
