// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from '../components/Navbar';
// import Cards from './components/cards';
// import Button from './components/Button';
import Slidebar from '../components/Slidebar';
// import Sideimage from './components/Sideimage';
// import Numbering from '../components/Numbering';
// import Smallcards from './components/smallcards';
import Cards2 from '../components/cards2';
import Cards3 from '../components/cards3';
// import Cards4 from './components/cards4';
// import Footer from '../components/Footer';
import Cards5 from '../components/cards5';
// import Jumbo from './components/jubo';
import Jumbot from '../components/jumbot'
import Jumbot2 from '../components/jumbot2'
import Jumbot3 from '../components/jumbot3'

function Home() {
  return (
    <>

  
     
     <Slidebar/>
     <hr></hr>
     <Jumbot/>
     <Jumbot2/>
     <Jumbot3/>
     {/* <Cards/> */}
     <hr></hr>
     {/* <Jumbo/> */}
     <div class="container">
  <p class="centered-text"><h2>Discover the World's Most Visited Gem: A Must-See Tourist Hotspot!</h2></p>
</div>

     {/* <Cards4/> */}
     {/* <hr></hr>
     <Button/> */}
     <hr></hr>
     <Cards5/>
     <hr></hr>
     <p className="centered-text"><h1>Behold the Majesty: Exploring the World's Most Magnificent Buildings ! ! !</h1></p>
     <hr></hr>
     {/* <Smallcards/>
     <Smallcards/>
     
     <Smallcards/>
     <Smallcards/>
     <Smallcards/> */}
     <Cards3/>
     {/* <Sideimage/> */}
     <hr></hr>
     <Cards2/>
     <hr></hr>
     {/* <Numbering/> */}
   
    {/* <Footer/> */}
     <></>
    
       </>
  )
}

export default Home
