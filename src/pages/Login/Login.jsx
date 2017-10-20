import React, { Component } from "react";

// Redux
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Redux Actions
// import * as actionCreators from "";

// Styles
import "./Login.css";

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <h3>Login Page</h3>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ ...actionCreators }, dispatch);
export default connect(mapStateToProps)(LoginPage);
