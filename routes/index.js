// Controllers
const ipca = require('../controllers/ipca')
const tesouroDireto = require('../controllers/tesouro-direto')

module.exports = app => {
  app.get('/rates/ipca', ipca.get)
  app.get('/rates/ipca/last-year', ipca.lastYear)
  app.get('/rates/tesouro-direto/ipca-2050', tesouroDireto.ipca2050)
}