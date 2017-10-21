import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import * as chatAction from "../../actionCreators/chatActions.js";

// Utils
import values from "lodash/values";

// Firebase
import { firestore } from "firebase";

// Styles
import "./Mainchat.css";

const fs = firestore();

const messages = {
  saddhj3b34323534: {
    text: "Hey!!",
    sender: { name: "Utkarsh" },
    timestamp: new Date()
  },
  saddhjsadas23534: {
    text: "Hey!!",
    sender: { name: "Utkarsh" },
    timestamp: new Date()
  },
  saddhj3b3kyunyy23534: {
    text: "Hey!!",
    sender: { name: "Utkarsh" },
    timestamp: new Date()
  },
  saddhj54r3qreb34323534: {
    text: "Hey!!",
    sender: { name: "Utkarsh" },
    timestamp: new Date()
  },
  df8gs987a534: {
    text: "Hey!!",
    sender: { name: "Utkarsh" },
    timestamp: new Date()
  },
  df8gs987a53i5l4: {
    text: "Hey!!",
    sender: { name: "me" },
    timestamp: new Date()
  },
  df8sadfs987a534: {
    text: "Sup!!",
    sender: { name: "me" },
    timestamp: new Date()
  },
  dfsadasd8sadfs987a534: {
    text:
      "sdkjmansdkbaksf,zhncskd,mznfxklw,sdbzfxkvj,mrsbndlvk.,sjdmzlcksndz cklsdnzSup!!",
    sender: { name: "me" },
    timestamp: new Date()
  },
  asjd0889a3534: {
    text: "Hey!!",
    sender: { name: "Utkarsh" },
    timestamp: new Date()
  }
};

const scrollTo = (element, to, duration) => {
  if (duration <= 0) return;

  const difference = to - element.scrollTop;
  const perTick = difference / duration * 10;

  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) {
      return;
    }
    scrollTo(element, to, duration - 10);
  }, 10);
};

class Mainchat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: messages,
      scrolling: false
    };
  }

  componentDidMount = () => {
    this.messageWrap = this.refs.messageWrap;

    this.messageWrap.addEventListener("scroll", () =>
      this.setState({ scrolling: true })
    );

    fs.doc(`/chatroom/main`).onSnapshot(async doc => {
      this.setState({ scrolling: false });
      this.props.updateMessages(doc && doc.data());
    });

    setInterval(() => {
      if (!this.state.scrolling)
        scrollTo(this.messageWrap, this.messageWrap.scrollHeight, 300);
    }, 300);
  };

  renderMessage = (msg, i) => {
    const myMessage =
      this.props.user.uid && this.props.user.uid === msg.sender.uid;
    if (msg.type && msg.type === "announcement")
      return (
        <div key={i} className="bar-msg">
          <p>{msg.text}</p>
          <span>- {msg.sender.displayName}</span>
        </div>
      );
    else
      return (
        <div key={i} className={`chat-snap ${!myMessage ? `recieved` : ``}`}>
          {!myMessage && <strong>{msg.sender.displayName}</strong>}
          <span>{msg.text}</span>
        </div>
      );
  };

  _sendChat = (e, type) => {
    if (e) e.preventDefault();
    const messageText = this.refs.chatInput.value;

    if (messageText !== "") this.props.sendMessage(messageText, type);

    this.refs.chatForm.reset();
  };

  _checkForUser = () => {
    if (!this.props.user.uid) this.props.history.push("/login");
  };

  render() {
    const messages = this.props.messages;
    return (
      <div className="main-chat-page">
        <div ref="messageWrap" className="message-wrap">
          {values(messages).length > 0 &&
            values(messages).map(this.renderMessage)}

          {values(messages).length === 0 && (
            <em className="stamp-chips">no messages yet</em>
          )}
        </div>
        <form
          className="chat-input"
          ref="chatForm"
          onSubmit={e => this._sendChat(e)}
        >
          <input
            type="text"
            ref="chatInput"
            placeholder="Type your message here . . ."
            onFocus={this._checkForUser}
          />
          <input type="submit" />
          {this.props.user &&
            this.props.user.type === "admin" && (
              <span
                role="img"
                aria-label="announcement"
                className="plus-button"
                onClick={() => this._sendChat(null, "announcement")}
              >
                📢
              </span>
            )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ user, messages }) => ({ user, messages });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...chatAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Mainchat);
