const emoji = require('node-emoji')

const hiwari = json => {

  const log = json.studies_log

  let allPoints = 0
  let totalItens = 0

  log.forEach( item => {

    allPoints += item.complete_points

    if (item.complete_points !== null) totalItens += 1

  })

  const weeklyAvarege = allPoints / totalItens
  const response = 'A media de pontos realizados por semana é de: ' + weeklyAvarege + ' pontos.' + emoji.get('fire')
  console.log(response)

}

module.exports = hiwari