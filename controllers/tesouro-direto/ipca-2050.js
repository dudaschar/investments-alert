const axios = require('axios')

module.exports =  async (req, res) => {
  try {
    res.status(200).send({ data: '2050' })
  } catch (err) {
    res.status(500).send({ error: { message: err } })
  }
}
