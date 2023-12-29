import { NextResponse } from "next/server";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
    region: process.env.AWS_S3_REGION,
    credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    },
    endpoint: process.env.AWS_S3_ENDPOINT
})

async function deleteFile(fileName) {
    const params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileName
    }

    const command = new DeleteObjectCommand(params);
    await client.send(command);
}

export async function DELETE(request) {
    try {
        const formData = await request.formData();
        const fileName = formData.get("fileName");

        await deleteFile(fileName);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error });
    }
}