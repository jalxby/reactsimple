import React, { useCallback, useMemo, useState } from "react";

export default {
  title: "useMemo",
};

export const ExampleWithHeavyCounting = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
        const fakeValue = Math.random();
      }
      tempA = tempA * i;
    }
    return tempA;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <>
      <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <hr />
      <div>result for A:{resultA}</div>
      <div>result for B:{resultB}</div>
    </>
  );
};

const Users = (props: { users: Array<string> }) => {
  console.log("Rendering users");
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const UsersMemoWrapper = React.memo(Users);

export const ReactMemoHelping = () => {
  console.log("Rendering ReactMemoHelping");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(["Alexander", "Valery", "Ja"]);
  const addUser = () => setUsers([...users, "Sveta " + new Date()]);

  const filteredUsers = useMemo(() => {
    return users.filter((u) => u.toLowerCase().indexOf("a") > -1);
  }, [users]);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={addUser}>add user</button>
      {count}
      <UsersMemoWrapper users={filteredUsers} />
    </>
  );
};

export const LikeUseCallback = () => {
  console.log("LikeUseCallback rendering");
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState(["React", "JS", "Redux"]);

  const addBook = () => setBooks([...books, "Angular " + new Date()]);
  const useMemoExample = useCallback(() => {
    addBook();
  }, [books]);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>

      {count}
      <Book addBook={useMemoExample} />
    </>
  );
};

const BookSecret = (props: { addBook: () => void }) => {
  debugger;
  console.log("BooksSecret rendering");
  return (
    <>
      <button onClick={props.addBook}>add book</button>
    </>
  );
};

const Book = React.memo(BookSecret);
