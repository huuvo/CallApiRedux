import { call, put, takeEvery } from 'redux-saga/effects';
import {RECEIVE_API_PRODUCT_LIST_TO_DO, RECEIVE_API_PRODUCT_LIST_TO_DO_SUCCESS} from '../contants/ActionTypes';
import callApi from '../api/Api';

function* getApiProductListToDo(){
    console.log ('1')
    try{
        const products = yield call(callApi);
        yield put({
            type: RECEIVE_API_PRODUCT_LIST_TO_DO_SUCCESS,
            products: products
        });
    } catch (error) {
        console.log(error);
    }
}


export default function* mySaga(){
    yield takeEvery(RECEIVE_API_PRODUCT_LIST_TO_DO, getApiProductListToDo);
  
}