import * as admin from "firebase-admin";
import Firestore from "./Firestore";
import AuthN from "./AuthN";

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: "neo-bank-b1ffd"
});

export const bankAccountDB = () => {
    const db = admin.firestore();
    return Firestore.registerdBankAccounts(db)
}

export const bankAccountBalancesDB = () => {
    const db = admin.firestore();
    return Firestore.bankAccountBalances(db);
}

export const authenticateBankAccountOwner = () => {
    const auth = admin.auth();
    return AuthN.bankAccountOwners(auth)
};

export const appUsers = () => {
    const auth = admin.auth();
    return AuthN.users(auth);
}