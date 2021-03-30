export const reducer = (state, action) => {
  switch (action.type) {
    case "handleChange":
      return {
        ...state,
        [action.payload.target.id]: action.payload.target.value,
      };

    case "setToken":
      return { ...state, token: action.payload };

    case "setUserId":
      return { ...state, userId: action.payload };

    case "setUserPasswordNull":
      return { ...state, userPassword: "" };

    case "setDecodedValues": {
      const decodedVal = action.payload;
      return {
        ...state,
        userId: decodedVal.id,
        userName: decodedVal.username,
      };
    }
    case "toggleLoading":
      return { ...state, isLoading: action.payload };

    case "setUserEmail":
      return { ...state, userEmail: action.payload };

    default:
      return state;
  }
};
