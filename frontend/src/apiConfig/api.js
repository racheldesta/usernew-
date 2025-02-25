import axios from "axios"; 
const axiosinstance = axios.create({
    // baseURL: urlConstants.baseurl,
    baseURL:"http://192.168.0.242:5000",});
    // axiosinstance.defaults.headers["Authorization"] = Bearer ${auth.getToken()};
    axiosinstance.interceptors.request.use(function (config) {
        const token = localStorage.getItem("authTokens");
        config.headers.Authorization = token ? `Bearer ${ token }` : "";
        return config;
    });
    export default axiosinstance;
