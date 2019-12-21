import {
    GET_ALL_LOOKUP_START,
    GET_ALL_LOOKUP_SUCCESS,
    GET_ALL_LOOKUP_FAIL,
} from '../actions/Types';
import {getLookup} from '../api/LookupApi';
export const getAll=()=>{
    return async(dispatch)=>{
        try {
            dispatch({type:GET_ALL_LOOKUP_START});
            let result = await getLookup();
            dispatch({type:GET_ALL_LOOKUP_SUCCESS,payload:result})
        } catch (error) {
            dispatch({type:GET_ALL_LOOKUP_FAIL,payload:error});
        }
    }
}