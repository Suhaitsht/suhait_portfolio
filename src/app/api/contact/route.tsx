import { ContactRequestBody } from "@/app/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    (await request.json()) as ContactRequestBody;
    return NextResponse.json(
      { message: "Message Sent SuccessFully" },
      { status: 200 }
    );
  } catch (error) {
    const errorMessages =
      error instanceof Error ? error.message : " Failed to Send Message";
    return NextResponse.json(
      {
        message: errorMessages,
      },
      {
        status: 500,
      }
    );
  }
}
