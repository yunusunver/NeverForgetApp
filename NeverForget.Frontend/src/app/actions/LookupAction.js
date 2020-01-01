import {
    GET_ALL_LOOKUP_START,
    GET_ALL_LOOKUP_SUCCESS,
    GET_ALL_LOOKUP_FAIL,
    GETBYID_LOOKUP_START,
    GETBYID_LOOKUP_SUCCESS,
    GETBYID_LOOKUP_FAIL,
    CREATE_LOOKUP_START,
    CREATE_LOOKUP_SUCCESS,
    CREATE_LOOKUP_FAIL,
    UPDATE_LOOKUP_START,
    UPDATE_LOOKUP_SUCCESS,
    UPDATE_LOOKUP_FAIL,
    DELETE_LOOKUP_START,
    DELETE_LOOKUP_SUCCESS,
    DELETE_LOOKUP_FAIL,
} from '../actions/Types';

import {getLookup,createLookup,updateLookup,deleteLookup,getById} from '../api/LookupApi';

export const getAll=(offset,limit,count)=>{
    return async(dispatch)=>{
        try {
            dispatch({type:GET_ALL_LOOKUP_START});
            let result = await getLookup(offset,limit,count);
            dispatch({type:GET_ALL_LOOKUP_SUCCESS,payload:result})
        } catch (error) {
            dispatch({type:GET_ALL_LOOKUP_FAIL,payload:error});
        }
    }
}

export const createLookupAction=(name,description,type,parentId,isDeleted,order)=>{
    return async(dispatch)=>{
        try {
            dispatch({type:CREATE_LOOKUP_START});
            let result = await createLookup(name,description,type,parentId,isDeleted,order);
            dispatch({type:CREATE_LOOKUP_SUCCESS,paylaod:result})
        } catch (error) {
            dispatch({type:CREATE_LOOKUP_FAIL,payload:error});
        }
    }
}

export const updateLookupAction=(id,name,description,type,parentId,isDeleted,order)=>{
    return async(dispatch)=>{
        try {
            dispatch({type:UPDATE_LOOKUP_START});
            let result = await updateLookup(id,name,description,type,parentId,isDeleted,order);
            dispatch({type:UPDATE_LOOKUP_SUCCESS,paylaod:result})
        } catch (error) {
            dispatch({type:UPDATE_LOOKUP_FAIL,payload:error});
        }
    }
}

export const deleteLookupAction=(id)=>{
    return async(dispatch)=>{
        try {
            dispatch({type:DELETE_LOOKUP_START});
            let result = await deleteLookup(id);
            dispatch({type:DELETE_LOOKUP_SUCCESS,paylaod:result})
        } catch (error) {
            dispatch({type:DELETE_LOOKUP_FAIL,payload:error});
        }
    }
}

export const getByIdLookupAction=(id)=>{
    return async(dispatch)=>{
        try {
            dispatch({type:GETBYID_LOOKUP_START});
            let result = await getById(id);
            dispatch({type:GETBYID_LOOKUP_SUCCESS,paylaod:result})
        } catch (error) {
            dispatch({type:GETBYID_LOOKUP_FAIL,payload:error});
        }
    }
}