function resetUserInfo() {
  return { type: "RESET_USER_INFO" };
}

function setIsAuthenticatedValue(isVerified) {
  return { type: "SET_IS_AUTHENTICATED_VALUE", isVerified };
}

export function logout(email) {
  return async function (dispatch) {
    try {
      await fetch("http://localhost:8080/activity/logout", {
        credentials: "include",
      });

      dispatch(resetUserInfo());
      return dispatch(setIsAuthenticatedValue(false));
    } catch (error) {
      console.log(error);
    }
  };
}
