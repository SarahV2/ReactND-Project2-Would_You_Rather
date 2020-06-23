import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
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
                <p className='gameTitle'>Would You Rather</p>
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
                                <NavLink to='/new' activeClassName='active'>New Question</NavLink>
                            </li>
                        </ul>
                    </nav>

                </Nav>

                <Nav>
                    <nav className='nav'>
                        {this.props.currentUser ?
                           <p className='userInfo'onClick={this.logout}onClick={this.logout}>Hello, {currentUser.name} <NavLink to='/'>(Logout)</NavLink></p> :
                            <NavLink to='/login'><p className='userInfo'>Login</p></NavLink>
                        }
                    </nav>
                </Nav>

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