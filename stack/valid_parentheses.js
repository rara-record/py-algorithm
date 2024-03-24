function solution(s) {
  const stack = [];
  let answers = ture;
  s.split("").forEach((element) => {
    if (element === "(") {
      stack.push(")");
    } else if (element === "{") {
      stack.push("}");
    } else if (element === "[") {
      stack.push("]");
    } else if (stack.length && stack[stack.length - 1] === element) {
      stack.pop();
    } else {
      answers = false;
      return;
    }
  });
  if (stack.length) answers = false;
  return answers;
}

console.log(solution("()()"));
