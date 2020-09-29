import React, { useState } from 'react';

const App = () => {
   //配列を返し、二つの配列を返す。
   //名前の付け方は、一つ目がxであれば、二つ目はそれを設定できる意味合いを込めてsetXとする。
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  const double = () => setCount( count * 2 )
  //if文を使うと長くなるので、単純な演算処理は三項演算子でできないか考える
  const divideThree = () => setCount( count%3 === 0 ? count/3 : count )

  return (
    //React.Fragmentは消しても問題ない。
    <>
      <div>count: {count}</div>
      {/* <button onClick={increment}>+1</button> */}
      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={double}>x2</button>
      <button onClick={divideThree}>divide by 3</button>
    </>
  );
}

export default App;
