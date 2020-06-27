export const getQuestionStats = (question) => {
    let stats = {}

    let firstOptionCount = (question.optionOne.votes).length
    let secondtOptionCount = (question.optionTwo.votes).length
    let totalVotes = firstOptionCount + secondtOptionCount
    let firstOptionPercentage = ((firstOptionCount / totalVotes) * 100).toFixed(0)
    let secondtOptionPercentage = ((secondtOptionCount / totalVotes) * 100).toFixed(0)
    stats = {
        option1Count: firstOptionCount,
        option2Count: secondtOptionCount,
        totalVotes,
        option1Percentage: firstOptionPercentage,
        option2Percentage: secondtOptionPercentage
    }

    return stats
}