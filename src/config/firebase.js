const admin = require("firebase-admin");
const serviceAccount = require("./firebaseServiceAccount.json"); // Path to your Firebase service account

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //credential: admin.credential.applicationDefault(serviceAccount),
});

module.exports = admin;
