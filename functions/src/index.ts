import * as functions from "firebase-functions";
import app from "./api";

export const api = functions.https.onRequest(app);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
// functions.logger.info("Hello logs!", {structuredData: true});
// response.send("Hello from Firebase!");
// });
