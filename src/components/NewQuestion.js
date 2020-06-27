import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'
class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        submitted:false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit =async (e) => {
        e.preventDefault()
        const { optionOne, optionTwo } = this.state
        await this.props.dispatch(handleAddQuestion(optionOne, optionTwo))
        this.setState({
            submitted:true
        })
    }
    
    render() {
        const { optionOne, optionTwo,submitted } = this.state
        if (submitted){
            return (<Redirect to='/' />)
        }
        return (
            <div className='center'>
                <Card style={{ width: '50rem', padding: '10px', border: '3px solid #00ced1' }}>
                    <h2 style={{ margin: '20px', color: '#00ced1', fontweight: '800' }}>Would you Rather </h2>

                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} type='text' value={optionOne} name='optionOne' placeholder='Option 1: Learn JavaScript' required />
                        <br />
                        <input onChange={this.handleChange} type='text' value={optionTwo} name='optionTwo' placeholder='Option 2: Learn PHP' required />
                        <input className='btn btn-outline-info' type='submit'></input>
                    </form>

                </Card>
            </div >
        )
    }
}
export default connect()(NewQuestion)
