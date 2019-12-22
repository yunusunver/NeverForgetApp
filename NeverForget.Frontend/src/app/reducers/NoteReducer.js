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
    DELETE_NOTE_FAIL,
} from '../actions/Types';

const initialState = {
    data:[],
    loading:false,
    error:""
};

export default (state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_NOTE_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case GET_ALL_NOTE_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case GET_ALL_NOTE_FAIL:
            return{
                ...state,
                loading:false,
                error:"Error",
                data:[]
            }
        case GETBYID_NOTE_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case GETBYID_NOTE_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case GETBYID_NOTE_FAIL:
            return{
                ...state,
                loading:false,
                error:"Error",
                data:[]
            }
        case CREATE_NOTE_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case CREATE_NOTE_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case CREATE_NOTE_FAIL:
            return{
                ...state,
                loading:false,
                error:"Error",
                data:[]
            }
        case UPDATE_NOTE_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case UPDATE_NOTE_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case UPDATE_NOTE_FAIL:
            return{
                ...state,
                loading:false,
                error:"Error",
                data:[]
            }
        case DELETE_NOTE_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case DELETE_NOTE_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case DELETE_NOTE_FAIL:
            return{
                ...state,
                loading:false,
                error:"Error",
                data:[]
            }
        default:
            return state;
    }
}