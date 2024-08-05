import React, {useState} from 'react'

function Counter2() {
    const [number, setNumber] = useState(0);

    const click2 = () => {
        setNumber(number+2)
      };
    
      // -1 버튼 클릭 시 숫자가 1씩 감소
      const click1 = () => {
        setNumber(number-1)
      };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={click2}>+2</button>
      <button onClick={click1}>-1</button>
    </div>
  )
}

export default Counter2
