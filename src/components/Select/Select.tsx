import React, { KeyboardEvent, useEffect, useState } from "react";
import s from "./Select.module.css";

type ItemType = {
  title: string;
  value: any;
};

type SelectPropsType = {
  value?: any;
  onChange: (value: any) => void;
  items: ItemType[];
};

export const Select = (props: SelectPropsType) => {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(props.value);
  // const [indexForArrows, setIndexForArrows] = useState(Number(props.value))
  const selectedItem = props.items.find((i) => i.value === props.value);
  const hoveredItem = props.items.find((i) => i.value === hovered);
  const setActiveWrapper = () => setActive(!active);
  const onClickElementWrapper = (value: any) => {
    props.onChange(value);
    setActiveWrapper();
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredItem?.value) {
          const nextElement =
            e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1];
          if (nextElement) {
            props.onChange(nextElement.value);
            return;
          }
        }
        props.onChange(props.items[0].value);
      }
    }
    if (e.key === "Escape") {
      setActive(false);
    }
    if (e.key === "Enter") {
      setActiveWrapper();
    }
  };

  useEffect(() => setHovered(props.value), [props.value]);
  return (
    <>
      {/*<select style={{marginBottom: '10px'}}>*/}
      {/*    <option value="">Minsk</option>*/}
      {/*    <option value="">Grodno</option>*/}
      {/*    <option value="">Gdansk</option>*/}
      {/*</select>*/}
      <div onKeyDown={onKeyPressHandler} className={s.select} tabIndex={0}>
        <span className={s.main} onClick={setActiveWrapper}>
          {selectedItem && selectedItem.title}
        </span>
        {active && (
          <div className={s.items} tabIndex={0}>
            {props.items.map((i) => {
              const itemClassName =
                s.item + " " + (hoveredItem === i ? s.selected : "");
              return (
                <div
                  onMouseEnter={() => setHovered(i.value)}
                  className={itemClassName}
                  key={i.value}
                  onClick={() => onClickElementWrapper(i.value)}
                >
                  {i.title}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

//export default Select;
