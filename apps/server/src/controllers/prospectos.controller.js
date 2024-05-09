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
      res.json(rows)
    } catch (error) {
      return res.status(500).json({
        message: "Something goes wrong"
      })
    }
  }

  //create
  static async createProspecto(req, res) {
    const prospectoData = req.body
    try {
      const [result] = await ProspectoModel.createProspecto(prospectoData)
      if (result.affectedRows <= 0) return res.status(404).json({
        message: "Prospecto not created"
      })
      res.status(201).json(prospectoData)
    } catch (error) {
      return res.status(500).json({
        message: "Something goes wrong"
      })
    }
  }

  //update
  static async updateProspectoStatus(req, res) {
    const { id } = req.params
    const statusData = req.body
    try {
      const result = await ProspectoModel.updateProspectoStatus(id, statusData)

      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Prospecto no encontrado' });
      } else {
        res.json({ message: 'Prospecto actualizado correctamente' });
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
      console.log(result, result.affectedRows)

      if (result.affectedRows <= 0) {
        res.status(404).json({ error: 'Prospecto not found' });
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
