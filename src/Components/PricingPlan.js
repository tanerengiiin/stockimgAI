import { Button } from '@mui/material'
import React from 'react'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { motion } from "framer-motion";
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
const PricingPlan = ({ plan , type}) => {
    const linkToPage=()=>{
        if(!plan.current_plan){ // current plan değilse çalışır
            // aylık ödeme planı ya da yıllık ödeme planına yönlendirir
            // data'dan alınan bilgiler - değiştirilmemeli
            if(type){
                // type = true -> yearly
                if(plan?.yearly_link){
                    window.location.replace(plan.yearly_link);
                }
            }else{
                // type = true -> monthly
                if(plan?.monthly_link){
                    window.location.replace(plan?.monthly_link);
                }
            }
            
        }
        
    }
    return (
        <div className='pricingPlan' style={{border: plan?.recommended ? "2px solid #45A0EF":""}}>
            <div className='pricingPlan__badge'>
                <SquareRoundedIcon style={{fill:plan?.color ? plan.color : "#FF6C34"}}/>
            </div>
            {(plan?.recommended || (type && plan?.discount>0)) &&
                <div className='pricingPlan__headTag'>
                    <motion.div
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >{plan?.recommended ? "RECOMMENDED": plan?.discount+"% SAVE"}</motion.div>
                </div>
            }
            <h3>{plan?.plan_name}</h3>
            <h1>${type ? (plan?.plan_price*12-plan?.plan_price*12*plan?.discount/100) : plan?.plan_price}/{type ?"yr":"mth"}</h1>
            <Button variant="contained" onClick={linkToPage} fullWidth style={{backgroundColor:plan?.recommended ? "#45A0EF":"#E3E3E3", color:plan?.recommended ? "white":"black"}}>{plan?.current_plan ? "Current":"Upgrade"} Plan</Button>
            <div className='pricingPlan__features'>
                {
                    plan?.plan_features.map((feature)=>(
                        <div><CheckCircleOutlineRoundedIcon style={{fill:plan.recommended ? "#45A0EF":"black"}}/>{feature}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default PricingPlan