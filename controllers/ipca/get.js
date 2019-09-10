const axios = require('axios')

module.exports = async (req, res) => {
  try {
    const ipcaValues = await axios.get('https://api.bcb.gov.br/dados/serie/bcdata.sgs.16121/dados/ultimos/12?formato=json')

    res.status(200).send({data: ipcaValues.data})
  } catch (err) {
    res.status(500).send({ error: { message: err } })
  }
}