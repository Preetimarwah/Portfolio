import React, {useEffect} from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Aboutme.css'

export const Aboutme = () => {
    const squareVariants = {
        visible: { opacity: 1, scale: 1,  transition: { duration: 2} },
        hidden: { opacity: 0, scale: 1, }
      };

      const controls = useAnimation();
      const [ref, inView] = useInView();
      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);
    return (
        <motion.div
        id={"about"}
        ref={ref}
        variants={squareVariants}
        animate={controls}
        className="square"
        initial="hidden"
      >
        <div className="About-Me">
            <h1 style={{textAlign:"center", fontWeight:"bold"}}> About me </h1>
            <h5>I am a Frontend React JS developer with a Bachelor degree in Information 
                Technology and System from Victorian Institute of Technology, Melbourne Australia.
 I have good knowledege with  like HTML, CSS, JavaScript with ES6, React JS, Bootstrap, Git.  
 REST API which I have attached in my Project section. I have learned about various project 
 methodologies like Agile, waterfall, Scrum, Devops at my university.
In my role as a loss prevention officer with MA Services in Melbourne,
 Australia for 2 years where
I have learned the value of interpersonal skills like teamwork and communication skills. 
I am looking forward to solve challenging problems.</h5>
        </div>
        </motion.div>
    )}
export default Aboutme

