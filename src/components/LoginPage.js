import React, { Component } from 'react'
import { Container, Row, Col, Card, CardGroup, Button, DropdownButton, Dropdown, Form } from 'react-bootstrap'
import image from '../utils/avatars/00.png'
import { handleLogin } from '../actions/currentUser';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class LoginPage extends Component {

    state = {
        loggedIn: '',
        chosenUserID: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)

        this.setState({
            chosenUserID: e.target.value
        })

    }
    handleButtonClick = (e) => {
        const { chosenUserID } = this.state
        if (chosenUserID) {
            this.props.dispatch(handleLogin(chosenUserID))
            console.log(chosenUserID)
            this.setState({
                loggedIn: true
            })
        }

    }
    render() {
        const { loggedIn } = this.state

        if (loggedIn === true) {
            return <Redirect to='/' />
        }

        return (
            <div className='center'>
                <Card style={{ width: '20rem', padding: '10px', border: '3px solid #00ced1' }}>
                    <h2>Log In</h2>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>

                        <Card.Text>
                            <select onChange={this.handleChange} className='select' defaultValue='choose'>
                                <option value='choose' disabled>Log in as ..</option>
                                <option value="sarahedo">Sarah Edo</option>
                                <option value="tylermcginnis">Tyler McGinnis</option>
                                <option value="johndoe">John Doe</option>
                            </select>
                        </Card.Text>
                        <Button onClick={this.handleButtonClick} variant="outline-info">Log in</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default connect()(LoginPage)
