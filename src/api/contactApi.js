import axios from "axios";

const API = axios.create({
    baseURL: "https://contactmanager1-csmb-mohana.onrender.com"
});

export default API;
