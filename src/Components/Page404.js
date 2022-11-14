import React, { useRef, useState } from 'react'
import useWindowDimensions from './useWindowDimensions';
import { coverImage } from "./data"
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Search = () => {

  const [spotlightSize, setSpotlightSize] = useState("transparent 160px, rgba(0, 0, 0, 0.78) 200px)")
  const spotlightRef = useRef();
  const { height, width } = useWindowDimensions();
  const spotlightMove = (e) => {
    if (width > 100) {
      updateSpotlight(e, spotlightSize);
    }
  }
  const spotlightDown = (e) => {
    if (width > 1000) {
      let spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';
      setSpotlightSize(spotlightSize)
    }
  }
  const spotlightUp = (e) => {
    if (width > 1000) {
      let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.78) 200px)';
      setSpotlightSize(spotlightSize)
    }
  }
  const spotlightEnter = (e) => {
    if (width > 1000) {
      let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.78) 200px)';
      setSpotlightSize(spotlightSize)
      spotlightRef.current.classList.remove("spotlight__inactive")
    }
  }
  const spotlightLeave = (e) => {
    if (width > 1000) {
      let spotlightSize = 'transparent 50px, rgba(0, 0, 0, 0.78) 200px)';
      setSpotlightSize(spotlightSize)
      spotlightRef.current.style.backgroundImage = `radial-gradient(circle at ${50}% ${50}%, ${spotlightSize}`;
      spotlightRef.current.classList.add("spotlight__inactive")
    }
  }
  function updateSpotlight(e, spotlightSize) {
    if (width > 1000) {
      spotlightRef.current.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
    }
  }
  return (
    <div className='search' style={{ marginBottom: "-40px" }}>
      <div className='search__image'
        onMouseMove={(e) => spotlightMove(e)}
        onMouseDown={(e) => spotlightDown(e)}
        onMouseUp={(e) => spotlightUp(e)}
        onMouseEnter={(e) => spotlightEnter(e)}
        onMouseLeave={(e) => spotlightLeave(e)}>
        <img src={coverImage} alt='cover' />
        <div ref={spotlightRef} className="spotlight spotlight__inactive"></div>
        <div className='page404'>
          <span>Ooops...</span>
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
          <div className='navbar__right--getStarted'>
            <Link to="/">
            <Button variant="contained" >Go Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search   