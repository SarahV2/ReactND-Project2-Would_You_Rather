import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'

export class Leaderboard extends Component {
    state = {
        leaderboard: []
    }
    componentDidMount() {
        const { users } = this.props

        if (users) {
            let leaderboard = []
            for (let u in users) {
                var user = users[u]
                let answersCount = Object.keys(user.answers).length
                let questionsCount = user.questions.length
                let currentUser = {
                    id: user.id,
                    name: user.name,
                    answersCount,
                    questionsCount,
                    avatarURL: user.avatarURL,
                    score: (questionsCount + answersCount)
                }
                leaderboard.push(currentUser)

            }
            leaderboard = leaderboard.sort((a, b) => (a.score > b.score) ? -1 : 1)
            console.log(leaderboard)
            this.setState({
                leaderboard
            })

        }
    }
    render() {
        const { leaderboard } = this.state

        return (
            <div className='center'>
                <Card style={{ width: '50rem', padding: '10px', border: '3px solid #00ced1' }}>
                    <h2 style={{ margin: '20px' }}>Leaderboard </h2>
                    <div className='leaderboardContainer' >
                        {leaderboard.map((player) => (

                            <div key={player.id} className='playerInfo'>
                                <img className='leaderboardDisplay' src={player.avatarURL} alt='user avatar' />
                                <h3>{player.name}</h3>  <div>
                                    <i className="fas fa-star star" />Score:{player.score}
                                </div>
                                <span><p>Answered Questions: {player.answersCount}<br />
                                    Created Questions: {player.questionsCount}</p></span>

                            </div>

                        ))}
                    </div>
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

export default connect(mapStateToProps)(Leaderboard)