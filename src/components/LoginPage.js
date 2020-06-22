import React, { Component } from 'react'
import image from '../utils/avatars/00.png'

export class LoginPage extends Component {
    render() {
        return (
            <div className='center'>
                <div className='info'>
                    <h2>Log in</h2>
                    <img src={image} width={250}></img>
                    <div>
                        <select className='select' defaultValue='choose'>
                            <option value='choose' disabled>Log in as ..</option>
                            <option value="sarahedo">Sarah Edo</option>
                            <option value="tylermcginnis">Tyler McGinnis</option>
                            <option value="johndoe">John Doe</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage
