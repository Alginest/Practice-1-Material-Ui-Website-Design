import { CssBaseline } from '@mui/material'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Hero />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
