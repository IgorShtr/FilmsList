const AVILIBLE_GENRES = "AVILIBLE_GENRES"

const avalibleGenres = payload =>({
  type:AVILIBLE_GENRES,
  payload
});

const INCREASE_PAGINATION_PAGE = "INCREASE_PAGINATION_PAGE"

const increasePaginationPage = () =>({
  type:INCREASE_PAGINATION_PAGE,
 
});
const REDUCE_PAGINATION_PAGE = "REDUCE_PAGINATION_PAGE"

const reducePaginationPage = () =>({
  type:REDUCE_PAGINATION_PAGE,
 
});

const initialState = {
  ganresList:[],
  paginationPage: 1

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

export const setAvalibleGenres = () => async dispatch =>{
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c215f1cdd43fb62b0e5a94539084aae9&language=en-US`);
  const json = await res.json();
  // console.log(json)
  dispatch(avalibleGenres(json.genres))
};

export const setIncreasePaginationPage = ()=>dispatch=>{
  dispatch(increasePaginationPage());
}
export const setReducePaginationPage = ()=>dispatch=>{
  dispatch(reducePaginationPage());
}