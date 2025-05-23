const initialState = {
  userInfo: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { userInfo: action.payload };
    case "LOGIN":
      return { userInfo: action.payload };
    case "LOGOUT":
      return { userInfo: null };
    default:
      return state;
  }
};

export default userReducer;

export const signup = (data) => ({
  type: "SIGNUP",
  payload: data,
});
export const login = (data) => ({
  type: "LOGIN",
  payload: data,
});

export const logout = () => ({
  type: "LOGOUT",
});
