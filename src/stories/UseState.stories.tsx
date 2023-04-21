import React, { useState } from "react";

export default {
  title: "useState demo",
};

function generateData() {
  //типа сложные вычисления
  console.log("generate data");
  return 123131124;
}

export const Example1 = () => {
  console.log("Example1");

  // const initValue = useMemo(generateData, []);

  const [counter, setCounter] = useState(generateData);
  const changer = (state: number) => {
    console.log(state + 1);
    return state + 1;
  };

  return (
    <>
      <button
        onClick={() => {
          setCounter(changer);
        }}
      >
        +
      </button>
      {counter}
    </>
  );
};
