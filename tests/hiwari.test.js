const { expect } = require('chai')
const hiwari = require('../hiwari')
const logMock = require('./mocks/log.json')

describe('Should metrify a JSON log', () => {

  const metrics = hiwari(logMock)

  it('Should calculate the average weekly points', () => {

    expect(metrics.weeklyAvarege).to.be.equal(27)
    expect(metrics.response).to.be.a('string')

  })

})