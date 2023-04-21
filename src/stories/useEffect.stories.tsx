import { useEffect, useState } from "react";

export default {
  title: "useEffect demo",
};

export const SimpleExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);

  console.log("SimpleExample");
  //useEffect - срабатывает только после отрисовки компоненты
  useEffect(() => {
    document.title = counter.toString();
    console.log("useEffect");
  }); //нет зависимости - срабатывает каждый раз

  useEffect(() => {
    document.title = counter.toString();
    console.log("useEffect");
  }, [counter]); //срабатывает, когда меняется зависимость [counter]

  useEffect(() => {
    document.title = counter.toString();
    console.log("useEffect");
  }, []); //срабатывает один раз когда компонента смонтирована

  return (
    <>
      Hello, {counter} Fake counter:{fake}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setFake(fake + 1)}>+</button>
    </>
  );
};
export const SetIntervalExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);

  console.log("SetInterval");
  // useEffect(() => {
  //   setTimeout(() => {
  //     document.title = counter.toString();
  //   }, 3000);
  // }, [counter]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCounter((state) => state + 1);
      return () => {
        clearInterval(intervalID);
      };
    }, 1000);
  }, []);

  return (
    <>
      counter: {counter} fake:{fake}
      <button onClick={() => setCounter(counter + 1)}>counter+</button>
      <button onClick={() => setFake(fake + 1)}>fake+</button>
    </>
  );
};

export const ResetUseEffectExample = () => {
  console.log("ResetUseEffectExample rendered");
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Effect done");
    return () => {
      console.log("RESET EFFECT" + counter);
    };
  }, [counter]);
  return (
    <>
      Hello, counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};

export const KeysTrackerExample = () => {
  const [text, setText] = useState("");
  console.log("KeysTrackerExample" + text);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key);
      setText(text + e.key);
    };
    window.document.addEventListener("keypress", handler);
    return () => {
      window.document.removeEventListener("keypress", handler);
    };
  }, [text]);

  return <>Typed text: {text}</>;
};

export const SetTimeoutExample = () => {
  const [text, setText] = useState("");
  console.log("Component render with" + text);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      console.log("TIMEOUT EXPIRED");
      setText("3 seconds passed");
    }, 4000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [text]);

  return <>text: {text}</>;
};
