import axios from 'axios';
import {apiBaseUrl} from '../util/constVariable';

export const  getLookup=(offset,limit,count=true)=>{
    let arr = [];
    arr.push("offset="+offset);
    arr.push("limit="+limit);
    arr.push("count="+count);
    let url = apiBaseUrl+"Lookup/GetAll?offset="+offset+"&limit="+limit+"&count="+count;

    //CreateHeaders eklenecek.
    let response = axios.get(url);
    return response;
}

export const deleteLookup = (id) =>{
    let url = apiBaseUrl+"Lookup/DeleteLookup/"+id;
    let response = axios.post(url);
    return response;
}

export const createLookup = (name,description,type,parentId,isDeleted=false,order) => {
    let url = apiBaseUrl+"Lookup/AddLookup";
    let response = axios.post(url,{
        name,description,type,parentId,isDeleted,order
    },
    {
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }
    )
    return response;
}

export const updateLookup = (id,name,description,type,parentId,isDeleted,order) =>{
    let url = apiBaseUrl+"Lookup/UpdateLookup/"+id;
    let response = axios.post(url,{
        name,description,type,parentId,isDeleted,order
    },
    {
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }
    )
    return response;
}

export const getById=(id)=>{
    let url = apiBaseUrl+"Lookup/GetById/"+id;
    let response = axios.get(url);
    return response;
}