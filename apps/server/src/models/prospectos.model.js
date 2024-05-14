import { pool } from '../db.js'

export class ProspectoModel {
  //gets
  static async getProspectos() {
    const [rows] = await pool.query('SELECT * FROM prospecto')
    
    return rows
  }

  static async getProspectoById(id) {
    const [rows] = await pool.query('CAll getProspectoAndDocumentsById(?)', [id])
    if (rows.length <= 0) return res.status(404).json({
      message: "Prospecto not found"
    })

    return [rows]
  }

  //create
  static async createProspecto(prospectoData, prospectoFiles) {
    const { name, first_lastName, second_lastName, street, house_number, 
      street2, postal_code, phone, rfc
    } = prospectoData
 
    const [result] = await pool.query('INSERT INTO prospecto (name, first_lastName, second_lastName, street, house_number, street2, postal_code, phone, rfc, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [ name, first_lastName, second_lastName, street, house_number, 
      street2, postal_code, phone, rfc, 'Sent'
    ])

    if(result.affectedRows = 1) {
      const prospectoId = result.insertId

      for (const prospectoFile of prospectoFiles) {
        const { filename, path, size, mimetype} = prospectoFile
        const [resultDocuments] = await pool.query('INSERT INTO document (prospecto_id, name, path, size, mimetype) VALUES (?, ?, ?, ?, ?)',
        [prospectoId, filename, path, size, mimetype])
      }
    }

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
