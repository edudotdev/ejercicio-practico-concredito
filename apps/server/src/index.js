import app from './app.js'

app.listen(process.env.NODE_DOCKER_PORT)

console.log('server running on port:', process.env.NODE_DOCKER_PORT)