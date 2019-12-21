import {
    GET_ALL_NOTE_START,
    GET_ALL_NOTE_SUCCESS,
    GET_ALL_NOTE_FAIL,
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
        default:
            return state;
    }
}