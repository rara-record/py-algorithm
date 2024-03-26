function solution(participant, completion) {
  var answer = "";

  const hash = {};
  for (let value of participant) {
    if (!hash[value]) {
      hash[value] = 0;
    }

    hash[value]++;
  }

  completion.forEach((value) => hash[value]--);

  for (let key in hash) {
    if (hash[key]) {
      answer = key;
    }
  }
  return answer;
}

// 예제 배열
const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];

// solution 호출
console.log(solution(participant, completion));
