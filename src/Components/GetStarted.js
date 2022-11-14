// import React, { useEffect, useState } from 'react'
// import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import google from "./google.png";
// import AdjustSharpIcon from '@mui/icons-material/AdjustSharp';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// const BpIcon = styled('span')(({ theme }) => ({
//     borderRadius: 3,
//     width: 16,
//     height: 16,
//     boxShadow:
//       theme.palette.mode === 'dark'
//         ? '0 0 0 1px rgb(16 22 26 / 40%)'
//         : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
//     backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
//     backgroundImage:
//       theme.palette.mode === 'dark'
//         ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
//         : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
//     '.Mui-focusVisible &': {
//       outline: '2px auto rgba(19,124,189,.6)',
//       outlineOffset: 2,
//     },
//     'input:hover ~ &': {
//       backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
//     },
//     'input:disabled ~ &': {
//       boxShadow: 'none',
//       background:
//         theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
//     },
//   }));
  
//   const BpCheckedIcon = styled(BpIcon)({
//     backgroundColor: '#45A0EF',
//     backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
//     '&:before': {
//       display: 'block',
//       width: 16,
//       height: 16,
//       backgroundImage:
//         "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
//         " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
//         "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
//       content: '""',
//     },
//     'input:hover ~ &': {
//       backgroundColor: '#106ba3',
//     },
//   });
  
//   // Inspired by blueprintjs
//   function BpCheckbox(props) {
//     return (
//       <Checkbox
//         sx={{
//           '&:hover': { bgcolor: 'transparent' },
//         }}
//         disableRipple
//         color="default"
//         checkedIcon={<BpCheckedIcon />}
//         icon={<BpIcon />}
//         inputProps={{ 'aria-label': 'Checkbox demo' }}
//         {...props}
//       />
//     );
//   }
// const GetStarted = () => {
//     //DOM load event
//     const [onSpotlight,isOnSpotlight]=useState(true);
//     useEffect(() => {
        
//         const spotlight = document.querySelector('.spotlight');
//         const getStarted__image = document.querySelector('.getStarted__image');
//         let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.8) 200px)';
        
//         getStarted__image.addEventListener('mousemove', e => updateSpotlight(e));

//         getStarted__image.addEventListener('mousedown', e => {

//             spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';

//             updateSpotlight(e);

//         });

//         getStarted__image.addEventListener('mouseup', e => {

//             spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.8) 200px)';

//             updateSpotlight(e);
            

//         });
//         getStarted__image.addEventListener('mouseenter', e => {
//           spotlight.classList.remove("spotlight__inactive")

//       });
//         getStarted__image.addEventListener('mouseleave', e => {

//             spotlight.style.backgroundImage = `radial-gradient(circle at ${50}% ${50}%, ${spotlightSize}`;
//             spotlight.classList.add("spotlight__inactive")
//         });
//         function updateSpotlight(e) {

//             spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / getStarted__image.offsetWidth * 100}% ${e.pageY / getStarted__image.offsetHeight * 100}%, ${spotlightSize}`;

//         }
//     }, [onSpotlight])
//     return (
//         <div className='getStarted'>
//             <div className='getStarted__image' style={{cursor: onSpotlight? "none":"default"}}>
//                 {onSpotlight && <div className="spotlight spotlight__inactive"></div>}
                
//             </div>
//             <div className='getStarted__login'>
//                 {/* <div className='getStarted__login--logo'>STOCKIMG.AI</div> */}
//                 <div className='login'>
//                     <div className='login__header'>Welcome back</div>
//                     <div className='login__input'>
//                         <TextField id="standard-basic" label="E-mail" variant="standard" fullWidth />
//                     </div>
//                     <div className='login__input'>
//                         <TextField id="standard-basic" label="Password" variant="standard" fullWidth type="password" autoComplete="current-password"/>
//                     </div>
//                     <div className='login__detail'>
//                         <div className='login__detail--remember'>
//                             <BpCheckbox />Remember me
//                         </div>
//                         <div className='login__detail--forgot'>
//                             Forgot Password
//                         </div>
//                     </div>
//                     <div className='login__btn'>
//                         <Button variant="contained" fullWidth>Log in</Button>
//                     </div>

//                     <div className='login__have'>Don't have an account? <span>Sign up!</span></div>
//                     <div className='login__or'>
//                         <div className='login__or--line'></div>
//                         <div className='login__or--text'>OR</div>
//                         <div className='login__or--line'></div>
//                     </div>
//                     <div className='login__google'>
//                         <Button variant="outlined" fullWidth>
//                             <img src={google} alt='google' />
//                             Log in with Google
//                         </Button>
//                     </div>
//                 </div>
//                 <div className='getStarted__login--toggle' onClick={()=>isOnSpotlight(!onSpotlight)}>
//                     <AdjustSharpIcon/>
//                 </div>
//             </div>
            
//         </div>
//     )
// }

// export default GetStarted