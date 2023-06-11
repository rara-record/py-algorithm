const requireDays = (speeds) => (progress, index) => {
  return Math.ceil((100 - progress) / speeds[index]);
};

function groupSolutions(days) {
  return days
    .reduce((answer, currentDay) => {
      const previous = answer[answer.length - 1];

      if (!previous || currentDay <= previous.startDay) {
        previous.works.push(currentDay);
      } else {
        answer.push({ startDay: currentDay, works: [currentDay] });
      }

      return answer;
    }, [])
    .map((group) => group.works.length);
}

function solution(progresses, speeds) {
  const days = progresses.map(requireDays(speeds));
  const grouped_solutions = groupSolutions(days);
  return grouped_solutions;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
