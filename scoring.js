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
}

module.exports = calculateScore
