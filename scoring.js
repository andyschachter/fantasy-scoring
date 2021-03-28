const calculateScore = (player) => {
    const Passing = player.stats.passing
    const Receiving = player.stats.receiving
    const Rushing = player.stats.rushing
    const kickReturn = player.stats.return.kickreturn
    const puntReturn = player.stats.return.puntreturn
    const scorePassing = (Passing.yards / 25) + (Passing.touchdowns * 6) + (Passing.interceptions * -3)
    const scoreReceiving = (Receiving.yards / 10) + (Receiving.touchdowns * 6) + (Receiving.fumbles * -3) + (Receiving.receptions * 1)
    const scoreRushing = (Rushing.yards / 10) + (Rushing.touchdowns * 6) + (Rushing.fumbles * -3)
    const scoreKickReturn = (kickReturn.yards / 15) + (kickReturn.touchdowns * 6) + (kickReturn.fumbles * -3)
    const scorePuntReturn = (puntReturn.yards / 15) + (puntReturn.touchdowns * 6) + (puntReturn.fumbles * -3)
    
    switch (player.position) {
        case 'QB':
            score = scorePassing + scoreRushing;
            break;
        case 'RB':
            score = scoreReceiving + scoreRushing + scoreKickReturn + scorePuntReturn;
            break;
        case 'WR':
            score = scoreReceiving + scoreRushing + scoreKickReturn + scorePuntReturn;
            break;
        case 'TE':
            score = scoreReceiving;
            break;
        default:
            score = 0;
    }
    return score
}
module.exports = calculateScore