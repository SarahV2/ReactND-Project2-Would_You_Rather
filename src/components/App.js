import React, { Component } from 'react';
import { getInitialData } from '../actions/questions';
import {getUsers} from '../actions/users'
import { connect } from 'react-redux'
import LoginPage from './LoginPage';
import NavigationMenu from './NavigationMenu'
import Test from './Test';
import { Redirect, Link, Route } from 'react-router-dom'
import Questions from './Questions'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getInitialData())
    this.props.dispatch(getUsers())
    console.log("Welcome")
    console.log(this.props)
  }
  render() {
    const { currentUser,users,questions } = this.props
    console.log(users)
    // if (currentUser===undefined) {
    //   return <Redirect to='/login' />

    // }
    console.log(this.state)
    return (
      <div className="App" >
        <NavigationMenu />
        {/* <LoginPage /> */}
        <Route path='/' exact component={Questions} />
        <Route path='/login' component={LoginPage} />
        {/* <LoginPage /> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {currentUser,questions,users}=state
  return {
    //loading: authedUser === null
    currentUser,
    users,
    questions
  }
}

export default connect(mapStateToProps)(App);
