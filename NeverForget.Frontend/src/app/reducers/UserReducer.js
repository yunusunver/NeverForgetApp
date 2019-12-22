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
} from '../actions/Types';

const initialState = {
    data:[],
    loading:false,
    error:""
};

export default (state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_USER_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case GET_ALL_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case GET_ALL_USER_FAIL:
            return{
                ...state,
                loading:false,
                error:"Error",
                data:[]
            }
            case GETBYID_USER_START:
                return{
                    ...state,
                    loading:true,
                    error:"",
                    data:[]
                }
            case GETBYID_USER_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    error:"",
                    data:action.payload
                }
            case GETBYID_USER_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:"Error",
                    data:[]
                }
                    case GET_ALL_USER_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case GET_ALL_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case GET_ALL_USER_FAIL:
            return{
                ...state,
                loading:false,
                error:"Error",
                data:[]
            }
        case CREATE_USER_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case CREATE_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case CREATE_USER_FAIL:
            return{
                ...state,
                loading:false,
                error:"Error",
                data:[]
            }
        case UPDATE_USER_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case UPDATE_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case UPDATE_USER_FAIL:
            return{
                ...state,
                loading:false,
                error:"Error",
                data:[]
            }
        case DELETE_USER_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case DELETE_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case DELETE_USER_FAIL:
            return{
                ...state,
                loading:false,
                error:"Error",
                data:[]
            }
        case LOGIN_USER_START:
            return{
                ...state,
                loading:true,
                error:"",
                data:[]
            }
        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.payload
            }
        case LOGIN_USER_FAIL:
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