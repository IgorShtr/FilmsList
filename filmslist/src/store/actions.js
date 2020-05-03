export const AVILIBLE_GENRES = "AVILIBLE_GENRES"

export const avalibleGenres = payload =>({
  type:AVILIBLE_GENRES,
  payload
});

export const INCREASE_PAGINATION_PAGE = "INCREASE_PAGINATION_PAGE"

export const increasePaginationPage = () =>({
  type:INCREASE_PAGINATION_PAGE,
 
});
export const REDUCE_PAGINATION_PAGE = "REDUCE_PAGINATION_PAGE"

export const reducePaginationPage = () =>({
  type:REDUCE_PAGINATION_PAGE,
 
});