import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import image from '../utils/avatars/00.png'
import { handleLogin } from '../actions/currentUser';
import { connect } from 'react-redux'
import { redirect } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'

class LoginPage extends Component {

    state = {
        loggedIn: '',
        chosenUser: '',
    }


    setUsersList = (users) => {
        let usersList = []
        for (let u in users) {
            var user = users[u]
            usersList.push(user)
        }
        return usersList
    }


    handleChange = (e) => {
        e.preventDefault()
        const { users } = this.props
        const usersList = this.setUsersList(users)
        this.setState({
            chosenUser: usersList[e.target.value]
        })
        let img = document.getElementById('loginImage')
        img.setAttribute('src', usersList[e.target.value].avatarURL)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { chosenUser } = this.state
        if (chosenUser) {
            this.props.dispatch(handleLogin(chosenUser))
            this.setState({
                loggedIn: true
            })
        }

    }

    render() {
        const { loggedIn } = this.state
        const { users } = this.props
        var statePath = this.props.location.state
        let list = []

        if (loggedIn === true) {
            let targetPath
            if (statePath) {
                targetPath = statePath.previousPath
            }
            else {
                targetPath = '/'
            }
            return redirect(targetPath)
        }

        if (users) {
            list = this.setUsersList(users)
        }


        return (
            <div className='center'>

                <Card style={{ width: '30rem', padding: '10px', border: '3px solid #00ced1' }}>

                    <h2>Log In</h2>
                    <Alert variant="warning">Log in to continue</Alert>
                    <div className='center'>
                        <img id='loginImage' src={image} alt='avatar' />
                    </div>
                    <Card.Body>

                        <Card.Text>
                            <select onChange={this.handleChange} className='select' defaultValue='choose'>
                                <option value='choose' disabled>Log in as ..</option>
                                {list.map((user, index) => (
                                    <option key={user.id} value={index}>{user.name}</option>
                                ))}
                            </select>
                        </Card.Text>
                        <Button onClick={this.handleSubmit} variant="outline-info">Log in</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(LoginPage)
