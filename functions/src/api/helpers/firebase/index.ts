import * as admin from "firebase-admin";
import Firestore from "./Firestore";

admin.initializeApp();

const db = admin.firestore();

export const bankAccountDB =  ()=>Firestore.registerdBankAccounts(db)
