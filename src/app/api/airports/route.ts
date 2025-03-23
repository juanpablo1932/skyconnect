import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const offset = searchParams.get("offset") || "0";
  const limit = "6";

  const response = await fetch(
    `${process.env.AVIATIONSTACK_URL}airports?limit=${limit}&offset=${offset}${process.env.AVIATIONSTACK_API_KEY}`
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch airports" },
      { status: 500 }
    );
  }

  const { data, pagination } = await response.json();
  return NextResponse.json({ data, pagination });
}
