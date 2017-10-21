import { firestore } from "firebase";
const fs = firestore();

export const sendMessage = messageText => async (dispatch, getState) => {
  const { displayName, uid } = getState().user;
  const sentAt = Date.now();
  const messageBlock = {
    text: messageText,
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
