import { NextResponse } from "next/server";
import { uploadFileToStorage, uploadFileToDatabase } from "../../../../libs/Firebase";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file");

        if (!file) {
            return NextResponse.json({ error: "File is required." }, { status: 400 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error })
    }
}