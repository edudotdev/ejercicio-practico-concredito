import express from 'express'
import cors from 'cors'
import prospectosRoutes from './routes/prospectos.routes.js'

import fs from 'fs'
import { fileURLToPath } from 'url'
import path, { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const uploadsDir = path.join(__dirname, '..', 'uploads')

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir)
}

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/api', prospectosRoutes)

app.get('/api/file/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(join(__dirname, '..', 'uploads', filename))
})

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found"
  })
})

export default app