import { Method } from "axios";

export interface IHttpRequest<RequestDataType> {
    method: Method;
    headers: Headers;
    body: RequestDataType | null;
}