const defaultState = {
  email: "",
  password: "",
};

export default function login(state = defaultState, action) {
  switch (action.type) {
    case "SET_LOGIN_FORM_VAL":
      return { ...state, [action.key]: action.value };
    case "SET_LOGIN_FORM_DEFAULT_VAL":
      return defaultState;
    default:
      return state;
  }
}
