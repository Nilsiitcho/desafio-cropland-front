import axios from "axios";

let config = {
    baseURL: 'http://localhost:4000',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
    },
    timeout: 300000,
};

export default axios.create(config);
