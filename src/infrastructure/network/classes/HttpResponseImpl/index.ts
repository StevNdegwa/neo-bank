import { HttpResponse, IHttpRequest } from "../../interfaces";


export class HttpResponseImpl<RequestDataType, ResponseDataType> implements HttpResponse<RequestDataType, ResponseDataType> {
    request: null | IHttpRequest<RequestDataType> = null;
    data = null;
    error = null;

    constructor(request: IHttpRequest<RequestDataType>, data: { [key: string]: ResponseDataType });
    constructor(request: IHttpRequest<RequestDataType>, error: Error);
    constructor(request: IHttpRequest<RequestDataType>, arg1: any) {
        this.request = request;
        if (arg1.constructor.name === "Error") {
            this.error = arg1;
        } else {
            this.data = arg1;
        }
    }
}