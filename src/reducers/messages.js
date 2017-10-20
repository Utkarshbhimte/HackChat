export default (messages = {}, { type, newData }) => {
  switch (type) {
    case "UPDATE_MESSAGES":
      return newData;
    default:
      return messages;
  }
};
