import React, {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import {connect} from 'react-redux';
import { useLocation} from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const MapStateToProps = store =>({
  api_key: store.ganres.api_key
}); 

export const Header =connect (MapStateToProps) (props => {
  const {api_key} = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [ searchResult, setSearchResult] = useState([]);
  const [ openDroplist, setOpenDroplist] = useState(false);
  const [ timer, setTimer] = useState(0);
  const {pathname} = useLocation();
  console.log(pathname.includes("movieDetales"));
  useEffect(()=>{     
    if (searchQuery.length===0) {      
      clearTimeout( timer);
      setSearchResult([]);
      setOpenDroplist(false);
    }
    else if (searchQuery.length>3){      
      const url =`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&query=${searchQuery}`
      const timeout = setTimeout(() => {    
      axios
        .get(url)
         .then(result => {     
         
          setSearchResult(result.data.results);
         (result.data.total_results)  ? setOpenDroplist(true) :setOpenDroplist(false);
         
        })
        .catch(err => {
          console.log(err);
        });
    }, 1500);
    setTimer(timeout)
    }      
  }
  ,[searchQuery]);

const serchResultList = searchResult && searchResult.map(({id, title, vote_average})=>{
  return (
   <Linck to={`/movieDetales/${id}`} key={uuidv4()} >
      <SerchListItem onClick={()=>setOpenDroplist(false)} >    
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
     <Info>
       {pathname.includes("movieDetales") ? <LinckToMain to='/FilmsList'>
          <p>&#8617; Back to main</p>
         </LinckToMain> : <div></div>}
        
        <SerchBlock>
        <p>Movie search</p>
        <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
          <Serchinput 
            onChange={(e)=>setSearchQuery(e.target.value)}
            type="text">         
          </Serchinput>
        {( openDroplist) ? (
          <SerchResultsCont>
            <ul>
              {serchResultList}
            </ul>        
          </SerchResultsCont>) : null}
      </SerchBlock>      
    </Info>          
  
  </HederContainer>  

    </>
  )
});

const HederContainer = styled.div`
display: flex;
flex-direction: column;
background-color: DarkSlateGray;
margin-bottom: 20px;
color: lightgrey;
`
const LayoutHeader = styled.div`
display: flex;
justify-content: center;
& p {
  margin 0;
  text-transform: uppercase;
  font-weight: bold;  
  padding: 10px 5px;
  font-size: 36px;
}
`
const Info = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
`
const LinckToMain = styled(NavLink)`
text-decoration:none;
color: lightgrey;
height: fit-content;
 margin: 10px 5px;
p{
  margin: 0;
}
`
const SerchBlock = styled.div`
  margin: 10px 5px;
 position: relative;
 & p{
   margin: 0;
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