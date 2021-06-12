export interface ILocalStorage<DataType> {
    key: string;
    delete: () => void;
}