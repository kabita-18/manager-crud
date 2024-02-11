import axios from "axios";

export const BASE_URL = "http://localhost:9090";
export const myAxios = axios.create({
    baseURL:BASE_URL
})

export const register = async (user)=>{
    const response = await myAxios.post("deliciousbyte/addmanager", user);
    return response.data;
}

export const mnameOption = async (user)=>{
    const response = await myAxios.get("deliciousbyte/managername", user);
    return response.data;
}

export const getManagerDetails = async (mname) =>{
    
    const response = await myAxios.get(`deliciousbyte/managername/${mname}`, mname);
    return response.data;
}

export const updateManagerDetails = async (updatedetails) =>{
    
    const response = await myAxios.put(`deliciousbyte/update/${updatedetails.mname}`, updatedetails);
    return response.data;
}