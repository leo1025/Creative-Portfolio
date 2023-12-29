import { NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const client = new S3Client({
    region: process.env.AWS_S3_REGION,
    credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    },
    endpoint: process.env.AWS_S3_ENDPOINT
})

async function getFileList() {
    const params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Prefix: 'images'
    }

    const command = await client.send(new ListObjectsV2Command(params));
    return command.Contents;
}

export async function GET() {
    try {
        const fileList = await getFileList();
        if(!fileList) {
            return NextResponse.json({ error: "Could not retrieve file list." }, { status: 400 });
        }

        const mediaList = fileList.map(obj => [process.env.AWS_S3_BUCKET_PUBLIC_URL, obj.Key]);

        return NextResponse.json({ success: true, fileList: mediaList })
    } catch (error) {
        return NextResponse.json({ error });
    }
}