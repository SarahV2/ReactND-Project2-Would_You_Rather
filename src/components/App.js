import React, { Component } from 'react';
import { getInitialQuestions } from '../actions/questions';
import { getUsers } from '../actions/users'
import { connect } from 'react-redux'
import LoginPage from './LoginPage';
import NavigationMenu from './NavigationMenu'
import {Route,Switch } from 'react-router-dom'
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
    console.log("Welcome")
    console.log(this.props)
  }
  render() {
    //const { currentUser, users, questions } = this.props
    //console.log(users)
    // if (currentUser===undefined) {
    //   return <Redirect to='/login' />

    // }
    //console.log(this.props)
    return (
      <div className="App" >
        <NavigationMenu />
        {/* <LoginPage /> */}
        {/* <Route path='/' exact component={Questions} /> */}
        <Switch>
        <Route path='/login' component={LoginPage} />
        <PrivateRoute exact path='/' component={Questions} />
        <PrivateRoute path='/leaderboard' component={Leaderboard} />
        <PrivateRoute path='/add' component={NewQuestion} />
        <PrivateRoute path='/questions/:question_id' component={Poll} />
        <Route component={NotFound}/>
        </Switch>
        {/* <LoginPage /> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { currentUser, questions, users } = state
  return {
    //loading: authedUser === null
    currentUser,
    users,
    questions
  }
}

export default connect(mapStateToProps)(App);
