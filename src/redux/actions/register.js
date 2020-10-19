function setDefaultValue() {
  return { type: "SET_REG_FORM_DEFAULT_VAL" };
}

export function setFormValue(key, value) {
  return { type: "SET_REG_FORM_VAL", key, value };
}

export function submit(name, email, mobile, password) {
  return async function (dispatch) {
    try {
      let res = await fetch("http://localhost:8080/activity/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobile,
          password,
        }),
      });

      res = await res.json();
      alert(JSON.stringify(res));
      return dispatch(setDefaultValue());
    } catch (error) {
      console.log(error);
    }
  };
}
