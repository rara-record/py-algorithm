// function solution(arr) {
//     let answer = [];
//     const queue = [...arr]
//
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       answer.push(arr[i]);
//     }
//   }
//
//   return answer;
// }

function solution(arr) {
    return arr.filter((item, i) => item !== arr[item + i])

}


console.log(solution([1, 1, 3, 3, 0, 1, 1]))