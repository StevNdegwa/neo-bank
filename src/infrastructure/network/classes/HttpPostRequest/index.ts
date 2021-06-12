import { Method } from "axios";
import { IHttpRequest } from "../../interfaces";
import { HttpResponseImpl } from "../HttpResponseImpl";
import axios from "../../axios";


export class HttpPostRequest<RequestDataType, ResponseDataType> implements IHttpRequest<RequestDataType> {
    method: Method = "post";
    body: RequestDataType | null = null;
    headers;

    constructor(headers: Headers = new Headers(), body: RequestDataType) {
        this.headers = headers;
        this.body = body;
    }

    async execute(url: string) {
        url = url[0] !== "/" ? "/".concat(url) : url;

        try {
            const response = await axios({
                method: this.method,
                data: this.body,
                headers: this.headers
            })

            return new HttpResponseImpl<RequestDataType, ResponseDataType>(this, response.data);
        } catch (error) {
            return new HttpResponseImpl<RequestDataType, ResponseDataType>(this, new Error(error.message));
        }

    }

    set requestHeaders({ header, value }: { header: string; value: string; }) {
        if (!header) {
            this.headers.delete(header);
        } else {
            this.headers.set(header, value);
        }
    }

    get requestHeades() {
        return this.headers
    }

    static request(url: string, headers: Headers, data: any = {}) {
        url = url[0] !== "/" ? "/".concat(url) : url;

        return axios({
            url,
            method: "post",
            data,
            headers
        }).then(({ data }) => data)
    }
}