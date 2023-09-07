import React, { Component } from 'react';
import { getInitialQuestions } from '../actions/questions';
import { getUsers } from '../actions/users'
import { connect } from 'react-redux'
import LoginPage from './LoginPage';
import NavigationMenu from './NavigationMenu'
import { Route, Routes } from 'react-router-dom'
import Questions from './Questions'
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import Poll from './Poll';
import PrivateRoute from './PrivateRoute'
import NotFound from './NotFound';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getInitialQuestions())
    this.props.dispatch(getUsers())
  }
  render() {
    return (
      <div className="App" >
        <NavigationMenu />
        <Routes>
          <Route path='/login' component={LoginPage} />
          <PrivateRoute path='/' component={Questions} />
          <PrivateRoute path='/leaderboard' component={Leaderboard} />
          <PrivateRoute path='/add' component={NewQuestion} />
          <PrivateRoute path='/questions/:question_id' component={Poll} />
          <Route component={NotFound} />
        </Routes>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { currentUser, questions, users } = state
  return {
    currentUser,
    users,
    questions
  }
}

export default connect(mapStateToProps)(App);