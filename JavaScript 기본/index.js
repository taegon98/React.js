/* -------------------- 함수 표현식으로 getArea() 함수 정의 -------------------- */
let getArea = (width, height) => {
  return width * height;
}

console.log(getArea(10, 20)); // 200

/* -------------------- Callback 함수 작성 -------------------- */
function checkMood(callback) {
    callback();
}

function cry() {
    console.log("boohoo!");
}

function sing() {
    console.log("la la la!");
}

function dance() {
    console.log("hokey pokey!");
}

checkMood(dance); // boohoo!

/* -------------------- 객체 리터럴 -------------------- */
let person = {
    name: "John",
    age: 32,
    partTime: false,
    showInfo: function() {
        console.log(`${this.name} - ${this.age}`);
    }
};

let getPropertyValue = (key) => {
    return person[key];
}

console.log(getPropertyValue("name")); // John
console.log(person.name); // John

person.location = "Seoul"; // 객체에 프로퍼티 추가
console.log(getPropertyValue("location")); // Seoul

delete person.location; // 객체에 프로퍼티 삭제 (메모리에서 삭제되지 않음)
console.log(getPropertyValue("location")); // undefined

person.location = null; // 객체에 프로퍼티 값 null 할당)
console.log(getPropertyValue("location")); // null


/* -------------------- 객체 순회 -------------------- */
let test = {
    name: "John",
    age: 32,
    nickname: "Johnny",
};

const keys = Object.keys(test); // 객체의 키 배열 반환
const values = Object.values(test); // 객체의 값 배열 반환
for (let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]} : ${values[i]}`);
}

/* -------------------- 배열 내장 함수 -------------------- */
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [{name: "John", age: 32}, {name: "Jane", age: 28}];
let arr3 = [3, 9, 2, 8, 6, 29, 10];
let arrWithForEach = [];
let arrWithMap = [];

arr1.forEach(elm => {arrWithForEach.push(elm * 2)}); // 배열 순회
console.log(arrWithForEach); // [2, 4, 6, 8, 10]

arrWithMap = arr1.map(elm => {return elm * 3}); // 배열 순회 후 새로운 배열 반환
console.log(arrWithMap); // [3, 6, 9, 12, 15]

console.log(arrWithMap.includes(9)); // true

console.log(arrWithMap.indexOf(9)); // 2

console.log(arr2.findIndex(elm => {return elm.name === "Jane"})); // findIndex() 함수는 조건에 맞는 요소의 인덱스를 반환

console.log(arr2.find(elm => {return elm.name === "Jane"})); // find() 함수는 조건에 맞는 요소를 반환

console.log(arr2.filter(elm => {return elm.age > 30})); // filter() 함수는 조건에 맞는 요소를 배열로 반환

console.log(arr1.slice(0, 3)) // slice() 함수는 배열의 일부를 반환

console.log(arr1.concat(arr2)); // concat() 함수는 배열을 합침

console.log(arr3.sort()); // sort() 함수는 사전 순으로 정렬

const compare = (a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
}

console.log(arr3.sort(compare)); // sort() 함수는 배열을 정렬

console.log(arr3.join(" ")); // join() 함수는 배열을 문자열로 반환
