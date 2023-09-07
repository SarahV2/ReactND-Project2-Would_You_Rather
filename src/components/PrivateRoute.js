import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'

// TODO: Fix private routes
const PrivateRoute = ({ component: Component, currentUser, ...rest }) => (
    <Routes>
    <Route {...rest} render={props => !currentUser ? (<LoginPage replace />) :
        (<Component {...props} />)} />
        </Routes>
)

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(PrivateRoute)
