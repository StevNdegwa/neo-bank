import { auth } from "firebase-admin";


export default class AuthN{
    static bankAccountOwners(adminAuth: auth.Auth){
        
        return {
            create: (user: any)=>{
                return adminAuth
                .createUser(user)
            },
            email: (email: string)=>{
                return adminAuth
                    .getUserByEmail(email)
                    .then((userRecord: auth.UserRecord)=>{
                        return userRecord;
                    })
            }
        }
    }

    static users(adminAuth: auth.Auth){

        return {
            getSessionCookie: (token: string, expiresIn: number = 3600)=>{
                return adminAuth.createSessionCookie(token, { expiresIn });
            },
            getUserToken: ()=>{
                return;
            }
        }
    }
}