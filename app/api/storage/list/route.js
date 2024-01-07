import { NextResponse } from "next/server";


export async function POST(request) {
    try {


        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error })
    }
}