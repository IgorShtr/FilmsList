import React, { useState, useLayoutEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {MoviesList} from '../components/moviesList';
import {FilmDetails} from '../components/filmDetails'
import styled from 'styled-components';

import {setAvalibleGenres} from '../store/genres';
import {setIncreasePaginationPage,
          setReducePaginationPage} from '../store/genres';

const MapStateToProps = store =>({
  ganresList: store.ganres,
  paginationPage: store.ganres.paginationPage

})  

export const  HomePage =connect(MapStateToProps, {setAvalibleGenres,setIncreasePaginationPage, setReducePaginationPage})(props=> {
   
  const [pagesQuantity, setPagesQuantity] = useState();
 const api_key = "c215f1cdd43fb62b0e5a94539084aae9";
const {paginationPage} = props
useLayoutEffect(()=>{
  props.setAvalibleGenres();
},[])

const movieSerch = (e) =>{
  let value = e.target.value
  const url =`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&query=${value}`
  // const url =`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&with_keywords=${value}&page=1`
  const timeoutId = setTimeout(() => {
    axios
      .get(url)
       .then(result => {
        console.log(result)
        // setSearchResults(products.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, 1000);
  setTimeout(()=>console.log(value), 2000)
 
}
  return (
    <Container className="App">
      <Header className="App-header">
        <p>Best movies</p> 
      </Header>
      <SerchBlock>
        <p>Get movie by title</p>
        <Serchinput onChange={movieSerch} type="text"></Serchinput>
      </SerchBlock>
      <MoviesData>        
        <MoviesList api_key={api_key} setPagesQuantity={setPagesQuantity} dataKey={"popular"}/>
        {/* <FilmDetails api_key={api_key} movie_id={311}/> */}
      </MoviesData>
      <NavyButtons>
        {paginationPage ===1 ? 
        <DeactivatedBytton/> :
        <LoadMore onClick={()=>props.setReducePaginationPage()}>&#171;</LoadMore>}
  <p>page {paginationPage} of {pagesQuantity}</p>
        <LoadMore onClick={()=>props.setIncreasePaginationPage()}>&#187;</LoadMore>
      </NavyButtons>
      
    </Container>
  );
});


const Container = styled.div`
display: flex;
flex-direction: column;
// aligin-items: center;
width: 100vw;
height: 100%;
background-color: black;
padding-bottom: 50px;

`
const Header = styled.header`
// margin: 0 auto;
display: flex;
justify-content: center;
& p {
  color: white;
  text-transform: uppercase;
  font-weight: bold; 
  // border: 1px solid black;
  padding: 10px 30px;
  font-size: 36px;
}
`
const SerchBlock = styled.div`
 margin: 20px auto;
 & p{

   color: white;
 }

`
 const Serchinput = styled.input`
 
 `
const MoviesData = styled.div`
display: flex;
align-items: center;
`
const NavyButtons = styled.div`
display: flex;
justify-content: center;
p{
  padding: 0 5px;
  color: white
}
`
const LoadMore = styled.button`
width: 40px;
margin: 0;
font-size: 36px;
text-align: center;
`
const DeactivatedBytton = styled.button`
width: 40px;
margin: 0;
font-size: 36px;
text-align: center;
`
