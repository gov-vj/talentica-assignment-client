function setDefaultValue() {
  return { type: "SET_LOGIN_FORM_DEFAULT_VAL" };
}

function setIsAuthenticatedValue(isVerified) {
  return { type: "SET_IS_AUTHENTICATED_VALUE", isVerified };
}

export function setFormValue(key, value) {
  return { type: "SET_LOGIN_FORM_VAL", key, value };
}

export function login(email, password) {
  return async function (dispatch) {
    try {
      const res = await fetch("http://localhost:8080/activity/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const isVerified = (await res.json()).status;
      if (!isVerified) {
        alert("Invalid credentials");
        return;
      }

      dispatch(setDefaultValue());
      return dispatch(setIsAuthenticatedValue(true));
    } catch (error) {
      console.log(error);
    }
  };
}
