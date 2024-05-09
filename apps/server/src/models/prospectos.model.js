import { pool } from '../db.js'

export class ProspectoModel {
  //gets
  static async getProspectos() {
    const [rows] = await pool.query('SELECT * FROM prospecto')
    
    return rows
  }

  static async getProspectoById(id) {
    const [rows] = await pool.query('SELECT * FROM prospecto WHERE id = ?', [id])
    if (rows.length <= 0) return res.status(404).json({
      message: "Prospecto not found"
    })

    return [rows]
  }
  //create
  static async createProspecto(prospectoData) {
    const { name, first_lastName, second_lastName, street, house_number, 
      street2, postal_code, phone, rfc, status, observations
    } = prospectoData
    const [result] = await pool.query("INSERT INTO prospecto (name, first_lastName, second_lastName, street, house_number, street2, postal_code, phone, rfc, status, observations) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [ name, first_lastName, second_lastName, street, house_number, 
      street2, postal_code, phone, rfc, status, observations
    ])
    
    return [result]
  }

  //update
  static async updateProspectoStatus(id, statusData) {
    const { status, observations } = statusData
    const [result] = await pool.query('UPDATE prospecto SET status = ?, observations = ? WHERE id = ?', [status, observations, id])
    
    return result
  }

  //delete
  static async deleteProspectoById(id) {
    const [result] = await pool.query('DELETE FROM prospecto WHERE id = ?', [id])
    
    return [result]
  }
}
