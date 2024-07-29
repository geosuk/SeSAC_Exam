import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <ClassComponent name = "SeSAC 6기"/>
      <hr />
      <FunctionComponent />
      <FunctionComponent name = "SeSAC 6기" />
    </div>
  );
}

export default App;


// TMI
// 리엑트 18부터, React.StricMode가 기보적으로 활성화가 된다.
// 이는 개발 모드에서 컴포넌트의 렌더링과 라이플사이클(생명주기) 메서드가 두 번 호출 되도록 해서
// 부작용을 테스트하고 식별하는 데 도움을 준다.
// 이로 인해서 console.log가 두 번 찍힐 수 있다.
