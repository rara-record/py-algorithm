const bracketObj = {
  "(": ")",
  "{": "}",
  "[": "]",
};
const stack = [];
function solution(s) {
  for (const item of s) {
    if (Object.keys(bracketObj).includes(item)) {
      stack.push(item);
    } else {
      const last = stack.pop();
      if (!stack.length || bracketObj[last] !== item) {
        return false;
      }
    }
  }
  return !stack.length;
}

console.log(solution("()()"));
