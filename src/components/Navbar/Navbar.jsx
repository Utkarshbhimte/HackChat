import React from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <h3>DeverChat</h3>
    </nav>
  );
};

const mapStateToProps = ({ user }) => user;

export default withRouter(connect(mapStateToProps)(Navbar));
