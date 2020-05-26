const initialState = {
  count: 9,
};

const counter = (state = initialState, action) => {
  console.log(state);
  
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counter;
