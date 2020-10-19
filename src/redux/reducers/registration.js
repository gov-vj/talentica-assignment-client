const defaultState = {
  name: "",
  email: "",
  mobile: "",
  password: "",
};

export default function registration(state = defaultState, action) {
  switch (action.type) {
    case "SET_REG_FORM_VAL":
      return { ...state, [action.key]: action.value };
    case "SET_REG_FORM_DEFAULT_VAL":
      return defaultState;
    default:
      return state;
  }
}
