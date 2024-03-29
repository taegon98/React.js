/* -------------------- Truthy & Falsy -------------------- */
let getName1 = (person) => {
  if (!person) {
    return "Unknown";
  }
  return person.name;
};

let person1 = {
  name: "John",
  age: 32,
};

let person2 = "";

console.log(getName1(person1)); // John
console.log(getName1(person2)); // Unknown

/* -------------------- 삼항 연산자 -------------------- */
let arr1 = [];
let result =
  arr1.length === 0 ? "배열이 비어있습니다." : "배열이 비어있지 않습니다.";
console.log(result); // 배열이 비어있습니다.

/* -------------------- Short-circuit Evaluation -------------------- */
let getName2 = (person) => {
  const result = person && person.name;
  return result || "Unknown";
};

console.log(getName2(person1)); // John
console.log(getName2(person2)); // Unknown

/* -------------------- 비 구조화 할당 -------------------- */
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a); // 20
console.log(b); // 10

let { name: myName, age } = person1;
console.log(myName, age); // John 32

/* -------------------- Spread 연산자 -------------------- */
let cookie = {
  name: "cookie",
  price: 2000,
};

let strawberryCookie = {
  ...cookie,
  topping: "strawberry",
};

console.log(strawberryCookie); // { name: 'cookie', price: 2000, topping: 'strawberry' }

/* -------------------- 동기 / 비동기 -------------------- */

function taskA(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 3000)
  console.log("Task A finished");
}

taskA(10, 50, (result) => console.log(result));
console.log("The end");

/* -------------------- Promise -------------------- */
function taskB(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = a + b;
      if (result > 10) {
        resolve(result);
      } else {
        reject("Task B Error");
      }
    }, 3000)
  })
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = a * a;
    if (result > 3500) {
      resolve(a * a);
    }
    else {
      reject("Task C Error");
    }
  }, 3000)}
)}

taskB(2, 1).then((res) => {
    console.log(res);
    return taskC(res);
  }
).catch((res) => {
    console.log(res);
    return taskC(100);
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})

/* -------------------- async / await with fetch -------------------- */
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })

async function fetchComment() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
