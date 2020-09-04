import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getArticle } from '../Store/action';
import '../Styles/home.style.css';
import { Link } from 'react-router-dom';

import Button from '../Components/Button.component';
import video from '../assets/video.mp4';

function Home(){

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getArticle())
  },dispatch);

  return(
    <div className='home-container'>
      <video src={video} autoPlay loop muted/>
      <div className='text-container'>
        <h1>Read, Ask, Connect, Learn.</h1>
      </div>
      <Link to='/articles'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </Link>
    </div>
  )
}

export default Home
