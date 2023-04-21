import React from "react";

type PropsType = {
  date: Date;
};
const formatTime = (number: number) => {
  return number < 10 ? "0" + number : number;
};
const Digital = ({ date }: PropsType) => {
  const hours = formatTime(date.getHours());
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());
  return (
    <div>
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
};

export default Digital;
