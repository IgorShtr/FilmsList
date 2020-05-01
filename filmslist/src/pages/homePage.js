import React, { useState, useLayoutEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ScrollUpButton from "react-scroll-up-button";
import styled from 'styled-components';

//store
import {setAvalibleGenres} from '../store/genres';
import {setIncreasePaginationPage,
          setReducePaginationPage} from '../store/genres';
 //components
  import {Layout} from '../components/common/layout';
  import {MoviesList} from '../components/moviesList';

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
    <Layout>   
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
      <ScrollUpButton 
        StopPosition={0}
        ShowAtPosition={900}
        EasingType='easeOutCubic'
        AnimationDuration={500}
        ContainerClassName='ScrollUpButton__Container'
        TransitionClassName='ScrollUpButton__Toggled'
        style={{}}
        ToggledStyle={{}}/>
    </Layout>
  );
});


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
