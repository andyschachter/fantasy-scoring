const passingScore = (player) => {
  const QB = player.stats.passing
  const yards = QB.yards / 25
  const touchdowns = QB.touchdowns * 6
  const interceptions = QB.interceptions * -3

  return yards + touchdowns + interceptions
}
const rushingScore = (player) => {
  const RB = player.stats.rushing
  const yards = RB.yards / 10
  const touchdowns = RB.touchdowns * 6
  const fumbles = RB.fumbles * -3

  return yards + touchdowns + fumbles
}
const receivingScore = (player) => {
  const WR = player.stats.receiving
  const catches = WR.receptions * 1
  const yards = WR.yards / 10
  const touchdowns = WR.touchdowns * 6
  const fumbles = WR.fumbles * -3
  
  return catches + yards + touchdowns + fumbles
  }
const kickReturnScore = (player) => {
    const KR = player.stats.return.kickreturn
    const yards = KR.yards / 15
    const touchdowns = KR.touchdowns * 6
    const fumbles = KR.fumbles * -3

    return yards + touchdowns + fumbles
}
const puntReturnScore = (player) => {
    const PR = player.stats.return.puntreturn
    const yards = PR.yards / 15
    const touchdowns = PR.touchdowns * 6
    const fumbles = PR.fumbles * -3

    return yards + touchdowns + fumbles
}
const calculateScore = (player) => {
  switch (player.position) {
    case 'QB':
      return passingScore(player) + rushingScore(player)
    case 'RB':
      return rushingScore(player) + receivingScore(player) + kickReturnScore(player) + puntReturnScore(player)
    case 'WR':
      return rushingScore(player) + receivingScore(player) + kickReturnScore(player) + puntReturnScore(player)
    case 'TE':
      return receivingScore(player)
    default:
      return 0
  }

  // const Passing = player.stats.passing
  // const scorePassing = (Passing.yards / 25) + (Passing.touchdowns * 6) + (Passing.interceptions * -3)
  // const Receiving = player.stats.receiving
  // const scoreReceive = (Receiving.yards/10)+(Receiving.touchdowns*6)+(Receiving.fumbles*-3)+(Receiving.receptions*1)
  // const Rushing = player.stats.rushing
  /* const scoreRushing = (Rushing.yards / 10) + (Rushing.touchdowns * 6) + (Rushing.fumbles * -3)
  const kickReturn = player.stats.return.kickreturn
  const scoreKickReturn = (kickReturn.yards / 15) + (kickReturn.touchdowns * 6) + (kickReturn.fumbles * -3)
  const puntReturn = player.stats.return.puntreturn
  const scorePuntReturn = (puntReturn.yards / 15) + (puntReturn.touchdowns * 6) + (puntReturn.fumbles * -3)
*/

}

module.exports = calculateScore
