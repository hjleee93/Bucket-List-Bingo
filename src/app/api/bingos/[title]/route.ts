import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { title: string } })
{
  const title = params.title

  try {
    console.log('title : ', title)

    return NextResponse.json(2)
  } catch (error) {
    return NextResponse.json({
      error: error
    }, { status: 500 })
  }
}
