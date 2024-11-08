

import { generarToken } from "@/middleware/jwt";
import {  NextResponse as res } from "next/server";

export async function POST(request:Request){
  const newuser = {
    email:'experience@konecta-group.com',
    password:'Konecta**'
  }
  const { email, password } = await request.json()

  if(email != newuser.email){
    return res.json({
      error:'user or password incorrect',
      statusCode:401
    })
  }

  if(password != newuser.password){
    return res.json({
      error:'user or password incorrect',
      statusCode:401
    })
  }

  const token = generarToken(newuser)

  return res.json({ token })
}