import { auth } from "firebase-admin";


export default class AuthN {
    static bankAccountOwners(adminAuth: auth.Auth) {

        return {
            create: (accountRef: string, user: any) => {
                return adminAuth
                    .createUser(user)
                    .then((user: auth.UserRecord) => {
                        return adminAuth.setCustomUserClaims(user.uid, { accountRef });
                    })
            },
            email: (email: string) => {
                return adminAuth
                    .getUserByEmail(email)
                    .then((userRecord: auth.UserRecord) => {
                        return userRecord;
                    })
            }
        }
    }

    static users(adminAuth: auth.Auth) {

        return {
            getSessionCookie: (token: string, expiresIn: number = 3600) => {
                return adminAuth.createSessionCookie(token, { expiresIn });
            },
            getUserToken: () => {
                return;
            }
        }
    }
}