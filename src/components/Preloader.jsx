import React, { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Testimonial } from './Testimonial';
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import Experience from './Experience';
const Preloader = () => {
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
         setLoading(false)
      },5000)
    },[])

    if(loading){
    return (
        <div className='preloader'>
            <BounceLoader
                color={'#36d7b7'}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
        </div>
 
    );
  }else{
    return(
        <div>
          <NavBar />
          <Banner />
          <Skills />
          <Experience/>
          <Projects />
          <Testimonial/>
          <Contact />
          <Footer />
      </div>
    );
   
  }
};

export default Preloader;