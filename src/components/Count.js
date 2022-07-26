import React, { useState } from "react";
import "./App.css";
import "../style/count.css";

const Count = () => {
  const [count, setCount] = useState(5);

  // function for adding
  const increase = () => {
    setCount(count + 1);
  };

  //funtion for minus
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  //funtion reset
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2>Counting simple</h2>
      <div className="display_counter">
        <h3>{count}</h3>
      </div>
      <div className="display_add_minus">
         <button className="minus" onClick={decrease}>
           <span className="big_simbol"> -</span>
         </button>
         <button className="add" onClick={increase}>
            <span className="big_simbol"> + </span>
         </button>        
      </div>
      <div className="display_reset">
        <button className="reset" onClick={reset}>
        <span className="big_simbol"> reset</span>
        </button>
      </div>
    </div>
  );
};
export default Count;
