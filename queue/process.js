function solution(priorities, location) {
  let answer = 0;

  const createQueue = (priority, index) => {
    return { priority, location: index };
  };

  const queue = priorities.map(createQueue);

  while (queue.length > 0) {
    let current = queue.shift();
    // const max_value = Math.max(...queue.map((item) => item.priority)); // max값을 구해놓고 비교할 수도 있음.

    const higherPriorityExists = queue.some(
      (item) => item.priority > current.priority
    );

    if (higherPriorityExists) {
      queue.push(current);
    } else {
      answer++;

      if (current.location === location) {
        return answer;
      }
    }
  }

  return answer;
}

const result = solution([2, 1, 3, 2], 2);

console.log(result, "result");
