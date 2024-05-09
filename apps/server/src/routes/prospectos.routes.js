import { Router } from "express";
import { ProspectoController } from '../controllers/prospectos.controller.js'
 
const router = Router()

router.get('/prospectos', ProspectoController.getProspectos)
router.get('/prospectos/:id', ProspectoController.getProspectoById)
router.post('/prospectos', ProspectoController.createProspecto)
router.put('/prospectos/:id', ProspectoController.updateProspectoStatus)
router.delete('/prospectos/:id', ProspectoController.deleteProspectoById)

export default router