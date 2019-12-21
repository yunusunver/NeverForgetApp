import {
    GET_ALL_NOTE_START,
    GET_ALL_NOTE_SUCCESS,
    GET_ALL_NOTE_FAIL,
} from '../actions/Types';
import {getNotes} from '../api/NoteApi'
export const getAll=()=>{
    return async(dispatch)=>{
        try {
            dispatch({type:GET_ALL_NOTE_START});
            let result = await getNotes();
            dispatch({type:GET_ALL_NOTE_SUCCESS,payload:result})
        } catch (error) {
            dispatch({type:GET_ALL_NOTE_FAIL,payload:error});
        }
    }
}