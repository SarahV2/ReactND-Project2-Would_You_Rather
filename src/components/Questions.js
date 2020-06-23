import React, { Component } from 'react'
import { connect } from 'react-redux'
export class Questions extends Component {
    render() {
        const { currentUser,users,questions } = this.props
        console.log(users)
        //console.log(this.props.currentUser)
        return (
            <div>
                Questions
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {currentUser,questions,users}=state
    return {
      //loading: authedUser === null
      currentUser,
      users,
      questions
    }
  }

export default connect(mapStateToProps)(Questions)
