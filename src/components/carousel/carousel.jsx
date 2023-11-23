import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import vactorfirst from "./../../images/vector2.webp";

import "./carousel.css";

const Carousel = ({
  slides = ["Life", "Muumma", "Happiness"],
  transitionStyles,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervel = setInterval(() => {
      setActiveIndex((active) => (active + 1) % slides.length);
    }, 4000);
    return () => {
      clearInterval(intervel);
    };
  }, []);

  const transitions = useTransition([activeIndex], transitionStyles);

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
  };
  return (
    <div>
    <div className="mt-5 ms-5">
      <br />
      <div className="container fs-1">
        <div className="row button">
          <div className="col-1 button">
            <div onClick={previousSlide} className="button">
              <i className="fa-solid fa-chevron-right fa-lg text-light"></i>
            </div>
          </div>

          <div className="main mx-auto">
            {transitions((styles, index) => (
              <animated.div
                style={{
                  ...styles,
                  width: "40rem",
                  height: "25rem",
                  borderRadius: "2rem",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${slides[index]})`,
                }}
              />
            ))}
          </div>

          <div className="col-1">
            <div onClick={nextSlide} className="button">
              <i className="fa-solid fa-chevron-left fa-lg  text-light"></i>
            </div>
          </div>
          <img src={vactorfirst} className="mb-5" />
         
        </div>
      </div>
      </div>
      
    </div>
    
  );
};
export default Carousel;
