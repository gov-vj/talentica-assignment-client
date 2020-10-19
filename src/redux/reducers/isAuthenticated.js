export default function isAuthenticated(state = false, action) {
  switch (action.type) {
    case "SET_IS_AUTHENTICATED_VALUE":
      return action.isVerified;
    default:
      return state;
  }
}
