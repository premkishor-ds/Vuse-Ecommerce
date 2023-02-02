//create counter in react js?
import React,{useState} from "react";

interface IState {
  count: number;
}



export default function Counter(): JSX.Element {
 const [count, setCounter] = useState(0);
const state: IState = { count: 0 };

const increment = (): any => {
  console.log(state);
     setCounter(count+1);


};

const decrement = (): any => {
  console.log(state);
  setCounter(count -1);

};
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <div key={count}>{count}</div>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}




