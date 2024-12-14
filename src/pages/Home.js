import React from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import Homepage from '../components/Homepage';

const Home = () => {
  return (
    <>
    <Header />
    <GetStarted />
    <Homepage/>
    <GetInTouch />
    </>

  )
}

export default Home