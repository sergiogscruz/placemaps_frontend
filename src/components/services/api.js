import axios from "axios";

const api = axios.create({
    baseURL: "https://place-maps.herokuapp.com/",
});

export default api;