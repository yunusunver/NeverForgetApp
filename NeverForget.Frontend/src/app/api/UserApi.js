import axios from 'axios';
import {apiBaseUrl} from '../util/constVariable';

export const  getUsers=(offset,limit,count=true)=>{
    let arr = [];
    arr.push("offset="+offset);
    arr.push("limit="+limit);
    arr.push("count="+count);
    let url = apiBaseUrl+"User/GetUsers?offset="+offset+"&limit="+limit+"&count="+count;

    //CreateHeaders eklenecek.
    let response = axios.get(url);
    return response;
}

export const getUser = (id) => {
    let url = apiBaseUrl+"User/GetUser/"+id;
    let response =axios.get(url);
    return response;
}

export const register = (
                            name,
                            surname,
                            username,
                            email,
                            password,
                            isDeleted = false,
                            isNotusing,
                            ownerId
                            ) => {
    let url = apiBaseUrl+"User/Register";
    let response = axios.post(url,{
        name,surname,username,email,password,isDeleted,isNotusing,ownerId
    },
    {
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }
    );
    return response;
}

export const updateUser =( 
    id,
    name,
    surname,
    username,
    email,
    password,
    isDeleted = false,
    isNotusing,
    ownerId) => {
    let url = apiBaseUrl+"User/UpdateUser/"+id;

    let response = axios.put(url,{
        name,surname,username,email,password,isDeleted,isNotusing,ownerId
    },
    {
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }
    );
    return response;

}

export const deleteUser = (id) =>{
    let url = apiBaseUrl+"User/DeleteUser/"+id;
    let response = axios.delete(url);
    return response;
}

export const login =(username,password)=>{
    let url = apiBaseUrl+"User/Login?username="+username+"&password="+password;
    let response = axios.post(url)
    return response;
}
