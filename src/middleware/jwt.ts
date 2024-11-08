

import jwt from 'jsonwebtoken'
import fs from 'node:fs'
const SECRET_KEY = '**devOps**'

export const generarToken = (user:any) => {
  return jwt.sign(user, SECRET_KEY, {expiresIn:'1h'} )
}