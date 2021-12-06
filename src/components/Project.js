/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect} from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Project.css"
const Project = () => {


    const squareVariants = {
        visible: { opacity: 1, scale: 1, y:0, transition: { duration: 2} },
        hidden: { opacity: 0, scale: 1, y:50}
      };

      const controls = useAnimation();
      const [ref, inView] = useInView();
      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

    return (
      <>
      <div id="Project">
        <h1 style={{textAlign:"center", fontWeight:"bold"}}>Projects</h1>
         </div>
        <motion.div
        ref={ref}
        variants={squareVariants}
        animate={controls}
        className="square"
        initial="hidden"
      >
          
 <div className="Parent-Flex">
 <div className="Parent-Project">
   <div> <a href="https://preetireactecom.netlify.app/">
     <img src="/project1.1.jpg" alt=""/></a>
     <a href="https://preetireactecom.netlify.app/"><div class="Child-Div">
      <h5> E Commerce application made with HTML, CSS, React JS, Redux, Bootstrap.<br/>
      Please Click me to view the Project</h5>
     </div></a>
   </div>
   <div className="Project-Button-Parent"> 
   <a href="https://preetireactecom.netlify.app/"> <button className="Project-Button ">Click me</button></a>
   </div>
    </div>
    <div className="Parent-Project">
   <div>  <a href="https://greatfoodrecipe.netlify.app/"> 
     <img src="/project2.1.jpg" alt=""/></a>
     <a href="https://greatfoodrecipe.netlify.app/"><div class="Child-Div">
       <h5> Receipe finder made with the help of HTML, CSS, ReactJS, Bootstrap, Axios, REST API.<br/>
       Please Click me to view the Project
       </h5>
     </div></a>
   </div>
   <div className="Project-Button-Parent"> 
   <a href="https://greatfoodrecipe.netlify.app/"> <button className="Project-Button ">Click me</button></a>
   </div>
   
   
    </div>
 </div>

      </motion.div>
      </>
    )
}

export default Project
// carosel with link for both projects
