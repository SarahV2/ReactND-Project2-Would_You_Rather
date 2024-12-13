import React from "react";
import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => {
  const location = useLocation();
  return !currentUser ? (
    <Navigate to="/login" replace state={{ previousPath: location.pathname }} />
  ) : (
    <Component {...rest} />
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(PrivateRoute);
