import { NextResponse } from 'next/server'

import prisma from '../../../../../../lib/prisma'

// POST /api/pets/:id/weights
export async function POST(request: Request, { params }: { params: { id: string } }) {
  // get id from params
  const id = params.id
console.log(request.json())

  // get data from request body
  const data = await request.json()
  // create weight record
  const weight = await prisma.weight.create({
    // data from request body
    data: data.weight,
  })
  // return Response with weight to json
  return NextResponse.json({ weight })
}

