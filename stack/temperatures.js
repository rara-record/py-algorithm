// Daily temperatures
// O(n)

function dailyTemperatures(temperatures) {
  const stack = [];
  let ans = new Array(temperatures.length).fill(0);

  temperatures.forEach((temp, day) => {
    while (stack.length && stack[stack.length - 1].temp < temp) {
      const { day: prevDay } = stack.pop();
      ans[prevDay] = day - prevDay;
    }
    stack.push({ day, temp });
  });

  return ans;
}

const test = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
console.log(test);
