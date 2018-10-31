import * as types from "../contants/ActionTypes";



var product = (state = [], action) => {
    switch(action.type){
        case types.RECEIVE_API_PRODUCT_LIST_TO_DO:
            return action.product;
        default: 
            return state;
    }
}

export default product