import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import { Link } from '@mui/material';
import { business, mail, socialURL } from "./data"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__getStarted'>
                <p>Do you want to create photos with artificial intelligence? <a href='#'>Let's get started!</a></p>
            </div>
            <div className='footer__detail'>
                <div className='footer__detail--logo'>STOCKIMG.AI</div>

                <div className='footer__detail--socials'>
                    <ul>
                        <li>
                            <Link target="_blank" href={socialURL?.twitter}>
                                <IconButton aria-label="link to twitter" size="large">
                                    <TwitterIcon />
                                </IconButton>
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href={socialURL?.instagram}>
                                <IconButton aria-label="link to instagram" size="large">
                                    <InstagramIcon />
                                </IconButton>
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href={socialURL?.tiktok} underline="none">
                                <IconButton aria-label="link to youtube" size="large" >
                                    <i className="fa-brands fa-tiktok"></i>
                                </IconButton>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='footer__detail--links'>
                    <ul>
                        <li>
                            <Link target="_blank" href={mail} color="inherit">
                                Contact Us<ArrowOutwardOutlinedIcon fontSize='small' />
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href={business.privacyPolicy} color="inherit">
                                Privacy Policy<ArrowOutwardOutlinedIcon fontSize='small' />
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href={business.termsOfService} color="inherit">
                                Terms of Service<ArrowOutwardOutlinedIcon fontSize='small' />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='footer__detail--bottom'>© 2022 stockimg.ai, Inc. Based in İstanbul.</div>
                <div className='footer__detail--exit'>© 2022 sotkcimg.ai. stockimg.ai tasarımı, stockimg.ai'nin ticari markasıdır. Milyonlarca yüksek kaliteli yapay zeka üretimi stok fotoğrafı tarayın.</div>
            </div>
        </div>
    )
}

export default Footer