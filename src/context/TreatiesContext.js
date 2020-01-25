import createDataContext from "./createDataContext";

const treaties = [
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #1",
    type: "applied"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #2",
    type: "applied"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #3",
    type: "applied"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #4",
    type: "applied"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #5",
    type: "available"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #6",
    type: "available"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #7",
    type: "available"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #8",
    type: "available"
  }
];

const treatyReducer = (state, action) => {
  switch (action.type) {
    case "add_treaty":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          name: `Treaty #${state.length + 1}`,
          type: "applied"
        }
      ];
    default:
      return state;
  }
};

const addTreaty = dispatch => {
  return () => {
    dispatch({ type: "add_treaty" });
  };
};
export const { Context, Provider } = createDataContext(
  treatyReducer,
  { addTreaty },
  [...treaties]
);
