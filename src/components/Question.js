import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Question extends Component {

    state = {
        author: {}
    }

    componentDidMount() {
        const { question, users } = this.props
        let author = users[question.author]
        author = {
            name: author.name,
            avatarURL: author.avatarURL
        }
        this.setState({
            author
        })
    }

    render() {
        const { question, questionStatus } = this.props
        const { author } = this.state
        return (
            <div className='center'>
                <div className='questionInfo'>
                    <img className='leaderboardDisplay' src={author.avatarURL} alt='user avatar' />
                    <h5>{author.name} {questionStatus === 'unanswered' ? 'asks' : 'asked'}:</h5>
                    <br />
                    <h3 className='question'>Would you rather</h3>
                    <p>
                        ... {question.optionOne.text}...</p>
                    <Link to={{ pathname: `questions/${question.id}`, question, author, questionStatus }}>

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

