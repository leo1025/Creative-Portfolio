import { NextResponse } from "next/server";

async function UploadPostToDatabase(post) {

}

export async function POST(request) {
    try {
        const post = await request.json();
        
        

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error })
    }
}