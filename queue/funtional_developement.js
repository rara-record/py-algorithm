function solution(progresses, speeds) {
  let answer = [];

  const days = progresses.map((progress, index) => {
    const rest = 100 - progress;
    return Math.ceil(rest / speeds[index]);
  });

  const queue = [...days];

  while (queue.length) {
    let count = 1;
    const current = queue.shift();

    while (queue && current >= queue[0]) {
      count++;
      queue.shift();
    }

    answer.push(count);
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
