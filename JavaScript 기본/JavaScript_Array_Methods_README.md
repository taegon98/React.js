
# 자바스크립트 배열 메소드

## 1. forEach
배열의 각 요소에 대해 주어진 함수를 한 번씩 실행한다.
```javascript
[1, 2, 3].forEach(num => console.log(num)); // 1, 2, 3 출력
```

## 2. map
배열의 모든 요소에 주어진 함수를 적용한 결과로 새 배열을 생성한다.
```javascript
const doubled = [1, 2, 3].map(num => num * 2); // [2, 4, 6]
```

## 3. includes
배열이 특정 값을 포함하고 있는지 여부를 확인한다.
```javascript
const hasTwo = [1, 2, 3].includes(2); // true
```

## 4. indexOf
배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환한다.
```javascript
const index = [1, 2, 3].indexOf(2); // 1
```

## 5. findIndex
주어진 테스트 함수를 만족하는 첫 번째 요소의 인덱스를 반환한다.
```javascript
const index = [1, 2, 3].findIndex(num => num === 2); // 1
```

## 6. find
주어진 테스트 함수를 만족하는 첫 번째 요소의 값을 반환한다.
```javascript
const two = [1, 2, 3].find(num => num === 2); // 2
```

## 7. filter
주어진 함수를 통과하는 모든 요소로 이루어진 새 배열을 생성한다.
```javascript
const even = [1, 2, 3, 4].filter(num => num % 2 === 0); // [2, 4]
```

## 8. slice
배열의 일부분을 새 배열로 반환한다.
```javascript
const firstTwo = [1, 2, 3].slice(0, 2); // [1, 2]
```

## 9. concat
두 개 이상의 배열을 합쳐 새 배열을 생성한다.
```javascript
const combined = [1, 2].concat([3, 4]); // [1, 2, 3, 4]
```

## 10. sort
배열의 요소를 사전순으로 정렬한다.
```javascript
const sorted = [3, 1, 4, 2].sort(); // [1, 2, 3, 4]
```

## 11. join
배열의 모든 요소를 하나의 문자열로 결합한다.
```javascript
const combinedString = ["Hello", "world"].join(" "); // "Hello world"
```
