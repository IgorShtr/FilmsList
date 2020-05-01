import React, { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";

import {Layout} from './common/layout';
import { mediaMobile } from '../styledMediaBrakepoints';
import {MoviesList} from '../components/moviesList';




export const FilmDetails = (props) => {
  // const { movie_id} = props;
  const { id } = useParams();
  // console.log(id)
  const [movieInfo, setMovieInfo] = useState({});
  // const [recomendedMovies, setRecomendedMovies] = useState();
  const api_key = "c215f1cdd43fb62b0e5a94539084aae9";
  useLayoutEffect(()=>{
       const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US `
    axios.get(url).then(result => {
      // console.log(result.data)
      setMovieInfo(result.data);
    });
  
  },[id])



  const { original_title, original_language, overview, runtime, poster_path, genres } = movieInfo && movieInfo;

  const movieGenresList = genres && genres.map(({ name }) => name);
  const ganresList = genres && movieGenresList.map(item => (
    <p key={uuidv4()}>{item}</p>
  ));

 
  return(
    <Layout>
      <MovieDitails > 
        <MovieCommon>
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="not found"></img>
        <MovieData>     
              <p>{original_title}</p>
              <ExectData>
                <p>Owerviev</p>
                <p>{overview}</p>
              </ExectData>
              <ExectData>
                <p>Genre</p>
                <div>
                  {ganresList}
                </div>
              </ExectData>
              <ExectData>
                <p>Runtime</p>
                <p>{runtime}min</p>
              </ExectData>
            </MovieData>
            </MovieCommon>      
        <RecomendedSection>
          <div>Recomended</div>
          <MoviesList  api_key={api_key} dataKey={"recommendations"} id={id} />
      </RecomendedSection>
    </MovieDitails>
  </Layout>
 
  )
};

const MovieDitails = styled.div`
padding-top: 10px;
padding-bottom: 10px;
width: 100%;
height: 100%;
background-color:black;
color: white;
display:flex;
flex-direction:column;
${mediaMobile(`
flex-direction:column;
align-items: center;
`)}
& img {  
  margin: 0 10px;
  width: 180px;
  height: 230px;
  border: 1px solid grey;
}

`
const MovieCommon = styled.div`
display:flex;
${mediaMobile(`
flex-direction:column;
align-items: center;
`)}
`
const MovieData = styled.div`
display: flex;
flex-direction: column;
align-items:center;
>p{
  font-size: 26px;
  font-weight: bold;
}
`
const ExectData = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
 & p{ 
  margin: 0;
  padding: 3px 5px;
  font-size: 12px;
 }
 & p:first-child{
  text-align:left;
  vertical-align:middle;
 font-weight: bold;
 width: 55px;
 }
 & div{
display:flex;
& p{
  font-weight: 400 !important; 
}
 }
 & p:last-child{
  text-align:left;
  }
`
const RecomendedSection = styled.div`
 margit-top: 30px;
 >div{
   margin: 20px auto;
   width: fit-content;
  font-weight: 500;
  font-size: 18px;
 }
`