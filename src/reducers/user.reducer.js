import { userConstants } from "../actions/constants";

const initialState = {
    error:null,
    message:"",
    load:false
};

export default(state = initialState,action)=>{
    switch(action.type){
        case userConstants.USER_REGISTER_REQUEST:
            state = {
                ...state,
                load:true
                
            }
            break;
            case userConstants.USER_REGISTER_SUCCESS:
                state={
                    ...state,
                    load:false,
                    message:action.payload.message
                }
                break;
                case userConstants.USER_REGISTER_FAILURE:
                state={
                    ...state,
                    load:false,
                    error:action.payload.error
                }
                break;
    }
    return state;
}

