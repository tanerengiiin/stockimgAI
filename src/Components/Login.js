import React, { useContext, useState } from 'react'
import Modal from 'react-modal';
import MainContext from '../MainContext';
import { AnimatePresence, motion } from "framer-motion";
import { Button, IconButton } from '@mui/material';
import google from "./google.png";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { business } from './data';
Modal.setAppElement('#root');
const Login = () => {
  const { modalIsOpen, setModalIsOpen } = useContext(MainContext);
  const closeModal = () => {
    setModalIsOpen(false)
  }
  return (

    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="login__modal"
      overlayClassName={"login__modal--overlay"}
      contentLabel="Example Modal"
    >
      <AnimatePresence>
        <motion.div
          className='login__modal--card'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.1 } }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <div onClick={closeModal} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h1>Log in or sign up</h1>
            <IconButton>
              <CloseRoundedIcon />
            </IconButton>
          </div>

          <p>Sign up for free, just google for now.</p>
          <form className='login__google'>
            <Button fullWidth variant="contained">
              <img src={google} alt="google" />
              Sign in with Google
            </Button>
          </form>
          <div className='login__modal--footer'>
            By continuing, you agree to Stockimg.ai's <a href={business.termsOfService}>Terms of Use</a>. Read our <a href={business.privacyPolicy}>Privacy Policy</a>.
          </div>
        </motion.div>

      </AnimatePresence>
    </Modal>

  )
}

export default Login