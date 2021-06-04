import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "./config.json";

class Firebase {
    auth: app.auth.Auth;
    db: app.firestore.Firestore;

    constructor() {
        if(!app.apps.length){
            app.initializeApp({
                apiKey: config.API_KEY,
                authDomain: config.AUTH_DOMAIN,
                projectId: config.PROJECT_ID,
                storageBucket: config.STORAGE_BUCKET,
                messagingSenderId: config.MESSAGING_SENDER_ID,
                appId: config.APP_ID
            });
        }else{
            app.app();
        }

        this.auth = app.auth();
        this.db = app.firestore();
    }

    getAuth() {
        return this.auth;
    }

    signInWithGoogle() {
        let provider = new app.auth.GoogleAuthProvider();

        //Add scopes
        //provider.addScope("https://www.googleapis.com/auth/calendar");
        //provider.addScope("https://www.googleapis.com/auth/calendar.events");

        return app.auth().signInWithPopup(provider)
    }

    signUpNewUser(email: string, password: string, displayName: string) {
        return app
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result: app.auth.UserCredential) => {  
                //Add user display name
                result?.user?.updateProfile({ displayName });
                return result.user;
            });
    }

    signInUser(email: string, password: string) {
        return app.auth()
            .signInWithEmailAndPassword(email, password)
            .then((result:app.auth.UserCredential)=>{
                return result.user;
            })
    }

    signOutUser() {
        return app.auth().signOut();
    }
}

export default Firebase;