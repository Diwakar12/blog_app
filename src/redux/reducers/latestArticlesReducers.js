import {
    LATEST_ARTICLES_SUCCESS,
    LATEST_ARTICLES_FAIL,
    LATEST_ARTICLES_REQUEST,
    SELECTED_ARTICLES_SUCCESS,
    SELECTED_ARTICLES_FAIL,
    SELECTED_ARTICLES_REQUEST
} from '../actionTypes';

export const latestArticlesReducer = (
    state = {
       articles: [],
       loading: false,     
    },
    action
 ) => {
    const { type, payload } = action
 
    switch (type) {
       case LATEST_ARTICLES_SUCCESS:           
          return {
             ...state,
             articles: payload, 
             loading: false,             
          }
 
       case LATEST_ARTICLES_FAIL:
          return {
             ...state,
             loading: false,
             error: payload,
          }
       case LATEST_ARTICLES_REQUEST:
          return {
             ...state,
             loading: true,
          }
       default:
          return state
    }
 }

 export const selectedArticlesReducer = (
   state = {
      loading: true,
      articles: null,
   },
   action
) => {
   const { payload, type } = action

   switch (type) {
      case SELECTED_ARTICLES_REQUEST:
         return {
            ...state,
            loading: true,
         }
      case SELECTED_ARTICLES_SUCCESS:         
         return {
            ...state,
            articles: payload,
            loading: false,
         }
      case SELECTED_ARTICLES_FAIL:
         return {
            ...state,
            articles: null,
            loading: false,
            error: payload,
         }

      default:
         return state
   }
}