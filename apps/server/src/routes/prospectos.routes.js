import { Router } from "express";
import { ProspectoController } from '../controllers/prospectos.controller.js'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'uploads')
  },
  filename: function (req, file, cb) {
    const noSpaces = file.originalname.trim()
    cb(null, `${Date.now()}-${noSpaces}`)
  }
})

const upload = multer({ storage })
const router = Router()

router.get('/prospectos', ProspectoController.getProspectos)
router.get('/prospectos/:id', ProspectoController.getProspectoById)
router.post('/prospectos', upload.any(), ProspectoController.createProspecto)
router.put('/prospectos/:id', ProspectoController.updateProspectoStatus)
router.delete('/prospectos/:id', ProspectoController.deleteProspectoById)

export default router