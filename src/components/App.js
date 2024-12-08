import React, { Component } from "react";
import { getInitialQuestions } from "../actions/questions";
import { getUsers } from "../actions/users";
import { connect } from "react-redux";
import NavigationMenu from "./NavigationMenu";
import { Outlet } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialQuestions());
    this.props.dispatch(getUsers());
  }
  render() {
    return (
      <div className="App">
        <NavigationMenu />
        <main>
          <Outlet />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentUser, questions, users } = state;
  return {
    currentUser,
    users,
    questions,
  };
};

export default connect(mapStateToProps)(App);
