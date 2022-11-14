import React, { useState } from 'react'
import '../App.css';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import PricingPlan from './PricingPlan';
import Question from './Question';
import {discordURL, mail, pricingPlans} from "./data"
import {questions} from "./data"

const Pricing = () => {
    const [isOn, setIsOn] = useState(false); // false = monthly true = yearly
    
    const toggleSwitch = () => setIsOn(!isOn);
    

    return (
        <div className='container'>
            <div className='pricing'>
                <h1 className='pricing__mainText'>✦ We have affordable pricing plan for everyone</h1>
                <h4 className='pricing__subText'>We believe stockimg.ai should be accessible to everyone, regardless of size.</h4>
                <div className='pricing__select'>
                    <span style={{ color: isOn ? "#878787" : "#08080F" }}>Monthly</span>
                    <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
                        <motion.div className="handle" layout transition={spring} />
                    </div>
                    <span style={{ color: isOn ? "#08080F" : "#878787" }}>Yearly</span>
                </div>
                <div className='pricing__plans'>
                    {pricingPlans.map((p)=>(
                        <PricingPlan type={isOn} plan={p}/>
                    ))}
                </div>
                <div className='pricing__faq'>
                    <h1>Frequently Asked Questions</h1>
                    <h4>Have questions? Reach via <a target={"_blank"} href={discordURL}>Discord</a> or <a href={mail}>mail</a>.</h4>
                    <AnimateSharedLayout>
                        <motion.ul layout className='pricing__faq--questions'>
                            {
                                questions.map((q)=>(
                                    <Question q={q}/>
                                ))
                            }
                        </motion.ul>
                    </AnimateSharedLayout>

                </div>
            </div>
        </div>

    )
}

export default Pricing

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};