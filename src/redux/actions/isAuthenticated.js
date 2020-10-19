function setIsAuthenticatedValue(isVerified) {
  return { type: "SET_IS_AUTHENTICATED_VALUE", isVerified };
}

export function isAuthenticated() {
  return async function (dispatch) {
    try {
      const res = await fetch(
        "http://localhost:8080/activity/isAuthenticated",
        {
          credentials: "include",
        }
      );

      const isVerified = (await res.json()).status;
      return dispatch(setIsAuthenticatedValue(isVerified));
    } catch (error) {
      console.log(error);
    }
  };
}
