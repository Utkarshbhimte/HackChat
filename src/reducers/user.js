export default (user = {}, { type, newData }) => {
  switch (type) {
    case "UPDATE_USER_DATA": {
      const login_time = new Date().toISOString();
      user = { ...user, ...newData };

      localStorage.setItem("user_data", JSON.stringify(user));
      localStorage.setItem("login_time", login_time);

      return user;
    }
    case "DELETE_USER_DATA": {
      localStorage.removeItem("user_data");
      return null;
    }
    default:
      return user;
  }
};
