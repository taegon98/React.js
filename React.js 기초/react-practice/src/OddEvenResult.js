const OddEvenResult = ({ count }) => {
  return (
    <div>
      <h2>결과</h2>
      {count % 2 === 0 ? <div>짝수</div> : <div>홀수</div>}
    </div>
    // props로 받은 count를 이용하여 홀수, 짝수를 판별한다.
  );
};

export default OddEvenResult;
