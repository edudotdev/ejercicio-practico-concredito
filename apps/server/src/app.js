import express from 'express'
import cors from 'cors'
import prospectosRoutes from './routes/prospectos.routes.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', prospectosRoutes)

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found"
  })
})

export default app