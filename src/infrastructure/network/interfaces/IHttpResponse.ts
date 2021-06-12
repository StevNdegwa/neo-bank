import { IHttpRequest } from "./IHttpRequest";

export interface HttpResponse<RequestDataType, ResponseDataType> {
    data: { [key: string]: ResponseDataType } | null;
    error: Error | null;
    request: IHttpRequest<RequestDataType> | null;
}