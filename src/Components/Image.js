import React, { useState } from 'react'

const Image = ({ img }) => {
    const [showDetail,setShowDetail]=useState(false);
    return (
        <div className='image' 
        onTouchStart={()=>setShowDetail(true)} 
        onTouchEnd={()=>setShowDetail(false)}
        onMouseEnter={()=>setShowDetail(true)}
        onMouseLeave={()=>setShowDetail(false)}>
            <img src={img.img_url} alt={img.img_detail} />
            <div className='image__detail' style={{display:showDetail?"flex":"none"}}>
                <span>
                    {img.img_detail}
                </span>
            </div>
        </div>
    )
}

export default Image