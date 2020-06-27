import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'

const PrivateRoute = ({component: Component, currentUser, ...rest}) => (
<Route {...rest} render={props=>!currentUser?(<Redirect to={{
    pathname: '/login',
    state: { previousPath: props.location.pathname }
}} />):
(<Component {...props}/>)}/>
)

const mapStateToProps=state=>({
    currentUser: state.currentUser
})

export default connect(mapStateToProps) (PrivateRoute)
