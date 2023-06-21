function solution(priorities, location) {
  let answer = 0;


  const dictQueue = priorities.map((priority, idx) => {
    return { key: idx, value: priority  };
  });

  while (dictQueue.length > 0) {
    let current = dictQueue.shift();
    // const max_value = Math.max(...dictQueue.map((item) => item.value)); // max값을 구해놓고 비교할 수도 있음.

    const higherPriorityExists = dictQueue.some(
      (item) => item.value > current.value
    );

    if (higherPriorityExists) {
      dictQueue.push(current);
    } else {
      answer++;

      if (current.key === location) {
        return answer;
      }
    }
  }

  return answer;
}

const result = solution([2, 1, 3, 2], 2);

console.log(result, "result");
