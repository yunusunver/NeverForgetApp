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

const initialState = {
    data:[],
    loading:false,
    error:""
};

export default (state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_LOOKUP_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case GET_ALL_LOOKUP_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case GET_ALL_LOOKUP_FAIL:
            return{
                ...state,
                loading:false,
                error:"Error",
                data:[]
            }
        case GETBYID_LOOKUP_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case GETBYID_LOOKUP_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case GETBYID_LOOKUP_FAIL:
            return{
                ...state,
                loading:false,
                error:"Error",
                data:[]
            }
        case CREATE_LOOKUP_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case CREATE_LOOKUP_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case CREATE_LOOKUP_FAIL:
            return{
                ...state,
                loading:false,
                error:"Error",
                data:[]
            }
        case UPDATE_LOOKUP_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case UPDATE_LOOKUP_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case UPDATE_LOOKUP_FAIL:
            return{
                ...state,
                loading:false,
                error:"Error",
                data:[]
            }
        case DELETE_LOOKUP_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case DELETE_LOOKUP_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case DELETE_LOOKUP_FAIL:
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