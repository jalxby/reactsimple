import React, { FC } from "react";

type CircleType = {
  style: string;
};
const Circle: FC<CircleType> = (props) => {
  return (
    <div>
      <span className={props.style}></span>
    </div>
  );
};

export default Circle;
