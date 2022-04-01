import { DECRICOUNT, INCRICOUNT, RESETCOUNT } from "../action";

const InitialState = {
  count: 0,
};

const Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case INCRICOUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECRICOUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESETCOUNT:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default Reducer;
