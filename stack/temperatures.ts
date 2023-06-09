function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const ans: number[] = [];

  // 역순 으로 순회
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    )
      stack.pop();
    ans.push(stack.length ? stack[stack.length - 1] - i : 0);
    stack.push(i);
  }

  return ans.reverse();
}
