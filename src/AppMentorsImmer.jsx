import React from "react";
import { useImmer } from "use-immer";

export default function AppMentorsImmer() {
  //   const [person, setPerson] = useState(initialPerson);
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };

  const handleCreate = () => {
    const name = prompt("멘토의 이름은?");
    const title = prompt("멘토의 포지션은?");
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };

  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶으신가요?`);
    //updatePerson((person) => person.mentors.filter((v) => v !== name));
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
  };

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
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleCreate}>멘토 추가하기</button>
      <button onClick={handleDelete}> 멘토 삭제하기</button>
    </div>
  );
}

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
