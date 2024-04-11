/***
 * 시간 복잡도
 * 입력 크기에 따라 어떻게 증가하는지를 본다
 *
 * 내부 for문이 외부 for문의 각 반복마다 전체를 다시 반복한다 : O(n2)
 * 각 for문이 독립적으로 실행된다 (내부 for문이 외부 for문에 영향을 미치지 않을 경우): O(n)
 */

/***
 * 스택과 해시
 *
 * - 의존성: "처리해야 할 작업이 이전에 처리한 작업에 의존적인 경우"라는 설명은 스택이 유용한 상황을 설명합니다.
 * 하지만 해시테이블 문제에서 접두사 확인은 "이전에 처리한 작업에 의존적"이라기보다는,
 * 각 전화번호 내에서 독립적으로 접두사를 생성하고 전체 목록에 해당 접두사가 있는지 검사하는 독립적인 검사 과정입니다.
 *
 * - 데이터 처리 순서: 스택은 데이터 처리 순서가 중요할 때 유리합니다.
 * 하지만 전화번호 목록 문제에서는 순서보다는 각 전화번호를 효율적으로 접근하고 검사하는 것이 더 중요합니다.
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
