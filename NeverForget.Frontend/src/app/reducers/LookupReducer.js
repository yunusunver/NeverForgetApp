import {
    GET_ALL_LOOKUP_START,
    GET_ALL_LOOKUP_SUCCESS,
    GET_ALL_LOOKUP_FAIL,
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
        default:
            return state;
    }
}