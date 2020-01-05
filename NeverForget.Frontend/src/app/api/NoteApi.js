import axios from 'axios';
import {apiBaseUrl} from '../util/constVariable';

export const  getNotes=(offset,limit,count=true,categoryname)=>{
    let arr = [];
    arr.push("offset="+offset);
    arr.push("limit="+limit);
    arr.push("count="+count);
    let url = apiBaseUrl+"Notes/GetNotes?offset="+offset+"&limit="+limit+"&count="+count+"&categoryname="+categoryname;

    //CreateHeaders eklenecek.
    let response = axios.get(url,
        { headers: { Authorization: 'Bearer '.concat(JSON.parse(localStorage.getItem("loginUserApp")).token) } });
    console.log(response);
        return response;
}


export const deleteNote=(id)=>{
    let url = apiBaseUrl+"Note/DeleteNote/"+id;
    let response = axios.delete(url);
    return response;
}


export const createNote = (categoryId,name,Description,userId,isDeleted,Code)=>{
    let url = apiBaseUrl+"Note/AddNote";
    let response = axios.post(url,
        {
            categoryId,
            name,
            Description,
            userId,
            isDeleted,
            Code
        },  
        {
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }); 
    return response;
}

export const updateNote = (id,categoryId,name,Description,userId,isDeleted,Code) => {
    let url = apiBaseUrl+"Note/UpdateNote/"+id;
    let response = axios.post(url,
        {
            categoryId,
            name,
            Description,
            userId,
            isDeleted,
            Code
        },  
        {
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }); 
    return response;
}

