import { firestore } from "firebase";
const fs = firestore();

export const sendMessage = (messageText, type) => async (
  dispatch,
  getState
) => {
  const { displayName, uid } = getState().user;
  const sentAt = Date.now();
  const messageBlock = {
    text: messageText,
    type: type || 'chat',
    sender: { displayName, uid },
    sentAt
  };

  const dbRef = fs.doc(`/chatroom/main`);
  await dbRef.update({ [sentAt]: messageBlock });
};

export const updateMessages = messages => ({
  type: "UPDATE_MESSAGES",
  messages
});
