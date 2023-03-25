export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((value) => {
          if (value.name === prev) {
            return { ...value, name: current };
          }
          return value;
        }),
      };
    }
    case "created": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case "deleted": {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((v) => v.name !== name),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입입니다 : ${action.type}`);
    }
  }
}
