import { firestore } from "firebase-admin";
import { BankAcc } from "../../../type";

class Firestore {
    static registerdBankAccounts(db: any) {
        
        //firestore Collection
        const collection = db.collection("registered_bank_accounts");
        return {
            get: async (id: string)=>{
                return collection
                .doc(id)
                .get()
                .then((doc:firestore.DocumentSnapshot)=>{
                    console.log(doc)

                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
            },
            register: async ({ firstName, lastName, email }: BankAcc) => {
                let { id } = await Firestore.getLastField(collection);
                
                id = parseInt(id) + 1;

                return collection
                    .doc(id+"")
                    .set({ firstName, lastName, email, dateCreated: new Date() })
                    .then(()=>({ id, firstName, lastName, email }))
            },
            delete: (id: string) => {
                return collection.doc(parseInt(id)).delete()
            }
        }
    }

    static getLastField(collection: any) {
        return collection.orderBy("dateCreated", "desc")
            .limit(1)
            .get()
            .then((snapshot: firestore.QuerySnapshot)=>{
                let doc = snapshot.docs[0];

                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
    }
}

export default Firestore;