import React from 'react'
import Skip from '../components/Skip'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import Site from '../components/Site'
import Port from '../components/Port'
import Contact from '../components/Contact'
import Foot from '../components/Foot'

const HomeView = () => {
  return (
    <>
      <Skip />
      <Header/>
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </Main>
      <Foot /> 
    </>
  )
}

export default HomeView
