export const InitialState = {
  userToken: "",
};
export const NavigationReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "Authentication":
      return {
        ...state,
        userToken: action.payload,
      };
    case "Home":
      return {
        ...state,
        userToken: action.payload,
      };
    case "signOut":
      return {
        ...state,
        userToken: "",
      };
    default:
      return state;
  }
};
