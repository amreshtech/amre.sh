import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      projectId: 'personal-blog-amresh'
    }),
    databaseURL:
      'https://personal-blog-amresh-default-rtdb.europe-west1.firebasedatabase.app'
  });
}

export default admin.database();
