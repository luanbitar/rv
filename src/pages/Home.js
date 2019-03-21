import React from 'react'

import NavBar from 'components/NavBar/NavBar'
import HomeBody from 'components/Home/HomeBody/HomeBody'
import HomeFooter from '../components/Home/HomeFooter/HomeFooter';

const Home = () => (
  <div className="main--container">
    <NavBar />
    <HomeBody />
    <HomeFooter />
  </div>
)

export default Home