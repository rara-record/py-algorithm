/**
 * 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때,
 * 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.
 *
 * 제한사항
 * prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
 * prices의 길이는 2 이상 100,000 이하입니다.
 *
 * O(n)
 */

function solution(prices) {
  const stack = [];
  let answer = new Array(prices.length).fill(0);

  prices.forEach((price, index) => {
    while (stack.length && price < stack[stack.length - 1].price) {
      const { index: prevIndex } = stack.pop();
      answer[prevIndex] = index - prevIndex;
    }
    stack.push({ index, price });
  });

  // 스택에 남아 있는 요소 처리
  while (stack.length) {
    const { index: prevIndex } = stack.pop();
    answer[prevIndex] = prices.length - prevIndex - 1;
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
