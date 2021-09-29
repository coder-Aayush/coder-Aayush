import type { NextPage } from 'next'
import About from '../components/About/About'
import {Contact} from '../components/Contacts/Contact'
import Footer from '../components/Footer/Footer'
import Intro from '../components/Intro/Intro'
import NavBar from '../components/navbar'
import Project from '../components/projects/Project'
import Skills from '../components/Skills/Skills'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <header className="h-screen">
        <NavBar></NavBar>
        <Intro></Intro>
      </header>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
