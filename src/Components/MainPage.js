import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Images from './Images'
import Other from './Other'
import Search from './Search'
import useWindowDimensions from './useWindowDimensions'

const MainPage = () => {
  const [mainHeight,setMainHeight]=useState(0);
  const { height, width } = useWindowDimensions();
  useEffect(()=>{
    // low performance
    setMainHeight(document.querySelector(".navbar").clientHeight);
  },[width])
  return (
    <div className='mainPage' style={{marginTop:mainHeight}}>
      <Search />
      <Other/>
      <AnimatePresence>
        <Images />
      </AnimatePresence>
    </div>
  )
}

export default MainPage