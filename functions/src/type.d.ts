export type BankAcc = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    dateCreated: string;
    account?: BankAccDetails;
}

export type BankAccDetails = {
    accNumber:string;
}

export interface BankAccBalances {
    openingBalance?: number;
    currentBalance?: number;
}