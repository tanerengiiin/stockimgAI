import React, { useContext, useRef, useState } from 'react'
import '../App.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import { motion, Variants } from "framer-motion";
import useWindowDimensions from './useWindowDimensions';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import MainContext from '../MainContext';
const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const Navbar = () => {
    const {modalIsOpen,setModalIsOpen}=useContext(MainContext);

    const [isOpen, setIsOpen] = useState(false);
    const [categoryOpen, isCategoryOpen] = useState(false);
    const [mobileCategory, setMobileCategory] = useState(false);
    const { height, width } = useWindowDimensions();
    const menuRef = useRef();
    return (
        <div className='navbar'>
            {
                width > 1000 ?
                    <div className='navbar__content'>
                        <div className='navbar__left'>
                            <NavLink to={"/"} className='navbar__left--logo'>STOCKIMG.AI</NavLink>
                            <div className='navbar__left--links'>
                                <ul>
                                    <li>
                                        <NavLink to={"/pricing"} className="navbar__navlink" style={({ isActive }) => ({
                                            textDecoration: isActive ? "underline" : "none",
                                            color: isActive ? "#45A0EF" : "inherit"
                                        })}>Pricing</NavLink>
                                    </li>
                                    <li onMouseEnter={() => {
                                        isCategoryOpen(true); setTimeout(() => {
                                            menuRef.current.classList.add("menu__active");
                                        }, 500);
                                    }} onMouseLeave={() => { isCategoryOpen(false); menuRef.current.classList.remove("menu__active"); }}>
                                        Categories<KeyboardArrowDownRoundedIcon fontSize='medium'/>
                                        <motion.nav
                                            initial={false}
                                            animate={categoryOpen ? "open" : "closed"}
                                            className={"category__menu menu "}
                                            ref={menuRef}
                                            style={{ display: categoryOpen ? "flex" : "none" }}
                                        >

                                            <motion.ul
                                                variants={{
                                                    open: {
                                                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                                                        transition: {
                                                            type: "spring",
                                                            bounce: 0,
                                                            duration: 0.7,
                                                            delayChildren: 0.3,
                                                            staggerChildren: 0.05
                                                        }
                                                    },
                                                    closed: {
                                                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                                                        transition: {
                                                            type: "spring",
                                                            bounce: 0,
                                                            duration: 0.3
                                                        }
                                                    }
                                                }}
                                                style={{ pointerEvents: categoryOpen ? "auto" : "none" }}
                                            >

                                                <motion.li variants={itemVariants}>Stock Image</motion.li>
                                                <motion.li variants={itemVariants}>Book Cover</motion.li>
                                                <motion.li variants={itemVariants}>Logo</motion.li>
                                                <motion.li variants={itemVariants}>Illustration</motion.li>
                                                <motion.li variants={itemVariants}>Poster</motion.li>
                                                <motion.li variants={itemVariants}>Web & Mobile UI</motion.li>
                                                <motion.li variants={itemVariants}>Wallpaper</motion.li>
                                            </motion.ul>
                                        </motion.nav>
                                    </li>
                                    <li>
                                        Discord<ArrowOutwardOutlinedIcon fontSize='small' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='navbar__right'>

                            <div className='navbar__right--getStarted'>
                                <Button variant="contained" onClick={()=>setModalIsOpen(true)} >Get Started</Button>
                            </div>
                        </div>
                    </div> :
                    <div className='navbar__content'>
                        <NavLink to={"/"} className='navbar__left--logo'>STOCKIMG.AI</NavLink>
                        <IconButton className='navbar__hamburger' onClick={() => {
                            setIsOpen(!isOpen); setTimeout(() => {
                                menuRef.current.classList.add("menu__active");
                            }, 300);
                        }} onMouseLeave={() => { isCategoryOpen(false); menuRef.current.classList.remove("menu__active"); }}><MenuRoundedIcon /></IconButton>
                        <motion.nav
                            initial={false}
                            animate={isOpen ? "open" : "closed"}
                            className={"hamburger__menu menu "}
                            ref={menuRef}
                            style={{ display: isOpen ? "flex" : "none" }}
                        >

                            <motion.ul
                                variants={{
                                    open: {
                                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                                        transition: {
                                            type: "spring",
                                            bounce: 0,
                                            duration: 0.7,
                                            delayChildren: 0.3,
                                            staggerChildren: 0.05
                                        }
                                    },
                                    closed: {
                                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                                        transition: {
                                            type: "spring",
                                            bounce: 0,
                                            duration: 0.3
                                        }
                                    }
                                }}
                                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                            >
                                <motion.li variants={itemVariants}>
                                    <NavLink to={"/"} onClick={() => setIsOpen(false)}><motion.div className='navbar__left--logo'>STOCKIMG.AI</motion.div></NavLink>
                                    <IconButton className='navbar__hamburger' onClick={() => setIsOpen(!isOpen)}><CloseRoundedIcon /></IconButton>
                                </motion.li>
                                <motion.li variants={itemVariants}>
                                    <div className='navbar__right--getStarted'>
                                        <Button variant="contained" fullWidth onClick={()=>setModalIsOpen(true)}>Get Started</Button>
                                    </div>
                                </motion.li>
                                <motion.li variants={itemVariants}><NavLink to={"/pricing"} onClick={() => setIsOpen(false)}><div>Pricing</div></NavLink></motion.li>
                                <motion.li variants={itemVariants} >
                                    <div onClick={() => setMobileCategory(!mobileCategory)}>Categories<KeyboardArrowDownRoundedIcon fontSize='medium' /></div>
                                    <motion.nav variants={{
                                        open: {
                                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                                            transition: {
                                                type: "spring",
                                                bounce: 0,
                                                duration: 0.7,
                                                delayChildren: 0.3,
                                                staggerChildren: 0.05
                                            }
                                        },
                                        closed: {
                                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                                            transition: {
                                                type: "spring",
                                                bounce: 0,
                                                duration: 0.3
                                            }
                                        }

                                    }}
                                        initial={false}
                                        animate={mobileCategory ? "open" : "closed"}
                                        style={{ pointerEvents: mobileCategory ? "auto" : "none", display: mobileCategory ? "block" : "none" }}
                                    >
                                        <motion.ul>
                                            <motion.li variants={itemVariants}>Stock Image</motion.li>
                                            <motion.li variants={itemVariants}>Book Cover</motion.li>
                                            <motion.li variants={itemVariants}>Logo</motion.li>
                                            <motion.li variants={itemVariants}>Illustration</motion.li>
                                            <motion.li variants={itemVariants}>Poster</motion.li>
                                            <motion.li variants={itemVariants}>Web & Mobile UI</motion.li>
                                            <motion.li variants={itemVariants}>Wallpaper</motion.li>
                                        </motion.ul>
                                    </motion.nav>
                                </motion.li>
                                <motion.li variants={itemVariants} >Discord<ArrowOutwardOutlinedIcon fontSize='small' /></motion.li>
                            </motion.ul>
                        </motion.nav>

                    </div>
            }

        </div>
    )
}

export default Navbar