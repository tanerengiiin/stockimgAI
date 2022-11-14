import React, { useEffect, useState } from 'react'
import { images } from "./data"
import { AnimatePresence, motion } from "framer-motion"
import useWindowDimensions from './useWindowDimensions';
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Image from './Image';
const Images = () => {
    const [photoBoxes, setPhotoBoxes] = useState([]);
    const { height, width } = useWindowDimensions();
    const [pieceOfImages, setPieceOfImages] = useState();
    const [visibleImages, setVisibleImages] = useState(5);
    const [visibleLoading,setVisibleLoading]=useState(false);
    // const [shuffleLoading, setShuffleLoading] = useState(false);
    useEffect(() => {
        createPhotoBoxes();
    }, [pieceOfImages])
    useEffect(() => {
        if (width < 600) {
            setPieceOfImages(1);
        } else if (width < 1000) {
            setPieceOfImages(2);
        } else {
            setPieceOfImages(4);
        }
    }, [width])
    // const shuffleArray=()=>{
    //     for (let i = images.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         const temp = images[i];
    //         images[i] = images[j];
    //         images[j] = temp;
    //     }
    // }
    const createPhotoBoxes = () => {
        // görseller karıştırılır
        let mainArr = [
        ];
        const x = parseInt(images.length / pieceOfImages);
        let y = 0;
        for (let i = 0; i < pieceOfImages; i++) {
            let arr = [];
            for (let i = y; i < x + y && i < images.length; i++) {
                arr.push(images[i]);
            }
            mainArr.push(arr);
            y += x;
        }
        setPhotoBoxes(mainArr);
    }
    // const shuffleImages = () => {
    //     setShuffleLoading(true);
    //     shuffleArray()
    //     setTimeout(() => {
    //         setVisibleImages(5)
    //         createPhotoBoxes();
    //         setShuffleLoading(false);
    //     }, 1665);
    // }
    const loadMoreImages=()=>{
        setVisibleLoading(true);
        setTimeout(() => {
            setVisibleImages(visibleImages + 5)
            setVisibleLoading(false);
        }, 986);
    }
    return (

        <div className='images'>
            <div className='images__header'>
                <h1>See AI-made Images</h1>
                <p>We created a few images</p>
                {/* <LoadingButton
                    onClick={shuffleImages}
                    loading={shuffleLoading}
                    variant="outlined"
                >
                    Shuffle it
                </LoadingButton> */}

            </div>
            <div className='images__content'>
                <AnimatePresence>
                    {photoBoxes.map((photoArr, index1) => {
                        return (
                            <motion.div key={index1} className='images__imageBox'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                layout>
                                {photoArr.map((photo, index2) => {
                                    if (index2 > visibleImages && width < 600) {
                                        return null;
                                    }
                                    return (
                                        <motion.div key={index2}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            layout
                                        >
                                            <Image img={photo} />
                                        </motion.div>
                                    )
                                })}

                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>
            {
                (photoBoxes?.length * photoBoxes[0]?.length > visibleImages && width<600) &&
                <div className="loadMore_btn">
                    <LoadingButton
                    onClick={loadMoreImages}
                    loading={visibleLoading}
                    
                    variant="outlined"
                >
                    Load More Images
                </LoadingButton>
                </div>
            }

        </div >
    )
}

export default Images