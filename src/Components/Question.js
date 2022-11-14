import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import IconButton from '@mui/material/IconButton';
const Question = ({q}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.li 
    layout 
    className='question'
    >
      <motion.div layout className='question__header' onClick={() => setIsOpen(!isOpen)}>
        <motion.div layout>{q.q}</motion.div>
        <motion.div layout>
          <IconButton>
            {!isOpen ? <AddCircleOutlineRoundedIcon /> : <RemoveCircleOutlineRoundedIcon />}
          </IconButton> 
        </motion.div>
      </motion.div>
      <AnimatePresence>
      {isOpen &&
        <motion.div 
        layout
        initial={{opacity:0}} 
        animate={{opacity:0.8}} 
        exit={{opacity:0}}
        >
          <p>
          {q.a}
          </p>
        </motion.div>
      }
      </AnimatePresence>

    </motion.li>
  )
}

export default Question