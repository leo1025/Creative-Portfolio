import { NextResponse } from "next/server";

async function uploadFileToDatabase(fileName, folder) {
    
}

async function uploadFileToStorage(file, fileName, folder) {

}

export async function POST(request) {
    try {
        const formData = await request.formData();
        
        const file = formData.get("file");
        const folder = formData.get("folder");

        if (!file) {
            return NextResponse.json({ error: "File is required." }, { status: 400 });
        }

        // Check file size
        if (Math.round(file.size/1024) > (1024*50)) {
            return NextResponse.json({ error: "File size exceeds the limit (50MB)." }, { status: 400 });
        }

        // Check file type
        const allowedFileTypes = ["image/png", "image/jpeg", "text/html"];
        if (!allowedFileTypes.includes(file.type)) {
            return NextResponse.json({ error: "File type not supported. Only PNG and JPG are allowed." }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const fileName = await uploadFileToBucket(buffer, file.name, folder);
        if(!fileName) {
            return NextResponse.json({ error: "Failed to upload to S3 server."}, { status: 401 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error })
    }
}