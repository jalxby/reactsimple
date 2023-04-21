import React, { useEffect, useState } from "react";
import Digital from "./Digital";
import Analog from "./Analog";

type PropsType = {
  mode?: "digital" | "analog";
};

const Clock = (props: PropsType) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {props.mode === "digital" ? (
        <Digital date={date} />
      ) : (
        <Analog date={date} />
      )}
    </>
  );
};
export default Clock;
