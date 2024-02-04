import "./App.css";
import MyHeader from "./MyHeader";
import Myfooter from "./MyFooter";
import Counter from "./counter";
import Container from "./container";

function App() {
  return (
    <Container>
      <div className="App">
        <Counter initialCount={50} />
      </div>
    </Container>
    // Container 컴포넌트로 감싸준다. (props.children을 사용하기 위해)
    // Counter props로 initialCount를 전달한다.
  );
}

export default App;
