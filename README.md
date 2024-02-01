## React.js 개인 공부 레포지토리 입니다.

<details>
<summary>1. JavaScript 기본</summary>

- JavaScrip 변수: 자바스크립트는 동적 타입 언어로 변수들이 실행 시간에 그 타입이 결정되고 변경될 수 있다.

- var VS let
  - var는 함수 레벨 스코프를 가지며, 동일한 스코프 내에서 재선언할 수 있다.
  - let은 블록 레벨 스코프를 가지며, let은 var와 달리 동일한 스코프 내에서 재선언할 수 없다.

<br>

- Primitive Type
  - 단일 값만 가질 수 있는 데이터 타입
  - Number, String, Boolean, Null, Undefined

<br>

- Non-Primitive Type
  - 한 번에 여러 값을 가질 수 있는 데이터 타입
  - Object, Array, Function

<br>

- 백틱(``)
  - JavaScript에서 문자열을 정의하는 방법 중 하나로, 문자열 내에서 변수나 표현식을 ${}로 감싸서 직접 삽입할 수 있다. (Template Literal)

<br>

- 형변환
  - JavaScript 엔진은 필요에 따라 자동으로 형변환을 수행한다.
    예를 들어, 숫자와 문자열을 함께 사용할 때 자동 형변환이 일어난다.
  - parseInt, parseFloat, Number 등의 함수를 사용하여 명시적인 형변환을 할 수 있다.

<br>

- 비교 연산자
  - ==, !=: 두 변수의 값만 비교하고 타입은 무시
  - ===, !==: 값과 함께 타입까지 엄격하게 비교

<br>

- null 병합 연산자: 첫 번째 피연산자가 null 또는 undefined인 경우 두 번째 피연산자를 반환

<br>

- 함수 선언식 VS 함수 표현식
  - 함수 선언식(Function Declaration): function 키워드를 사용하여 함수를 선언하는 방법
    - 호이스팅(Hoisting): 정의된 함수는 스크립트가 실행되기 전에 처리되어, 함수를 선언하기 전에도 호출할 수 있다는 것을 의미
  - 함수 표현식(Function Expression): 함수를 변수에 할당하는 방법
    - 함수 표현식은 호이스팅이 발생하지 않으므로, 선언하기 전에 함수를 호출하면 오류가 발생할 수 있다.

<br>

- 화살표 함수: function 키워드 대신 화살표(=>)를 사용하여 함수를 정의
  - 화살표 함수는 자체적인 this 바인딩을 생성하지 않으며, 자신이 선언된 시점의 상위 스코프의 this 값을 "상속" 받는다.
    ```javascript
    function Timer() {
      this.seconds = 0;
      setInterval(() => {
        this.seconds++; // 여기서의 `this`는 Timer 객체를 가리킴
      }, 1000);
    }
    ```

<br>

- 콜백 함수: 다른 함수에 인자로 전달되는 함수를 의미

  - 아래 코드에서 greeting 함수는 processUserInput 함수에 콜백 함수로 전달되어, 사용자가 이름을 입력하면 greeting 콜백 함수가 호출되어 사용자에게 인사를 한다.

    ```javascript
    function greeting(name) {
      console.log("Hello " + name);
    }

    function processUserInput(callback) {
      var name = prompt("Please enter your name.");
      callback(name);
    }

    processUserInput(greeting);
    ```

<br>

- 객체 생성 방식
  - 생성자 방식: new 키워드와 함께 생성자 함수를 사용하여 객체를 생성
    - 예: let obj = new Object();
  - 객체 리터럴 방식: 중괄호 {}를 사용하여 객체를 직접 선언
    - 예: let obj = {};

<br>

- 객체 프로퍼티: 객체에는 프로퍼티(멤버, 메서드 등)가 포함될 수 있다.
  - 점 표기법: person.name 처럼 점(.)을 사용해 접근
  - 괄호 표기법: person["name"]처럼 괄호와 문자열 키를 사용해 접근
    - 점 표기법을 사용할 때는 프로퍼티의 이름이 코드를 작성하는 시점에 이미 알려져 있어야 하지만, 괄호 표기법을 사용하면 프로퍼티의 이름이 동적으로 결정될 수 있다.

<br>

- const로 선언된 객체는 재할당은 불가능하지만, 객체 내부의 프로퍼티는 수정할 수 있다.
  - const가 변수에 대한 참조 자체의 불변성을 의미하지만, 참조된 객체의 내용은 불변하지 않기 때문
  - 예: const person = { name: "John" }; person.name = "Dave";

<br>

- this 키워드: 객체의 메소드 내에서, this는 현재 객체를 가리킨다.

<br>

- 배열 메서드 정리 [Click](/JavaScript%20기본/JavaScript_Array_Methods_README.md)
</details>

<details>
<summary>2. JavaScript 응용</summary>

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
  let { name, age } = { name: "John", age: 30 };
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

  - Promise는 비동기 작업의 최종 완료(또는 실패) 및 그 결과 값을 나타내며, 다음과 같이 세 가지 상태를 가진다.
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
        const response = await fetch("https://api.example.com/data");
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
    fetch("https://api.example.com/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
    ```
  - async/await 예시

    ```javascript
    async function fetchData() {
      try {
        const response = await fetch("https://api.example.com/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    }
    ```

  - fetch 함수가 비동기로 처리되는 이유

  1. Non-blocking I/O: JavaScript는 단일 스레드로 실행되므로, 네트워크 요청과 같은 시간이 오래 걸리는 작업들은 코드 실행을 막지 않도록 비동기적으로 처리된다. <br>
     만약 fetch가 동기적이라면, 요청이 완료될 때까지 코드 실행이 멈춰 사용자 인터페이스가 멈추는 등의 문제가 발생할 수 있다. <br>
  2. 효율성: 서버 응답을 기다리는 동안 다른 스크립트 실행, 이벤트 처리 등을 통해 동시성을 높이고 애플리케이션의 효율성이 향상시킬 수 있다.
  3. Promise 기반: fetch는 Promise를 반환한다. <br>
     따라서, 비동기 작업을 쉽게 처리할 수 있는 체인 형태의 메서드(then, catch, finally)를 사용할 수 있다.

</details>

<details>
<summary>3. Node.js 기초</summary>

- Node.js? Chrome V8 JavaScript 엔진을 기반으로 하는 JavaScript 런타임

  - JavaScript를 브라우저 외부에서 실행할 수 있게 해주며, 주로 서버 사이드 애플리케이션을 개발하는 데 사용
  - Node.js는 npm(Node Package Manager)을 통해 수많은 오픈 소스 라이브러리를 사용할 수 있다.

- Module: 관련된 코드를 그룹화하여 별도의 파일로 분리한 것

  - CommonJS: Node.js 환경에서 사용되는 모듈 시스템으로, require 함수를 사용하여 가져오고(import), module.exports를 사용하여 객체를 내보낸다. (동기적)
  - ES Modules: 최신 버전의 Node.js에서 사용하며, import와 export 문을 사용하여 모듈을 가져오고 내보낸다. (비동기적)

- NPM (Node Package Manager): JavaScript 프로그래밍 언어를 위한 패키지 관리자로, 주로 Node.js의 패키지(라이브러리 또는 모듈) 관리에 사용된다.

  - npm을 사용하면 다양한 Node.js 패키지를 쉽게 설치하고 관리할 수 있다.
  - 프로젝트에 필요한 모든 의존성을 package.json 파일에 명시하고, npm install 명령을 통해 한 번에 설치할 수 있다.

    ```json
    {
      "name": "package-example", // 패키지 이름
      "version": "1.0.0", // 패키지 버전
      "description": "", // 패키지에 대한 설명
      "main": "index.js", // 패키지의 메인 파일
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js" // 'npm start' 실행 시 index.js 파일을 Node.js로 실행
      },
      "author": "taegon", // 패키지의 저자
      "license": "ISC", // 패키지 라이선스 유형
      "dependencies": {
        // 패키지의 의존성을 나열
        "randomcolor": "^0.6.2"
      }
    }
    ```

    </detail>
