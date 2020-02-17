import createDataContext from "./createDataContext";

const appliedTreaties = [
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #1",
    number: "ABCAU",
    treatyType: "Catastrophe",
    currency: "British Pound (GBP)",
    perRiskLimit: "-",
    occuranceLimit: "5,000,000",
    attachmentPoint: "10,000,000",
    attachmentBasis: "Losses Occuring",
    lineOfBusiniess: "Commercial",
    cedant: "ABC Insurance",
    type: "applied"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #2",
    number: "ABCAU",
    treatyType: "Catastrophe",
    currency: "British Pound (GBP)",
    perRiskLimit: "-",
    occuranceLimit: "5,000,000",
    attachmentPoint: "10,000,000",
    attachmentBasis: "Losses Occuring",
    lineOfBusiniess: "Commercial",
    cedant: "ABC Insurance",
    type: "applied"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #3",
    number: "ABCAU",
    treatyType: "Catastrophe",
    currency: "British Pound (GBP)",
    perRiskLimit: "-",
    occuranceLimit: "5,000,000",
    attachmentPoint: "10,000,000",
    attachmentBasis: "Losses Occuring",
    lineOfBusiniess: "Commercial",
    cedant: "ABC Insurance",
    type: "applied"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #4",
    number: "ABCAU",
    treatyType: "Catastrophe",
    currency: "British Pound (GBP)",
    perRiskLimit: "-",
    occuranceLimit: "5,000,000",
    attachmentPoint: "10,000,000",
    attachmentBasis: "Losses Occuring",
    lineOfBusiniess: "Commercial",
    cedant: "ABC Insurance",
    type: "applied"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #5",
    number: "ABCAU",
    treatyType: "Catastrophe",
    currency: "British Pound (GBP)",
    perRiskLimit: "-",
    occuranceLimit: "5,000,000",
    attachmentPoint: "10,000,000",
    attachmentBasis: "Losses Occuring",
    lineOfBusiniess: "Commercial",
    cedant: "ABC Insurance",
    type: "applied"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #6",
    number: "ABCAU",
    treatyType: "Catastrophe",
    currency: "British Pound (GBP)",
    perRiskLimit: "-",
    occuranceLimit: "5,000,000",
    attachmentPoint: "10,000,000",
    attachmentBasis: "Losses Occuring",
    lineOfBusiniess: "Commercial",
    cedant: "ABC Insurance",
    type: "applied"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #7",
    number: "ABCAU",
    treatyType: "Catastrophe",
    currency: "British Pound (GBP)",
    perRiskLimit: "-",
    occuranceLimit: "5,000,000",
    attachmentPoint: "10,000,000",
    attachmentBasis: "Losses Occuring",
    lineOfBusiniess: "Commercial",
    cedant: "ABC Insurance",
    type: "applied"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #8",
    number: "ABCAU",
    treatyType: "Catastrophe",
    currency: "British Pound (GBP)",
    perRiskLimit: "-",
    occuranceLimit: "5,000,000",
    attachmentPoint: "10,000,000",
    attachmentBasis: "Losses Occuring",
    lineOfBusiniess: "Commercial",
    cedant: "ABC Insurance",
    type: "applied"
  }
];

const availableTreaties = [
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #9",
    number: "ABCAU",
    treatyType: "Catastrophe",
    currency: "British Pound (GBP)",
    perRiskLimit: "-",
    occuranceLimit: "5,000,000",
    attachmentPoint: "10,000,000",
    attachmentBasis: "Losses Occuring",
    lineOfBusiniess: "Commercial",
    cedant: "ABC Insurance",
    type: "available"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #10",
    number: "ABCAU",
    treatyType: "Catastrophe",
    currency: "British Pound (GBP)",
    perRiskLimit: "-",
    occuranceLimit: "5,000,000",
    attachmentPoint: "10,000,000",
    attachmentBasis: "Losses Occuring",
    lineOfBusiniess: "Commercial",
    cedant: "ABC Insurance",
    type: "available"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #11",
    number: "ABCAU",
    treatyType: "Catastrophe",
    currency: "British Pound (GBP)",
    perRiskLimit: "-",
    occuranceLimit: "5,000,000",
    attachmentPoint: "10,000,000",
    attachmentBasis: "Losses Occuring",
    lineOfBusiniess: "Commercial",
    cedant: "ABC Insurance",
    type: "available"
  },
  {
    id: Math.floor(Math.random() * 999999),
    name: "Treaty #12",
    number: "ABCAU",
    treatyType: "Catastrophe",
    currency: "British Pound (GBP)",
    perRiskLimit: "-",
    occuranceLimit: "5,000,000",
    attachmentPoint: "10,000,000",
    attachmentBasis: "Losses Occuring",
    lineOfBusiniess: "Commercial",
    cedant: "ABC Insurance",
    type: "available"
  }
];

const selectedTreaties = [];

const treatyReducer = (state, action) => {
  switch (action.type) {
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
    case "select_all_treaties":
      return {
        ...state,
        selectedTreaties: [...action.payload],
        allSelected: true
      };
    case "clear_selected_treaties":
      return {
        ...state,
        selectedTreaties: [],
        allSelected: false
      };
    case "update_selected_treaties":
      let appliedTreaties = [...state.appliedTreaties];
      let availableTreaties = [...state.availableTreaties];

      action.payload.forEach(treaty => {
        if (treaty.type === "applied") {
          appliedTreaties = appliedTreaties.filter(
            appliedTreaty => appliedTreaty.id !== treaty.id
          );
          availableTreaties = [
            ...availableTreaties,
            { ...treaty, type: "available", selected: false }
          ];
        } else {
          availableTreaties = availableTreaties.filter(
            availableTreaty => availableTreaty.id !== treaty.id
          );
          appliedTreaties = [
            ...appliedTreaties,
            { ...treaty, type: "applied", selected: false }
          ];
        }
      });
      return {
        ...state,
        availableTreaties,
        appliedTreaties,
        selectedTreaties: [],
        allSelected: false
      };
    default:
      return state;
  }
};

const selectTreaty = dispatch => {
  return treaty => {
    dispatch({ type: "select_treaty", payload: treaty });
  };
};

const selectAllTreaties = dispatch => {
  return treaties => {
    dispatch({ type: "select_all_treaties", payload: treaties });
  };
};

const clearSelectedTreaties = dispatch => {
  return () => {
    dispatch({ type: "clear_selected_treaties" });
  };
};

const updateSelectedTreaties = dispatch => {
  return treaties => {
    dispatch({ type: "update_selected_treaties", payload: treaties });
  };
};

export const { Context, Provider } = createDataContext(
  treatyReducer,
  {
    selectTreaty,
    selectAllTreaties,
    clearSelectedTreaties,
    updateSelectedTreaties
  },
  { appliedTreaties, availableTreaties, selectedTreaties, allSelected: false }
);
