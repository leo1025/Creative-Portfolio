const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { Storage } = require('@google-cloud/storage');

var serviceAccount = require("../admin.json");

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_URL,
});

const storage = new Storage();
const database = getFirestore();

export async function uploadFileToStorage(fileBuffer, fileName) {
    const bucket = storage.bucket();
    const file = bucket.file(fileName);
}

export async function uploadFileToDatabase() {

}

export async function getPostsList() {

}

export async function getPostHTML() {

}

