import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET() {
  const currentTime = new Date();

  

  return NextResponse.json({
    timestamp: currentTime.toISOString(),
    readable: currentTime.toLocaleTimeString(),
    unix: currentTime.getTime(),
    message: "Timer API called successfully!",
    requestId: Math.random().toString(36).substring(2, 15),
  });
}
