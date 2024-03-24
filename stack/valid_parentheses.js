function solution(s) {
  const stack = [];
  let answers = ture;
  s.split("").forEach((element) => {
    if (element === "(") stack.push(")");
    if (element === "{") stack.push("}");
    if (element === "[") stack.push("]");
    if (stack.length && stack[stack.length - 1] === element) stack.pop();
  });
  if (stack.length) answers = false;
  return answers;
}

console.log(solution("()()"));
