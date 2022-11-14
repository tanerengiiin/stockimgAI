import React from 'react'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { projects } from "./data";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { IconButton } from '@mui/material';
var variants = {
    enter: function (direction) {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: function (direction) {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

var swipeConfidenceThreshold = 10000;
var swipePower = function (offset, velocity) {
    return Math.abs(offset) * velocity;
};
export const Other = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, projects.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className='other'>
            <div className='other__content'>

                <div className="project__image">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={page}
                            src={projects[imageIndex].project_img}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 200, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            alt={projects[imageIndex].project_name}
                        />
                    </AnimatePresence>
                    <div className="next" onClick={() => paginate(1)}>
                        <IconButton aria-label="image right button">
                            <KeyboardArrowRightRoundedIcon />
                        </IconButton>
                    </div>
                    <div className="prev" onClick={() => paginate(-1)}>
                    <IconButton>
                            <KeyboardArrowLeftRoundedIcon aria-label="image left button" />
                        </IconButton>
                    </div>
                </div>
                <div className='project__detail'>
                    <h1>Our Other Projects</h1>
                    <div className='project__tag'>{projects[imageIndex].project_type}</div>
                    <h2>{projects[imageIndex].project_name}</h2>
                    <p>{projects[imageIndex].project_detail} <a href={projects[imageIndex].project_link}>link</a></p>
                </div>
            </div>

        </div>
    );
};

export default Other