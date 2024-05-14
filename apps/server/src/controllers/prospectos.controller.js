import { ProspectoModel }  from '../models/prospectos.model.js'

export class ProspectoController {
  //gets
  static async getProspectos(req, res) {
    try {
      const prospectos = await ProspectoModel.getProspectos()
      res.json(prospectos)
    } catch (error) {
      return res.status(500).json({
        message: "Something goes wrong"
      })
    }
  }

  static async getProspectoById(req, res) {
    const { id } = req.params
    try {
      const [rows] = await ProspectoModel.getProspectoById(id)
      res.json({ prospecto: rows[0][0], document: rows[1]})
    } catch (error) {
      return res.status(500).json({
        message: "Something goes wrong"
      })
    }
  }

  //create
  static async createProspecto(req, res) {
    const prospectoData = req.body
    const prospectoFiles = req.files
    try {
      const [result] = await ProspectoModel.createProspecto(prospectoData, prospectoFiles)
      if (result.affectedRows <= 0) return res.status(404).json({
        message: "Prospecto not created"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Something goes wrong"
      })
    }
    res.status(201).json({message: 'Prospecto created'})
  }

  //update
  static async updateProspectoStatus(req, res) {
    const { id } = req.params
    const statusData = req.body
    try {
      const result = await ProspectoModel.updateProspectoStatus(id, statusData)
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Prospecto not found' })
      } else {
        res.json({ message: 'Prospecto updated' })
      }
    } catch (error) {
      return res.status(500).json({
        message: "Something goes wrong"
      })
    }
  }

  //delete
  static async deleteProspectoById(req, res) {
    const { id } = req.params
    try {
      const [result] = await ProspectoModel.deleteProspectoById(id)
      if (result.affectedRows <= 0) {
        res.status(404).json({ error: 'Prospecto not found' })
      } else {
        res.json({ message: "Prospecto has been deleted" })
      } 
    } catch (error) {
      return res.status(500).json({
        message: "Something goes wrong"
      })
    }
  }
}
