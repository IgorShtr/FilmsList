import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


export const Footer = () =>{
  return(
    <FooterContainer>
        <p> Designed by Igor Shakhter. All rights reserved &#169;</p>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
display: flex;
justify-content: center;
 background-color: DarkSlateGray; 
 margin-top: 20px;
 color: lightgrey;
`