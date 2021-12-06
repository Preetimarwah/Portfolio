import React from 'react'
import Lottie from 'react-lottie';
import  animationData from './intro.json'
import './Intro.css';
const Intro = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div className="Intro-Parent-Flexbox">
            <div style={{marginTop:"80px"}}>
            <h3 style={{fontWeight:"bold"}}>Hi, I am Preeti Marwah</h3>
                <h3>IT Graduate</h3>
                <h3>Quick Learner</h3>
                <h3>Front End Developer</h3>
                <h3>Team Worker</h3>
                <h3>Professional</h3>
            </div>
        <div className="Animation-Character"style={{backgroundColor:"white"}} >
            <Lottie options={defaultOptions}
              height={400}
              width={400}
              
              />
        </div>
        </div>
    )
}

export default Intro

//left side about me   after about me resume button can be given
// right side image 
