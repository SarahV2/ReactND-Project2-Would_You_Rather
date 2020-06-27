import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleLogout } from '../actions/currentUser'

class NavigationMenu extends Component {



    logout = (e) => {
        e.preventDefault()
        this.props.dispatch(handleLogout())
    }

    render() {
        const { currentUser } = this.props
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                 <NavLink to='/'><p className='gameTitle'>Would You Rather</p></NavLink>
                <Nav className="mr-auto">
                    <nav className='nav'>
                        <ul>
                            <li>
                                <NavLink to='/' exact activeClassName='active'>Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to='/leaderboard' activeClassName='active'>Leaderboard</NavLink>
                            </li>
                            <li>
                                <NavLink to='/add' activeClassName='active'>New Question</NavLink>
                            </li>


                        </ul>


                   


                    </nav>


                </Nav>
              
                {this.props.currentUser ? <div className='currentUser'>
                                    <img src={currentUser.avatarURL} className='miniImage' alt='current user avatar' />
                                    <p className='userInfo' onClick={this.logout}>Hello, {currentUser.name} <NavLink className='loginLink' to='/login'>(Logout)</NavLink></p></div> :
                                    <NavLink to='/login'><p className='userInfo loginButton'>Login</p></NavLink>}


            </Navbar>
        )
    }

}

function mapStateToProps(state) {
    const { currentUser } = state
    return {
        currentUser

    }
}
export default connect(mapStateToProps)(NavigationMenu)