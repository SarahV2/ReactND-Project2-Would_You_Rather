import React, { Component } from 'react'
import { Container, Row, Col, Card, CardGroup, Button, DropdownButton, Dropdown, Form } from 'react-bootstrap'
import image from '../utils/avatars/00.png'

export class Test extends Component {
    handleButtonClick = (e) => {
        e.preventDefault()
        console.log(e.target.value)

    }
    render() {
        return (
            <div className='center'>
                <Card style={{ width: '20rem', padding: '10px', border: '3px solid #00ced1' }}>
                    <h2>Log In</h2>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>

                        <Card.Text>
                            <select onChange={this.handleButtonClick} className='select' defaultValue='choose'>
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

export default Test
