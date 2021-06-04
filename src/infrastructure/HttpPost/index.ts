import IHttpPost from "../interfaces/IHttpPost";
import axios from "../axios-impl";

class HttpPost implements IHttpPost {
    url: URL;
    data: any;
    headers: Headers;

    constructor(url: URL, data: any, headers: Headers) {
        this.url = url;
        this.data = data;
        this.headers = headers;
    }

    post() {
        return axios({
            method: "post",
            url: this.url.toString(),
            data: this.data,
            headers: this.headers
        }).then(({ data }) => data)
    }

}

export default HttpPost;