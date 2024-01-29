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
    this.seconds++;  // 여기서의 `this`는 Timer 객체를 가리킴
    }, 1000);
    }
    ```

<br>

- 콜백 함수: 다른 함수에 인자로 전달되는 함수를 의미
  - 아래 코드에서 greeting 함수는 processUserInput 함수에 콜백 함수로 전달되어, 사용자가 이름을 입력하면 greeting 콜백 함수가 호출되어 사용자에게 인사를 한다.
    ```javascript
    function greeting(name) {
    console.log('Hello ' + name);
    }
    
    function processUserInput(callback) {
    var name = prompt('Please enter your name.');
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
