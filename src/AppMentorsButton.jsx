import React, { memo, useCallback, useMemo, useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  }, []);

  const handleCreate = useCallback(() => {
    const name = prompt("멘토의 이름은?");
    const title = prompt("멘토의 포지션은?");
    dispatch({ type: "created", name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`누구를 삭제하고 싶으신가요?`);
    dispatch({ type: "deleted", name });
  }, []);
  return (
    <div>
      <h1>
        {person.name}은(는) {person.title}
      </h1>
      <p> {person.name}의 멘토는 : </p>
      <ul>
        {person.mentors.map((mentors, index) => (
          <li key={index}>
            {mentors.name} ({mentors.title})
          </li>
        ))}
      </ul>
      <Button text="멘토 이름 바꾸기" onClick={handleUpdate} />
      <Button text="멘토 추가하기" onClick={handleCreate} />
      <Button text="멘토 삭제하기" onClick={handleDelete} />
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
  console.log("Button", text, "re-rendering");
  const result = useMemo(() => calculateSometing(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

const initialPerson = {
  name: "준영",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "백엔드개발자",
    },
  ],
};

const calculateSometing = () => {
  for (let i = 0; i < 10000; i++) {
    console.log("qwe");
  }
  return 10;
};
