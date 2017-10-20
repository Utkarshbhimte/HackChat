export default (user = {}, { type, data, token }) => {
  switch (type) {
    case "ADD_USER_DATA": {
      localStorage.setItem("user_data", JSON.stringify(data));
      localStorage.setItem("token", JSON.stringify(token));
      return { ...data, token };
    }
    case "FINALIZE_USER_DATA": {
      localStorage.setItem("user_data", JSON.stringify(data));
      return { ...data, token, updated: true };
    }
    case "DELETE_USER_DATA": {
      localStorage.removeItem("user_data");
      return null;
    }
    default:
      return user;
  }
};
