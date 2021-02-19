import React from 'react'

import styled from 'styled-components'

import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import Download from './pages/Download'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/download" component={Download}/>
      </Switch>
      <Footer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 0 2.5rem;
`



export default App;