

import {  NextResponse as res } from "next/server";
import multer from 'multer'

const storage = multer.memoryStorage()
const upload = multer({ storage })


export async function POST(request:Request){
  
}