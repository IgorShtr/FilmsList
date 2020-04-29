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
  return (
    <Container className="App">
      <Header className="App-header">
        <p>Best movies</p> 
      </Header>
      <MoviesData>        
        <MoviesList api_key={api_key} setPagesQuantity={setPagesQuantity} />
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
const MoviesData = styled.div`
display: flex;
// justify-content: space-around;
// justify-content: start;
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
