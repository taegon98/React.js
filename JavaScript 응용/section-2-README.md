- Falsy 값: JavaScript에서 다음 값들은 false로 간주된다.
  - `false`
  - `0`
  - `''` (빈 문자열)
  - `null`
  - `undefined`
  - `NaN` (숫자가 아님)

- Truthy 값: JavaScript에서 다른 모든 값들은 truthy로 간주된다.
  - `true`
  - `0`이 아닌 숫자들
  - 비어있지 않은 문자열
  - 객체
  - 배열
  - 함수

- 단락 회로 평가(Short-circuit evaluation): 논리 연산자를 사용할 때 일부 표현식의 결과에 따라 나머지 표현식의 평가를 건너뛰는 방법
  - && 연산자: 첫 번째 피연산자가 거짓으로 평가되면 두 번째 피연산자를 평가하지 않는다.
  - || 연산자: 첫 번째 피연산자가 참으로 평가되면 두 번째 피연산자를 평가하지 않는다.
  - 조건부 실행을 구현하거나 기본값을 설정하는 등 다양한 상황에서 유용하게 사용될 수 있다. 예를 들어, let result = value || "default"; 코드에서 value가 참으로 평가되면 result는 value의 값이 되고, value가 거짓으로 평가되면 result는 "default"가 된다.

- 비 구조화 할당: 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 할당하는 것을 의미
  1. 배열 비 구조화 할당: 배열의 각 요소를 개별 변수에 할당
  ```javascript
  let [a, b] = [1, 2];
  ```

  2. 객체 비 구조화 할당: 객체의 각 속성을 개별 변수에 할당하며, Key 값을 통해 접근
  ```javascript
  let {name, age} = {name: 'John', age: 30};
  ```

- Spread 연산자: ... (세 개의 점)으로 표시되며, 배열, 객체 등을 요소 단위로 "펼쳐"서 사용할 수 있게 해주는 연산자
  ```javascript
  let arr1 = [1, 2, 3];
  let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
  ```

- 자바스크립트는 싱글 스레드 기반 언어로, 한 번에 하나의 작업만 처리한다.
  - 동기 방식 처리 (블로킹 방식): 코드가 순차적으로 실행되며, 한 작업이 완료될 때까지 다음 작업은 대기한다.<br>
  Head-of-Line (HOL) 블로킹으로 이어져 성능 저하를 초래할 수 있다.
  - 논 블로킹 작업의 필요성: 싱글 스레드 모델에서 긴 작업이나 I/O 작업으로 인한 블로킹은 전체 시스템의 성능 저하를 일으킬 수 있다.<br>
  따라서, 자바스크립트는 setTimeout, setInterval, 프로미스(Promises), 비동기 함수(Async/Await) 등을 통해 비동기 프로그래밍을 지원한다. <br>
  이러한 메커니즘을 사용하여, 블로킹 없이 동시에 여러 작업을 처리할 수 있다.

- 자바스크립트 엔진의 구조
  - 힙 (Heap): 객체와 같은 메모리 할당이 일어나는 영역
  - 콜 스택 (Call Stack): 실행 중인 코드의 컨텍스트(함수 호출, 변수 등)를 저장하는 스택 구조이다. <br>
  함수가 호출되면 콜 스택에 푸시(push)되고, 함수 실행이 완료되면 팝(pop)되며, 콜 스택이 비어 있으면 프로그램이 종료된다.

- 비동기 처리 메커니즘
  1. Web APIs: setTimeout과 같은 비동기 함수는 콜 스택에서 직접 처리되지 않고 Web APIs에 의해 처리된다. <br>
  이는 콜 스택이 해당 함수를 실행하고 바로 다음 작업으로 넘어갈 수 있게 해, 블로킹을 방지한다.
  2. 콜백 큐 (Callback Queue): 비동기 함수의 처리가 완료되면, 해당 함수의 콜백이 콜백 큐에 추가된다.
  3. 이벤트 루프 (Event Loop): 이벤트 루프는 콜 스택이 비어 있을 때 콜백 큐에 있는 작업을 콜 스택으로 이동시켜 실행시킨다.
![Alt text](<JavaScript 응용/JS engine.png>)

- Promise: JavaScript에서 비동기 작업을 처리하는 객체
  -  Promise는 비동기 작업의 최종 완료(또는 실패) 및 그 결과 값을 나타내며, 다음과 같이 세 가지 상태를 가진다.
      1. pending: 비동기 처리 로직이 아직 완료되지 않은 상태
      2. fulfilled: 비동기 처리가 완료되어 Promise가 결과 값을 반환한 상태
      3. rejected: 비동기 처리가 실패하거나 오류가 발생한 상태
  - Promise는 `then` 메서드를 사용하여 비동기 작업이 성공적으로 완료되었을 때의 콜백 함수를 등록할 수 있다.<br>
  또한 `catch` 메서드를 사용하여 오류가 발생했을 때의 콜백 함수를 등록할 수 있다.
  - 콜백 지옥(callback hell) 문제를 해결: 콜백 함수를 중첩하거나 연쇄적으로 사용할 때 발생하며 코드가 복잡하고 가독성이 떨어지며 유지보수가 어려워지는 상황
  - 예시
    ```javascript
    const myPromise = new Promise((resolve, reject) => {
      // 비동기 작업 수행 후
      if (/* 작업이 성공했을 경우 */) {
          resolve("성공한 결과");
      } else {
          reject("작업 실패");
      }
    });

    myPromise.then(result => {
      console.log(result); // "성공한 결과" 출력
    }).catch(error => {
      console.error(error); // 이 부분은 실행되지 않음
    });
    ```

- async / await: JavaScript에서 비동기 코드를 작성할 때 사용하는 키워드
  - async: async 키워드는 함수 앞에 위치하며, 이 함수가 비동기 함수임을 나타낸다. <br> async 함수는 항상 프로미스(Promise)를 반환한다.
  - await: await 키워드는 async 함수 내부에서만 사용할 수 있다. <br>
  await 뒤에 위치한 표현식은 보통 프로미스이며, JavaScript 엔진은 프로미스가 fulfilled 또는 rejected 상태가 될 때까지 함수의 실행을 일시 중지한다.
  - 예시
    ```javascript
    // 비동기 함수 선언
    async function fetchData() {
      try {
        // await를 사용하여 HTTP 요청의 프로미스가 완료될 때까지 기다림
        const response = await fetch('https://api.example.com/data');
        // 프로미스가 완료되면 JSON을 파싱
        const data = await response.json();
        // 데이터 처리
        console.log(data);
      } catch (error) {
        // 오류 처리
        console.error("An error occurred:", error);
      }
    }

    // 비동기 함수 호출
    fetchData();
     ```
- fetch: JavaScript에서 HTTP 요청을 보내기 위해 사용하는 내장 함수
  - fetch 함수는 Promise 기반 API이므로 비동기적으로 작동하며, then()과 catch() 또는 async/await와 함께 사용하여 비동기 결과를 처리할 수 있다.
  - then() / catch() 예시
    ```javascript
    fetch('https://api.example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); 
    })
    .then(data => {
      console.log(data); 
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
    ```
  - async/await 예시
    ```javascript
    async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); 
      console.log(data); 
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
      }
    }
    ```
    