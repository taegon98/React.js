import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

// props로 initialCount를 받아서 초기값을 설정해준다.
const Counter = (props) => {
  const [count, set] = useState(props.initialCount);
  // useState를 사용하여 count를 상태로 관리한다.
  // useState: 상태를 관리하는 함수로, 상태를 변경할 때 사용한다.
  // 매개변수로 초기값을 전달하고, 비구조화 할당을 사용하여 배열을 반환한다. (배열의 첫 번째 요소는 상태, 두 번째 요소는 상태를 변경할 수 있는 함수)
  const onIncrease = () => {
    set(count + 1);
  };

  const onDecrease = () => {
    set(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count} />
    </div>
    // 버튼을 클릭하면 onIncrease, onDecrease 함수가 실행되고 count가 증가, 감소한다.
    // OddEvenResult 컴포넌트에 count를 props로 전달한다.
  );
};

// defaultProps로 initialCount를 0으로 설정해준다.
Counter.defaultProps = {
  initialCount: 0,
};

export default Counter;
