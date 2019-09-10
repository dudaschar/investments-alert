const axios = require('axios')

module.exports = async (req, res) => {
  try {
    const url = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.16121/dados/ultimos/12?formato=json'
    const ipcaValues = await axios.get(url)
    
    const rates = ipcaValues.data.map(({valor}) => valor/100 + 1)

    const composeRate = (accumulator, currentValue) => accumulator * currentValue;

    const yearRate = (rates.reduce(composeRate) - 1) * 100

    res.status(200).send({ data: yearRate })
  } catch (err) {
    res.status(500).send({ error: { message: err } })
  }
}