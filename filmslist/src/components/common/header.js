import React, {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const Header = () => {
  const api_key = "c215f1cdd43fb62b0e5a94539084aae9";
  const [searchQuery, setSearchQuery] = useState("");
  const [ searchResult, setSearchResult] = useState([]);
  const [ openDroplist, setOpenDroplist] = useState(false);
  const [ timer, setTimer] = useState(0);

  useEffect(()=>{ 
   console.log(searchQuery)     
    if (searchQuery.length===0) {
      console.log("jkfhgljkafdhg")
      clearTimeout( timer);
      setSearchResult([]);
      setOpenDroplist(false);
    }
    else if (searchQuery.length>3){      
      const url =`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&query=${searchQuery}`
      const timeout = setTimeout(() => {
      console.log("request")
      axios
        .get(url)
         .then(result => {          
          console.log(result.data)
          setSearchResult(result.data.results);
          setOpenDroplist(true);
        })
        .catch(err => {
          console.log(err);
        });
    }, 2000);
    setTimer(timeout)
    }    
    // setTimeout(()=>console.log(value), 2000)   
  }
  ,[searchQuery]);

  const confirmSerch = ()=>{
    const input = document.querySelector("input");
    input.value = null;
    console.log(input)
    setOpenDroplist(false)}

const serchResultList = searchResult && searchResult.map(({id, title, vote_average})=>{
  return (
   <Linck to={`/movieDetales/${id}`} key={uuidv4()}>
      <SerchListItem  onClick = {confirmSerch}>    
          <p>{title}</p>
          <p>{vote_average}</p>       
      </SerchListItem>
  </Linck> )
});
  return (<>
  <HederContainer>
     <LayoutHeader >
      <p>Best movies</p>
    </LayoutHeader>
    <SerchBlock>
      <p>Get movie by title</p>
      <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
        <Serchinput 
          onChange={(e)=>setSearchQuery(e.target.value)}
          type="text">         
        </Serchinput>
      {(searchQuery.length>0 & openDroplist) ? (
        <SerchResultsCont>
          <ul>
            {serchResultList}
          </ul>        
        </SerchResultsCont>) : null}
    </SerchBlock>
  </HederContainer>  

    </>
  )
};

const HederContainer = styled.div`
 display: flex;
 flex-direction: column;
background-color: DarkSlateGray;
margin-bottom: 20px;
`
const LayoutHeader = styled.div`
display: flex;
justify-content: center;
& p {
  margin 0;
  color: white;
  text-transform: uppercase;
  font-weight: bold;  
  padding: 10px 5px;
  font-size: 36px;
}
`
const SerchBlock = styled.div`
 margin: 20px auto;
 position: relative;
 & p{
   margin: 0;
   color: white;
 }
`
const Serchinput = styled.input`
 margin-left: 5px;
 `
 const SerchResultsCont = styled.div`
 position: absolute;
 background-color: white;
 max-width: 100%;
 min-height: 0;
 & ul {
   padding: 5px;
   margin: 2px 0;
 }
 `
 const Linck = styled(NavLink)`
text-decoration:none;
`
 const SerchListItem = styled.li`
 display: flex;
 justify-content: space-between;
 &:hover {
   border: 0.5px solid lightgrey
 }
 & p{
   color: black;
   font-size: 12px;
   padding-bottom: 3px;
 }
 & p:first-child{
  max-width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
 & p:last-child{
   font-weight: bold;
 }
 `