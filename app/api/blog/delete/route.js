import { NextResponse } from "next/server";

async function deleteFile(fileName) {

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