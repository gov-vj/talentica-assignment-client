const defaultState = {
  name: "",
  email: "",
  mobile: "",
};

export default function registration(state = defaultState, action) {
  const { name, email, mobile } = action;
  switch (action.type) {
    case "SET_USER_INFO":
      return { name, email, mobile };
    case "RESET_USER_INFO":
      return defaultState;
    default:
      return state;
  }
}
