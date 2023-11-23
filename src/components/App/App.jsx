import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import ContentSection from "../contentSection/contentSection";

const App = () => {
  const transition1 = {
    from: { opacity: 0, display: 'none' },
    enter: { opacity: 1, display: 'block' },
    leave: { opacity: 0, display: 'none' },
};

  return (
    <div>
      <Hero />

      <ContentSection transitionStyles={transition1} />
   
      <Footer />
    </div>
  );
};

export default App;
