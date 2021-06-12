import { ILocalStorage } from "../../interfaces";

export class LocalStorage<DataType> implements ILocalStorage<DataType>{
    key: string;
    private __data: DataType | null = null;

    constructor(key: string) {
        this.key = key;
        let data = localStorage.getItem(key);
        if (data) {
            this.__data = JSON.parse(data);
        }
    }

    get data(): DataType | null {
        return this.__data;
    }

    set data(data: DataType | null) {
        this.__data = data;
    }

    delete() {
        this.__data = null;
        localStorage.removeItem(this.key);
    }
}