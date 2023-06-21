// 필요한 일수 계산 하기
const requireDays = (progresses, speeds) => {
    return progresses.map((progress, index) =>
        Math.ceil((100 - progress) / speeds[index])
    );
};


// 작업 그룹 내의 작업들은 일정 기간 동안 가능한 많은 작업들을 함께 배포하기 위해 그룹화됩니다.


// 이 구문에서 이전 그룹의 첫 번째 값과 비교하는 이유는 배포되는 작업의 순서를 보장하기 위해서입니다. 문제에서 주어진 조건에 따르면 기능들은 순차적으로 배포되어야 합니다.
// 즉, 뒤에 있는 기능이 먼저 배포되면 안 됩니다.
// 이전 그룹의 첫 번째 값과 현재 작업의 필요한 일수를 비교함으로써,
// 현재 작업이 이전 작업 그룹과 함께 배포될 수 있는지를 판단합니다.

// 첫 번째 그룹의 첫 번째 작업(작업 A)은 항상 작업 B보다 크거나 같은 필요한 일수를 가집니다. 이유는 다음과 같습니다.


// 네, 맞습니다. 그룹을 생성할 때 사용하는
// if (currentIndex > 0 && current <= prevGroup[0]) 조건문에 의해,
// A(이전 그룹의 첫 번째 작업)보다 B의 필요한 일수가 더 큰 경우는 발생하지 않습니다.
// 각 그룹은 필요한 일수가 긴 작업부터 순차적으로 배치됩니다.
// 현재 작업이 이전 그룹과 함께 배포될 수 있는지 확인하기 위해 이전 그룹의 첫 번째 작업(작업 A)와 비교합니다.
// 만약 현재 작업의 필요한 일수가 이전 그룹의 첫 번째 작업보다 작거나 같으면, 현재 작업은 이전 그룹에 추가됩니다. 이렇게 하면 이전 그룹의 작업들은 서로 완료까지 필요한 일수가 비슷한 작업끼리 묶입니다. 조건문에 의해 현재 작업이 이전 그룹보다 필요한 일수가 큰 경우, 적절한 그룹에 포함되지 않으며 새로운 그룹으로 구분됩니다. 이 방식을 사용하면 순차적으로 배포되어야 하는 작업들 사이에 순서가 보장되면서 효율적인 배포를 할 수 있습니다. 따라서, 이전 그룹의 첫 번째 작업(작업 A)보다 작업 B의 필요한 일수가 더 클 수 없습니다.


// 작업 그룹 크기 계산


const distributeReducer = (groups, currentTask) => {
    const prevGroup = groups[groups.length - 1];    // 이전 그룹 가져오기

    if (prevGroup && currentTask <= prevGroup[0]) {     // 현재 작업의 필요한 일수가 이전 그룹의 첫 번째 작업보다 작거나 같은 경우
        prevGroup.push(currentTask);                            // 이전 작업 그룹에 현재 작업 추가
    } else {   // 현재 작업의 필요한 일수가 이전 그룹의 첫 번째 작업보다 많은 경우
        groups.push([currentTask]); // 새로운 작업 그룹을 생성하여 배포 그룹에 추가
    }

    return groups;
}


const distributeTasksSize = (tasks) => {
    const groups = []; // 그룹 초기화

    tasks.forEach((task, index) => {
        if (index > 0 && task <= groups[groups.length - 1][0]) {  // 이전 그룹의 첫 번째 작업보다 작거나 같은 필요한 일수이면 현재 그룹에 추가
            groups[groups.length - 1].push(task);
        } else { // 아니면 새로운 그룹 생성
            groups.push([task]);
        }
    });

    return groups.map((group) => group.length);
}





function solution(progresses, speeds) {
    // 각 작업의 필요한 일수 계산
    const days = requireDays(progresses, speeds);
    const groupSize =  days.reduce(distributeReducer, []);
    return groupSize.map((group) => group.length);
}


console.log(solution([95, 90, 99, 99, 80, 99], [2, 2, 2, 2, 2, 2]))


/**
 * 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다.
 * 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
 *
 * 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이
 * 때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
 *
 * 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와
 * 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때
 * 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
 *
 *
 * 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다.
 * 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.
 *
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript
 * */

