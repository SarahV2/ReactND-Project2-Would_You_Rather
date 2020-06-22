import React, { Component } from 'react';
import { getInitialData } from '../actions/questions';
import { connect } from 'react-redux'
import LoginPage from './LoginPage';
import NavigationMenu from './NavigationMenu'
import Test from './Test';
class App extends Component {

  componentDidMount() {
    this.props.dispatch(getInitialData())
    console.log(this.props.store)
  }
  render() {
    return (
      <div className="App" >
        <NavigationMenu />
        {/* <LoginPage /> */}
        <Test />
      </div>
    )
  }
}

export default connect()(App);
