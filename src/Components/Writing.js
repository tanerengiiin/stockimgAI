import React from 'react'
import Typewriter from 'typewriter-effect';

const Writing = () => {


  return (
    <div className='writing'>
        Generate original
        <Typewriter
        options={{
            autoStart:true,
            loop:true,
            delay:180,
            strings:[
                "book cover",
                "stock image",
                "logo",
                "illustration",
                "poster",
                "web & mobile ui",
                "wallpaper"
            ],
            deleteSpeed:120
        }}
        />
    </div>
  )
}

export default Writing