/***
 * 시간 복잡도
 * 입력 크기에 따라 어떻게 증가하는지를 본다
 *
 * 내부 for문이 외부 for문의 각 반복마다 전체를 다시 반복한다 : O(n2)
 * 각 for문이 독립적으로 실행된다 (내부 for문이 외부 for문에 영향을 미치지 않을 경우): O(n)
 */

/**
 *  O(n)
 *  각 번호를 다른 번호와 비교하는 것이 아니라, 각 번호 내에서 접두사를 생성하여 전체 목록에 그 접두사가 있는지를 확인하는 것
 * 이 과정에서 접두사를 만드는 작업은 각 전화번호에 대해 독립적으로 수행
 */

{
  function solution(phone_book) {
    var answer = true;
    const hashPhoneBook = {};

    for (const phone of phone_book) {
      if (!hashPhoneBook[phone]) {
        hashPhoneBook[phone] = true;
      }
    }

    phone_book.forEach((phone) => {
      let prefix = "";
      for (let i = 0; i < phone.length; i++) {
        prefix += phone[i];

        // 자신과는 대조 하지 말 것
        if (prefix !== phone && hashPhoneBook[prefix]) {
          answer = false;
          break;
        }
        if (!answer) break;
      }
    });

    return answer;
  }
  // 예제 배열
  const phone_book = ["123", "456", "789"];

  // solution 호출
  console.log(solution(phone_book));
}

{
  // O(n2)
  function solution(phone_book) {
    for (let i = 0; i < phone_book.length; i++) {
      for (let j = 0; j < phone_book.length; j++) {
        if (i !== j && phone_book[j].startsWith(phone_book[i])) {
          return false;
        }
      }
    }
    return true;
  }

  // 예제 배열
  const phone_book = ["119", "97674223", "1195524421"];

  // solution 호출
  console.log(solution(phone_book));
}
