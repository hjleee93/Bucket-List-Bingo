import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from App Router API!' });
}


export async function POST() {
  //TODO: connet to db
  
  return NextResponse.json({ message: 'Hello from App Router API!' });
}
