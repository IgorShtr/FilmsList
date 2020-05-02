import React from 'react';
import styled from 'styled-components';

import {Header} from './header';
import {Footer} from './footer'

export const Layout = props =>{
  return(
    <MainLayout>
      <Header/>
      <main className="content">{props.children}</main>
      <Footer/>
    </MainLayout>
  )
}

const MainLayout = styled.div`
display:flex;
flex-direction: column;
min-height: 100%
width: 100vw;
height: 100%;
background-color: black;
& .content {
  flex-grow:1;
}
`;