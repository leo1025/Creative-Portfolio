import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
    region: process.env.AWS_S3_REGION,
    credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    },
    endpoint: process.env.AWS_S3_ENDPOINT
})

async function uploadFileToS3(file, fileName) {
    const fileBuffer = file;

	const params = {
		Bucket: process.env.AWS_S3_BUCKET_NAME,
		Key: `images/${fileName}`,
		Body: fileBuffer,
		ContentType: "image/jpg",
        ACL: "public-read"
	}

	const command = new PutObjectCommand(params);
	await client.send(command);
	return fileName;
}

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file");

        if (!file) {
            return NextResponse.json({ error: "File is required." }, { status: 400 });
        }

        // Check file size
        if (Math.round(file.size/1024) > (1024*50)) {
            return NextResponse.json({ error: "File size exceeds the limit (50MB)." }, { status: 400 });
        }

        // Check file type
        const allowedFileTypes = ["image/png", "image/jpeg"];
        if (!allowedFileTypes.includes(file.type)) {
            return NextResponse.json({ error: "File type not supported. Only PNG and JPG are allowed." }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const fileName = await uploadFileToS3(buffer, file.name);
        if(!fileName) {
            return NextResponse.json({ error: "Failed to upload to S3 server."}, { status: 401 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error })
    }
}