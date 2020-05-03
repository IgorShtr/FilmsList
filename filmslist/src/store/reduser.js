import axios from 'axios';
import {avalibleGenres, 
        increasePaginationPage, 
        reducePaginationPage, 
        AVILIBLE_GENRES,
        INCREASE_PAGINATION_PAGE,
        REDUCE_PAGINATION_PAGE} from './actions';


const initialState = {
  ganresList:[],
  paginationPage: 1,
  api_key: "c215f1cdd43fb62b0e5a94539084aae9",

};

export function  moviesReduser (store = initialState, {type, payload}){
  switch (type){
    case AVILIBLE_GENRES:{
      return {
        ...store,
        ganresList: payload
      }
    }
    case INCREASE_PAGINATION_PAGE:{
      return {
        ...store,
        paginationPage: store.paginationPage+1
      }
    }
    case REDUCE_PAGINATION_PAGE:{
      return {
        ...store,
        paginationPage: store.paginationPage-1
      }
    }
    default:
      return store;

  }
}

export const setAvalibleGenres = () => dispatch =>{
  axios
  .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=c215f1cdd43fb62b0e5a94539084aae9&language=en-US`)
   .then(result => {     
   const {genres} =result.data;  
   dispatch(avalibleGenres(genres));   
  })
  .catch(err => {
    console.log(err);
  });
  
};

export const setIncreasePaginationPage = ()=>dispatch=>{
  dispatch(increasePaginationPage());
}
export const setReducePaginationPage = ()=>dispatch=>{
  dispatch(reducePaginationPage());
}