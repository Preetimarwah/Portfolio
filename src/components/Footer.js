import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div id="Contactme">
            <div className="Footer"> 
            <form name="contact" method="POST" data-netlify="true"  netlify-honeypot="bot-field" hidden>
    <p>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" />
    </p>
    <p>
      <label for="email">Email</label>
      <input type="text" id="email" name="email" />
    </p>
    <p>
      <label for="message">Message</label>
      <textarea id="message" name="message"></textarea>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>


            {/* <form name="contact" netlify>
                <h5>Your Name</h5>
               <input name="name" type="text"/>
               <h5>Your Email ID</h5>
               <input name="email" type="textbox"/>
               <h5>Your message</h5>
               <textarea name="message"type="textarea" style={{height:"100px"}}/><br/> <br/>
           
           <button type="submit"className="Send-Button btn btn-primary" >Send</button>
            
            </form> */}
            <div className="Second-Flexbox">
               <div> <h4> Click on below icons to visit my social media profile</h4>
               <a href="https://github.com/Preetimarwah">   <img src="/github.png" alt=""/></a>
            <a href="https://www.linkedin.com/in/preeti-marwah/"><img src="/linkedin.png" alt=""/></a></div>
            <div>
               <a href="https://docs.google.com/document/d/17bMa7BhuvJA_WYFI65PID0QHVB-X7nsv/edit?usp=sharing&ouid=109958338127665075807&rtpof=true&sd=true"><button className="btn btn-primary">View Resume</button></a>
            </div>
            <div>
            <h6 style={{fontWeight:"bold"}}>Gmail address-<br/> preetimarwah130@gmail.com</h6>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
// link to linkedin, twitter
// gmail adress contact me 
// github link