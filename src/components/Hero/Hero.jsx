import { useEffect, useState } from 'react';
import './Hero.css'
import { useTransition ,animated } from 'react-spring';

const Hero =()=>{

    const[showHeading,setShowHeading]= useState(false);

    const transition = useTransition([showHeading],{
        from:{opacity: 0 ,transform:'translateY(70px)'},
        enter:{opacity: 1 ,transform:'translateY(0px)'},
        leave:{opacity: 0 ,transform:'translateY(70px)'},
        config:{duration:3000},
    });
    useEffect(()=>{
        setShowHeading(true);
    },[])
    return(
        <div className="main-section d-flex flex-column align-items-center justify-content-center">
            <div className="conatiner">
                <div className="">
                    <div className="mt-5 display-1 fw-bold">
                    {transition((styles, item)=>(
                            <animated.div style={styles}>
                                {item &&(
                                    <div className=''>
                                    <h1 className='mt-5 display-1 fw-bold text-center text-white'>
                                        Welcome to the Carousel
                                    </h1>
                                    <p className='fs-3 text-center mt-5 text-light'>
                                        This is a sample landing page with carousels!
                                    </p>
                                </div>
                                )}
                            </animated.div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Hero;