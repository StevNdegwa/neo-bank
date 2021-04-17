import { firestore } from "firebase-admin";
import { BankAcc } from "../../../type";

class Firestore {
    static registerdBankAccounts(db: firestore.Firestore) {
        
        //firestore Collection
        const collection = db.collection("registered_bank_accounts");
        return {
            get: async (id: string): Promise<BankAcc | any> =>{
                return collection
                .doc(id)
                .get()
                .then((doc:firestore.DocumentSnapshot)=>{
                    let data = doc.data(),
                        acc = {};
                    
                    if(data){
                        acc =  {
                            id: doc.id,
                            firstName: data.firstName,
                            lastName: data.lastName,
                            email: data.email,
                            dateCreated: data.dateCreated
                        }
                    }

                    return acc;
                });
            },
            register: async ({ firstName, lastName, email }: BankAcc) => {
                let { id } = await Firestore.getLastField(collection);
                
                let newId = `${firstName[0]}${lastName[0]}${parseInt(id.slice(2))+1}`;

                return collection
                    .doc(newId)
                    .set({ firstName, lastName, email, dateCreated: new Date() })
                    .then(()=>({ id: newId, firstName, lastName, email }))
            },
            delete: (id: string) => {
                return collection.doc(id).delete()
            }
        }
    }

    static bankAccountBalances(db:firestore.Firestore){
        const collection = db.collection("bank_account_balances");

        return {
            get: async (id: string)=>{
                return collection
                .doc(id)
                .get()
                .then((doc: firestore.DocumentSnapshot)=>{
                    let data = doc.data(),
                        balances = {};

                    if(data){
                        balances = {
                            id: doc.id,
                            opening_balance: data.opening_balance
                        }
                    }

                    return balances;
                });
            }
        }
    }

    static getLastField(collection: firestore.CollectionReference) {
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