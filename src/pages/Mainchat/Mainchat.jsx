import React, { Component } from "react";

import values from "lodash/values";

import "./Mainchat.css";

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
    text: "sdkjmansdkbaksf,zhncskd,mznfxklw,sdbzfxkvj,mrsbndlvk.,sjdmzlcksndz cklsdnzSup!!",
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

export default class Homepage extends Component {
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

    // Add this to firebase listener
    //  this.setState({ scrolling: false });

    setInterval(() => {
      if (!this.state.scrolling)
        // this.messageWrap.scrollTop = this.messageWrap.scrollHeight;
        scrollTo(this.messageWrap, this.messageWrap.scrollHeight, 300);
    }, 300);
  };

  renderMessage = (msg, i) => (
    <div
      key={i}
      className={`chat-snap ${msg.sender.name !== "me" ? `recieved` : ``}`}
    >
      <strong>{msg.sender.name}</strong>
      <span>{msg.text}</span>
    </div>
  );

  _sendChat = e => {
    e.preventDefault();
    const messageText = this.refs.chatInput.value;
    const messages = { ...this.state.messages };

    this.setState({ scrolling: false });

    messages[new Date()] = {
      text: messageText,
      sender: { name: "me" },
      timestamp: new Date()
    };

    this.setState({ messages });
    this.refs.chatForm.reset();
  };

  render() {
    return (
      <div className="main-chat-page">
        <div ref="messageWrap" className="message-wrap">
          {values(this.state.messages).map(this.renderMessage)}
        </div>
        <form className="chat-input" ref="chatForm" onSubmit={this._sendChat}>
          <input
            type="text"
            ref="chatInput"
            placeholder="Type your message here . . ."
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
