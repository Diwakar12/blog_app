import {
    LATEST_ARTICLES_SUCCESS,
    LATEST_ARTICLES_FAIL,
    LATEST_ARTICLES_REQUEST,
    SELECTED_ARTICLES_SUCCESS,
    SELECTED_ARTICLES_FAIL,
    SELECTED_ARTICLES_REQUEST
} from '../actionTypes';

import request from '../../api'

export const getLatestArticles = () => async (dispatch) => {
    try {
       dispatch({
          type: LATEST_ARTICLES_REQUEST,
       })       
       const { data } = await request('/posts');       
       dispatch({
          type: LATEST_ARTICLES_SUCCESS,
          payload: data
       })
    } catch (error) {
       console.log(error.message)
       dispatch({
          type: LATEST_ARTICLES_FAIL,
          payload: error.message,
       })
    }
 }

 export const getArticlesById = id => async dispatch => {
   try {
      dispatch({
         type: SELECTED_ARTICLES_REQUEST,
      })

      const { data } = await request('/posts', {
         params: {            
            id: id,
         },
      })
      dispatch({
         type: SELECTED_ARTICLES_SUCCESS,
         payload: data[0],
      })
   } catch (error) {      
      dispatch({
         type: SELECTED_ARTICLES_FAIL,
         payload: error.message,
      })
   }
}