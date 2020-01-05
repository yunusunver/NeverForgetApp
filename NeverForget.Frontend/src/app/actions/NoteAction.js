import {
    GET_ALL_NOTE_START,
    GET_ALL_NOTE_SUCCESS,
    GET_ALL_NOTE_FAIL,
    GETBYID_NOTE_START,
    GETBYID_NOTE_SUCCESS,
    GETBYID_NOTE_FAIL,
    CREATE_NOTE_START,
    CREATE_NOTE_SUCCESS,
    CREATE_NOTE_FAIL,
    UPDATE_NOTE_START,
    UPDATE_NOTE_SUCCESS,
    UPDATE_NOTE_FAIL,
    DELETE_NOTE_START,
    DELETE_NOTE_SUCCESS,
    DELETE_NOTE_FAIL
} from '../actions/Types';
import {getNotes,updateNote,createNote,getById,deleteNote} from '../api/NoteApi';

export const getAllNotes=(offset,limit,count=true,categoryname)=>{
    return async(dispatch)=>{
        try {
            dispatch({type:GET_ALL_NOTE_START});
            let result = await getNotes(offset,limit,count,categoryname);
            dispatch({type:GET_ALL_NOTE_SUCCESS,payload:result})
        } catch (error) {
            dispatch({type:GET_ALL_NOTE_FAIL,payload:error});
        }
    }
}

export const createLookupAction=(categoryId,name,Description,userId,isDeleted,Code)=>{
    return async(dispatch)=>{
        try {
            dispatch({type:CREATE_NOTE_START});
            let result = await createNote(categoryId,name,Description,userId,isDeleted,Code);
            dispatch({type:CREATE_NOTE_SUCCESS,paylaod:result})
        } catch (error) {
            dispatch({type:CREATE_NOTE_FAIL,payload:error});
        }
    }
}

export const updateNoteAction=(id,categoryId,name,Description,userId,isDeleted,Code)=>{
    return async(dispatch)=>{
        try {
            dispatch({type:UPDATE_NOTE_START});
            let result = await updateNote(id,categoryId,name,Description,userId,isDeleted,Code);
            dispatch({type:UPDATE_NOTE_SUCCESS,paylaod:result})
        } catch (error) {
            dispatch({type:UPDATE_NOTE_FAIL,payload:error});
        }
    }
}

export const deleteNoteAction=(id)=>{
    return async(dispatch)=>{
        try {
            dispatch({type:DELETE_NOTE_START});
            let result = await deleteNote(id);
            dispatch({type:DELETE_NOTE_SUCCESS,paylaod:result})
        } catch (error) {
            dispatch({type:DELETE_NOTE_FAIL,payload:error});
        }
    }
}

export const getByIdNoteAction=(id)=>{
    return async(dispatch)=>{
        try {
            dispatch({type:GETBYID_NOTE_START});
            let result = await getById(id);
            dispatch({type:GETBYID_NOTE_SUCCESS,paylaod:result})
        } catch (error) {
            dispatch({type:GETBYID_NOTE_FAIL,payload:error});
        }
    }
}