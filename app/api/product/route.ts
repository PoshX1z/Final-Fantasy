import { NextRequest, NextResponse } from "next/server";

let stored = "";
export async function POST(req: NextRequest) {
  console.log("POST TRIGGER");
  const formData = await req.formData();
  stored = formData.get("name") as string;

  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json({ stored });
}
