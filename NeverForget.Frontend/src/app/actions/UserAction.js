import {
    GET_ALL_USER_START,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAIL,
    GETBYID_USER_START,
    GETBYID_USER_SUCCESS,
    GETBYID_USER_FAIL,
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from "./Types";

import {getUsers,getUser,updateUser,deleteUser,register,login} from '../api/UserApi';

export const getAllUserAction = (offset,limit,count)=>{
    return async(dispatch)=>{
        try {
            dispatch({type:GET_ALL_USER_START});
        let result = await getUsers(offset,limit,count);
        dispatch({type:GET_ALL_USER_SUCCESS,payload:result});
        } catch (error) {
            dispatch({type:GET_ALL_USER_FAIL,payload:error})
        }
    }
}

export const loginUser = (username,password)=>{
    return async (dispatch)=>{
        try {
            dispatch({type:LOGIN_USER_START});
            let result = await login(username,password);
            dispatch({type:LOGIN_USER_SUCCESS,paylaod:result})
        } catch (error) {
            dispatch({type:LOGIN_USER_FAIL,payload:error})
        }
    }
}


export const getByIdUserAction = (id) => {
    return async(dispatch)=>{
        try {
            dispatch({type:GETBYID_USER_START});
            let response = await getUser(id);
            dispatch({type:GETBYID_USER_SUCCESS,payload:response});
        } catch (error) {
            dispatch({type:GETBYID_USER_FAIL,payload:error});
        }
    }
} 

export const registerUserAction = (   
    name,
    surname,
    username,
    email,
    password,
    isDeleted,
    isNotusing,
    ownerId) =>{
    return async(dispatch) =>{
        try {
            dispatch({type:CREATE_USER_START});
            let response = await register(   
                name,
                surname,
                username,
                email,
                password,
                isDeleted,
                isNotusing,
                ownerId);
                dispatch({type:CREATE_USER_SUCCESS,payload:response});
        } catch (error) {
            dispatch({type:CREATE_USER_FAIL,payload:error});
        }
    }
}

export const updateUserAction = (   
    id,
    name,
    surname,
    username,
    email,
    password,
    isDeleted,
    isNotusing,
    ownerId) =>{
    return async(dispatch) =>{
        try {
            dispatch({type:UPDATE_USER_START});
            let response = await updateUser(   
                id,
                name,
                surname,
                username,
                email,
                password,
                isDeleted,
                isNotusing,
                ownerId);
                dispatch({type:UPDATE_USER_SUCCESS,payload:response});
        } catch (error) {
            dispatch({type:UPDATE_USER_FAIL,payload:error});
        }
    }
}

export const deleteUserAction = (id)=>{
    return async(dispatch)=>{
        try {
            dispatch({type:DELETE_USER_START});
            let response = await deleteUser(id);
            dispatch({type:DELETE_USER_SUCCESS,paylaod:response});
        } catch (error) {
            dispatch({type:DELETE_USER_FAIL,paylaod:error});
        }
    }
}