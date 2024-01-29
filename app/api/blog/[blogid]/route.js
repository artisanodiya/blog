import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs'
import fsPromises from 'fs/promises';

import path from 'path';

export async function GET(request,{ params }) {
  const filePath=path.join(process.cwd(),'data/blog.json')
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  const getBlogById=data.find((bid)=>bid.id===+params.blogid)
 
  return NextResponse.json({ message:getBlogById});
}

export async function PUT(request,{ params }) {
  let payload=await request.json()
  const filePath=path.join(process.cwd(),'data/blog.json')
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  data.find((bid)=>bid.id===+params.blogid && (bid.title=payload.title,bid.content=payload.content))
  fs.writeFileSync(filePath,JSON.stringify(data))
  return NextResponse.json({ message:"Data update successful"});
}

export async function DELETE(request,{ params }) {
  const filePath=path.join(process.cwd(),'data/blog.json')
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
 const deleteData= data.filter((bid)=>bid.id!==+params.blogid)
  fs.writeFileSync(filePath,JSON.stringify(deleteData))
  return NextResponse.json({ message:"Data delete successful"});
}