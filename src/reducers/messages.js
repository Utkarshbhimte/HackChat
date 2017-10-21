export default (state = {}, { type, messages }) => {
  switch (type) {
    case "UPDATE_MESSAGES":
      return { ...state, ...messages };
    default:
      return state;
  }
};
