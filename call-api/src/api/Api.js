import axios from "axios";
import {API_URL} from '../contants/Config'


export default function callApi(endpoint, method = 'GET', body){
    return  axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body
      }).catch(e =>{
          console.log(e);
    });
};