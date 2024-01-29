import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs'
import fsPromises from 'fs/promises';

import path from 'path';
export async function GET() {
    const filePath=path.join(process.cwd(),'data/blog.json')
    const jsonData = await fsPromises.readFile(filePath);
    const data = JSON.parse(jsonData);
    return NextResponse.json({ message: data });
  }
  
export async function POST(request) {
let payload=await request.json()
    const filePath=path.join(process.cwd(),'data','blog.json')
    const fileData=fs.readFileSync(filePath);
    const data=JSON.parse(fileData)
    // const filePath=path.join(process.cwd(),'data/blog.json')
    // const jsonData = await fsPromises.readFile(filePath);
    // const dataa = JSON.parse(jsonData);
    data.push(payload)
    fs.writeFileSync(filePath,JSON.stringify(data))
return  NextResponse.json({ message: payload})
}
  
export async function PUT() {
    return NextResponse.json({ message: 'Hello - PUT' });
}
  
export async function DELETE() {
    return NextResponse.json({ message: 'Hello - DELETE' });
}
  