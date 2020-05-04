import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { connect } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';



const MapStateToProps = store => ({
  ganresList: store.ganres.ganresList,
  paginationPage: store.ganres.paginationPage,
  api_key: store.ganres.api_key
})

export const MoviesList = connect(MapStateToProps)(props => {
  const [moviesList, setMoviesList] = useState([]);
  const [isRecomendationsAvailable, setIsRecomendationsAvailable] = useState(true);
  const { api_key,
    setPagesQuantity,
    paginationPage,
    dataKey,
    id,
    ganresList } = props;
  const movieId = id ? `${id}/` : "";
  useEffect(() => {

    const url = `https://api.themoviedb.org/3/movie/${movieId}${dataKey}?api_key=${api_key}&language=en-US&page=${paginationPage}`;

    axios.get(url).then(result => {
      (result.data.total_results) && setIsRecomendationsAvailable(false);
      setMoviesList(result.data.results);
      setPagesQuantity && setPagesQuantity(result.data.total_pages)
    });
  }, [paginationPage]);
  const moviesListVariants = id ? (moviesList.slice(0, 6)) : moviesList
  const list = moviesListVariants.map(({ title, id, poster_path, vote_average, genre_ids }) => {
    const movieGanres = genre_ids.map(item => ganresList.filter(({ id }) => id === item).map(({ name }) => name)[0]);
    const genres = movieGanres.map(item => (
      <p key={uuidv4()}>{item}</p>
    ));

    return (
      <MovieBreff key={id} height={props.height} width={props.width}>
        <Linck to={`/movieDetales/${id}`}>
          <Title width={props.width}>
            <p className="movieTille">{title}</p>
          </Title>
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="not found"></img>
          <ItemFooter width={props.width}>
            <Reiting >
              <p>{`Reting  ${vote_average}`}</p>
            </Reiting>
            <Ganres>
              {genres}
            </Ganres>
          </ItemFooter>
        </Linck>
      </MovieBreff>
    )
  }
  )

  return <AllMovies>{!isRecomendationsAvailable ? list :
    (<p>
      No related movies for recommendations
    </p>)}
  </AllMovies>

});

const AllMovies = styled.div`
display: flex;
flex-wrap:wrap;
justify-content: center;

`
const Linck = styled(NavLink)`
text-decoration:none;
`

const MovieBreff = styled.div`
 background: lightgrey;
 margin-left: 10px;
 margin-bottom: 20px; 
 width: ${props => props.width ? props.width : "210px"};
 & img{
  display: block;
  margin: 0 auto; 
  width:95%;
  height:${props => (props.height ? props.height : "290px")} ;
 }
 & :hover .movieTille{
  text-decoration: underline;
}
`
const Title = styled.div`
color: black;
font-weight: bold;
padding-left: 5px;
width: ${props => props.width ? props.width * 0.9 : "200px"};
 font-size: ${props => props.width ? "12px" : "16px"};  
 p{ 
  width:inherit;
  text-overflow: ellipsis;
  height: 21px;
  overflow:hidden;
  white-space: nowrap; 
  color: DarkSlateGray;
}`

const Reiting = styled.div`
>p{
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
  color:black;
}
`
const Ganres = styled.div`
display: flex;
width: 100px;
flex-wrap: wrap;
>p{
  font-size: 12px; 
  margin: 0 2px;
  color:black;
}
`
const ItemFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
