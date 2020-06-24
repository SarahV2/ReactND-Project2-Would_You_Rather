import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export default class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // this.setState({
        //     [e.target.name]: [e.target.value]
        // })
        // const values = {
        //     [e.target.name]: [e.target.value]
        // }
        console.log(this.state)
    }
    render() {
        const { optionOne, optionTwo } = this.state
        return (
            <div className='center'>
                <Card style={{ width: '50rem', padding: '10px', border: '3px solid #00ced1' }}>
                    <h2 style={{ margin: '20px' }}>Would you Rather ... </h2>
                    {/* <Card.Img variant="top" src={image} /> */}


                  
                            <form onSubmit={this.handleSubmit}>
                                <input onChange={this.handleChange} type='text' value={optionOne} name='optionOne' placeholder='Option 1: Learn JavaScript' required />
                                <br />
                                <input onChange={this.handleChange} type='text' value={optionTwo} name='optionTwo' placeholder='Option 2: Learn PHP' required />
                                <input className='btn btn-outline-info' type='submit'></input>

                                {/* <Button type='submit'onClick={this.handleSubmit} variant="outline-info">Submit Question</Button> */}
                            </form>
     
                </Card>
            </div >
        )
    }
}
