import React ,{useEffect} from 'react';
import Navbar from './components/navbar';
import {setLoad} from './reducer/action';
import { useDispatch, useSelector } from "react-redux";
import Skills from './components/Skills';
import './App.css';
import Projects from './components/Projects';
import Main from './components/Main';
import About from './components/About';
import Particle from '../src/background_particles/particles';
import Footer from './components/footer';
import Spinner from './loading_spinner/Spinner';

import Contact from './components/contact';


const App = () => {
  const isLoading = useSelector(state => state.user.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    
    setTimeout(() => {dispatch(setLoad())}, 5000);
  });

  return(
    
isLoading ?
  <Spinner/> :  ( 
    <div  className='app'>
    <Particle/>
     <Navbar/>
<Main/>
<Skills/>
<Projects/>
<About/>
<Footer/>
<Contact/>
    </div>
  
  )
  )
}

export default App;
