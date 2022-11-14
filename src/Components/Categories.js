import React from 'react'
import Button from '@mui/material/Button';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import IconButton from '@mui/material/IconButton';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ForestRoundedIcon from '@mui/icons-material/ForestRounded';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PanoramaHorizontalSelectRoundedIcon from '@mui/icons-material/PanoramaHorizontalSelectRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import CenterFocusStrongRoundedIcon from '@mui/icons-material/CenterFocusStrongRounded';
const Categories = () => {
    return (
        <div className='categories'>
            <div className='category'>
                <div className='category__icon'>
                    <IconButton aria-label="delete" size="large" style={{ background: "linear-gradient(200deg, rgba(113,197,238,1) 0%, rgba(2,80,145,1) 100%)" }}>
                        <StarRoundedIcon fontSize="inherit" />
                    </IconButton>
                    <div>Stock Image</div>
                </div>
                <div className='category__icon'>
                    <IconButton aria-label="delete" size="large" style={{ background: " linear-gradient(203deg, rgba(243,99,100,1) 0%, rgba(242,146,237,1) 100%)" }}>
                        <ImportContactsRoundedIcon fontSize="inherit" />
                    </IconButton>
                    <div>Book Cover</div>
                </div>
                <div className='category__icon'>
                    <IconButton aria-label="delete" size="large" style={{ background: "linear-gradient(203deg, rgba(18,179,235,1) 0%, rgba(84,96,249,1) 100%)" }}>
                        <CenterFocusStrongRoundedIcon fontSize="inherit" />
                    </IconButton>
                    <div>Logo</div>
                </div>
                <div className='category__icon'>
                    <IconButton aria-label="delete" size="large" style={{ background: " linear-gradient(203deg, rgba(135,82,163,1) 0%, rgba(98,116,231,1) 100%)" }}>
                        <AutoAwesomeRoundedIcon fontSize="inherit" />
                    </IconButton>
                    <div>Illustration</div>
                </div>
                <div className='category__icon'>
                    <IconButton aria-label="delete" size="large" style={{ background: "linear-gradient(203deg, rgba(234,84,89,1) 0%, rgba(247,186,44,1) 100%)" }}>
                        <PanoramaHorizontalSelectRoundedIcon fontSize="inherit" />
                    </IconButton>
                    <div>Poster</div>
                </div>
                <div className='category__icon'>
                    <IconButton aria-label="delete" size="large" style={{ background: "linear-gradient(203deg, rgba(141,233,213,1) 0%, rgba(50,196,192,1) 100%)" }}>
                        <DashboardRoundedIcon fontSize="inherit" />
                    </IconButton>
                    <div>Web & Mobile UI</div>
                </div>
                <div className='category__icon'>
                    <IconButton aria-label="delete" size="large" style={{ background: "linear-gradient(203deg, rgba(255,147,15,1) 0%, rgba(255,249,91,1) 100%)" }}>
                        <InsertPhotoRoundedIcon fontSize="inherit" />
                    </IconButton>
                    <div>Wallpaper</div>
                </div>
                

            </div>
        </div>
    )
}

export default Categories