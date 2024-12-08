import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => {
  return !currentUser ? (
    <Navigate to="/login" replace />
  ) : (
    <Component {...rest} />
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(PrivateRoute);
