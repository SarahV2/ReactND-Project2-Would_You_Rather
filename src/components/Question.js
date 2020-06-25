import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
class Question extends Component {

    state = {
        author: {}
    }
    componentWillMount() {
        const { question, users } = this.props
        let author = {}
        if (users) {
            for (user in users) {
                var user = users[user]
                if (user.id === question.author) {
                    console.log(user.name)
                    author.name = user.name
                    author.avatarURL = user.avatarURL
                }

                this.setState({
                    author
                })
            }
            // const authorInfo = users.filter(user => user.id === question.author)
            // console.log(authorInfo)
        }
    }
    render() {
        const { question, users,questionStatus } = this.props
        const { author } = this.state
        return (
            <div className='center'>
                <div className='questionInfo'>
                    <img className='leaderboardDisplay' src={author.avatarURL} />

                    <h5>{author.name} asks:</h5>
                    <br />
                <h3 className='question'>Would you rather</h3>
                    <p>
                      ... {question.optionOne.text}...</p>

                    {/* <p>
                       {question.optionOne.text}
                        <br />
                    {question.optionTwo.text}</p> */}
                   <Link to={{pathname: '/view', question, author, questionStatus}}>
                       
                       <button className='btn btn-outline-info viewQuestion'>View Poll</button></Link> 

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }

}
export default connect(mapStateToProps)(Question)

