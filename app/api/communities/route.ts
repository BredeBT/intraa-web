import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const communities = await prisma.community.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(communities);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch communities" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, slug, ownerId } = body;

    if (!name || !slug || !ownerId) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const community = await prisma.community.create({
      data: {
        name,
        slug,
        ownerId,
      },
    });

    return NextResponse.json(community, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create community" },
      { status: 500 }
    );
  }
}
