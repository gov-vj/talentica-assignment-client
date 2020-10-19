function setUserInfo(name, email, mobile) {
  return { type: "SET_USER_INFO", name, email, mobile };
}

export function getUserInfo() {
  return async function (dispatch) {
    try {
      const res = await fetch("http://localhost:8080/user/info", {
        credentials: "include",
      });

      const { name, email, mobile } = await res.json();
      return dispatch(setUserInfo(name, email, mobile));
    } catch (error) {
      console.log(error);
    }
  };
}
