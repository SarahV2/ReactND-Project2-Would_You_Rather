import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

export default function NavigationMenu() {

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

                    <p className='userInfo'>Hello, User <NavLink to='/logout'>(Logout)</NavLink></p>

                </nav>
            </Nav>

        </Navbar>
    )

}
