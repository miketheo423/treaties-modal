import createDataContext from "./createDataContext";

const appliedTreaties = [
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
  }
];

const availableTreaties = [
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

const selectedTreaties = [];

const treatyReducer = (state, action) => {
  switch (action.type) {
    // case "remove_treaty":
    //   if(action.payload)
    //   return {
    //     ...state,
    //     ...{
    //       id: Math.floor(Math.random() * 999999),
    //       name: `Treaty #${state.length + 1}`,
    //       type: action.payload
    //     }
    //   };
    case "select_treaty":
      if (
        state.selectedTreaties.some(treaty => {
          return treaty.id === action.payload.id;
        })
      ) {
        return {
          ...state,
          selectedTreaties: state.selectedTreaties.filter(
            treaty => treaty.id !== action.payload.id
          )
        };
      } else {
        return {
          ...state,
          selectedTreaties: [...state.selectedTreaties, action.payload]
        };
      }
    case "clear_selected_treaties":
      return {
        ...state,
        selectedTreaties: []
      };
    default:
      return state;
  }
};

// const removeTreaty = dispatch => {
//   return treaty => {
//     dispatch({ type: "remove_treaty", payload: treatyId });
//   };
// };

const selectTreaty = dispatch => {
  return treaty => {
    dispatch({ type: "select_treaty", payload: treaty });
  };
};

const clearSelectedTreaties = dispatch => {
  return () => {
    dispatch({ type: "clear_selected_treaties" });
  };
};

export const { Context, Provider } = createDataContext(
  treatyReducer,
  { selectTreaty, clearSelectedTreaties },
  { appliedTreaties, availableTreaties, selectedTreaties }
);
