import React, { useMemo, useState } from "react";
import { Select } from "../components/Select/Select";
import { v1 } from "uuid";

export default {
  title: "UseMemoSelect",
  component: Select,
};

const cities = [
  { value: v1(), title: "Minsk", population: 10000 },
  { value: v1(), title: "Grodno", population: 10000460 },
  { value: v1(), title: "Toronto", population: 345 },
  { value: v1(), title: "NewYork", population: 10002350 },
  { value: v1(), title: "Amsterdam", population: 10065400 },
  { value: v1(), title: "Warsaw", population: 1050 },
  { value: v1(), title: "Poznan", population: 100600 },
  { value: v1(), title: "Berlin", population: 1000 },
];

const filteredNoELetter = cities.filter((el) => el.title.indexOf("e") > -1);
const filteredPopulation = cities.filter((el) => el.population > 10000);
const sorted = cities
  .map((el) => ({ ...el }))
  .sort((a, b) => (a.title > b.title ? 1 : -1));

const FilteredLetter = () => {
  console.log("FilteredLetter rendering");
  const [value, setValue] = useState(filteredNoELetter[0].value);
  return (
    <>
      <Select onChange={setValue} value={value} items={filteredNoELetter} />
    </>
  );
};

const FilteredPopulation = () => {
  console.log("FilteredPopulation rendering");
  const [value, setValue] = useState(filteredPopulation[0].value);
  return (
    <>
      <Select onChange={setValue} value={value} items={filteredPopulation} />
    </>
  );
};

const Sorted = () => {
  console.log("Sorted rendering");
  const [value, setValue] = useState(sorted[0].value);
  return (
    <>
      <Select onChange={setValue} value={value} items={sorted} />
    </>
  );
};

export const UnionSelected = () => {
  console.log("UnionSelected");
  const [counter, setCounter] = useState(0);
  const selects = useMemo(() => {
    return (
      <>
        <FilteredLetter />
        <FilteredPopulation />
        <Sorted />
      </>
    );
  }, [cities]);
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => counter + 1}>+</button>
      {counter}
      {selects}
    </>
  );
};

// () => setUsers([...users, 'Sveta ' + new Date()])
