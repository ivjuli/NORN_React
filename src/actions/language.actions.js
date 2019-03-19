import {GET_LANGUAGE} from '../helpers/actionsConst';
import {getAllLanguage} from '../helpers/api';


export const getLanguage = async (dispatch)=>{
    const language = await getAllLanguage();
    dispatch( {
        type: GET_LANGUAGE,
        payload: language,
    } )
};