import React, { Component } from "react";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Components
import Loader from "../../components/Loader/Loader";

// Redux Actions
import login from "../../actionCreators/login.js";

// Styles
import "./Login.css";

class LoginPage extends Component {
  componentDidMount = () => {
    if (!this.props.user.uid) this.props.login(this.props.history);
  };

  render() {
    const user = this.props.user.uid ? this.props.user : {};
    return (
      <div className="login-page">
        <Loader />
        {user.uid && (
          <div className="account-data">
            <img src={user.photoURL} alt="" />
            <h3>{user.displayName}</h3>
            <span>{user.email}</span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
