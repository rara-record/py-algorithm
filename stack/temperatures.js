/****
 *  Daily temperatures
 *  https://leetcode.com/problems/daily-temperatures/
 *
 * 정수의 온도 배열이 일일 기온을 나타낼 때,
 * 더 따뜻한 온도를 얻기 위해 째 날 이후 기다려야 하는 일수가 answer[i]가 되도록 배열의 답을 반환합니다.
 * 이것이 가능한 미래 날짜가 없다면 대신 answer[i] == 0을 유지합니다.
 *
 */

{
  // O(n)
  function dailyTemperatures(temperatures) {
    const stack = [];
    let answers = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
      while (stack.length && stack[stack.length - 1].temp < temperatures[i]) {
        const { day: prevIndex } = stack.pop();
        answers[prevIndex] = i - prevIndex;
      }

      stack.push({ day: i, temp: temperatures[i] });
    }

    return answers;
  }
}

const test = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
console.log(test);

{
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
}
