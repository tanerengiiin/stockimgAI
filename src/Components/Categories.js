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
import { Badge } from '@mui/material';
const Categories = () => {
    return (
        <div className='categories'>
            <div className='category'>

                <div className='category__icon'>
                    <IconButton aria-label="delete" size="large" style={{ background: "linear-gradient(203deg, rgba(18,179,235,1) 0%, rgba(84,96,249,1) 100%)" }}>

                        <ImportContactsRoundedIcon fontSize="inherit" />
                    </IconButton>
                    <div>Book Cover</div>
                </div>
                <div className='category__icon'>
                    <IconButton aria-label="delete" size="large" style={{ background: "linear-gradient(203deg, rgba(255,147,15,1) 0%, rgba(255,249,91,1) 100%)" }}>
                        <InsertPhotoRoundedIcon fontSize="inherit" />
                    </IconButton>
                    <div >Wallpaper</div>
                </div>
                <div className='category__icon'>
                    <IconButton aria-label="delete" size="large" style={{ background: "linear-gradient(to right, #868f96 0%, #596164 100%)" }}>
                        <Badge color="secondary" badgeContent={"SOON"}>
                            <CenterFocusStrongRoundedIcon fontSize="inherit" />
                        </Badge>

                    </IconButton>
                    <div style={{ color: "#CCCCCC" }}>Logo</div>
                </div>
                <div className='category__icon'>
                    <IconButton aria-label="delete" size="large" style={{ background: "linear-gradient(to right, #868f96 0%, #596164 100%)" }}>

                        <Badge color="secondary" badgeContent={"SOON"}>
                            <AutoAwesomeRoundedIcon fontSize="inherit" />
                        </Badge>

                    </IconButton>
                    <div style={{ color: "#CCCCCC" }}>Illustration</div>
                </div>
                <div className='category__icon'>
                    <IconButton aria-label="delete" size="large" style={{ background: "linear-gradient(to right, #868f96 0%, #596164 100%)" }}>

                        <Badge color="secondary" badgeContent={"SOON"}>
                            <PanoramaHorizontalSelectRoundedIcon fontSize="inherit" />
                        </Badge>
                    </IconButton>
                    <div style={{ color: "#CCCCCC" }}>Poster</div>
                </div>
                <div className='category__icon'>
                    <IconButton aria-label="delete" size="large" style={{ background: "linear-gradient(to right, #868f96 0%, #596164 100%)" }}>

                        <Badge color="secondary" badgeContent={"SOON"}>
                            <DashboardRoundedIcon fontSize="inherit" />
                        </Badge>
                    </IconButton>
                    <div style={{ color: "#CCCCCC" }}>Web & Mobile UI</div>
                </div>
                <div className='category__icon '>
                    <IconButton aria-label="delete" size="large" style={{ background: "linear-gradient(to right, #868f96 0%, #596164 100%)" }}>
                        <Badge color="secondary" badgeContent={"SOON"}>
                            <StarRoundedIcon fontSize="inherit" />
                        </Badge>
                    </IconButton>
                    <div style={{ color: "#CCCCCC" }}>Stock Image</div>
                </div>



            </div>
        </div>
    )
}

export default Categories