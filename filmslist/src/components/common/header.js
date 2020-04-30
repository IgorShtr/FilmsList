import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export const Header = () => {
  const api_key = "c215f1cdd43fb62b0e5a94539084aae9";
  const movieSerch = (e) =>{
    let value = e.target.value
    const url =`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&query=${value}`
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
  return (<>
    <LayoutHeader  >
      <p>Best movies</p>
    </LayoutHeader>
    <SerchBlock>
      <p>Get movie by title</p>
      <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
      <Serchinput onChange={movieSerch} type="text"></Serchinput>
    </SerchBlock>
    </>
  )
};

const LayoutHeader = styled.div`
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
 margin-left: 5px;
 `