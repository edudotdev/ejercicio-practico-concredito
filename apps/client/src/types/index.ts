
export type STATUS = 'Sent' | 'Approved' | 'Declined'

export interface PROFILEPROSPECTO {
  prospecto: PROPSPECTO
  document:  DOCUMENT[]
}

export interface PROSPECTOSTATUS {
  status: STATUS
  observations: string
}

export interface PROPSPECTO {
  id:              number
  name:            string
  first_lastName:  string
  second_lastName: string
  street:          string
  house_number:    string
  street2:         string
  postal_code:     string
  phone:           string
  rfc:             string
  status:          STATUS
  observations:    string
}

export interface DOCUMENT {
  id:           number
  prospecto_id: number
  name:         string
  path:         string
  size:         number
  mimetype:     string
}