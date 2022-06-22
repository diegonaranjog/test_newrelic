const app = require('./app')
const { serverPort } = require('./config')

app.listen(serverPort, () => {
  console.log(`Server running at http://localhost:${serverPort}`)
})