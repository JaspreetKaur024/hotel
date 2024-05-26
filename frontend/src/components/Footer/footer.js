import React from 'react'
import './footer.css'


const Footer = () => {
    return(
        <>
        <footer>
        <div className= "container">
            <div className= "sec aboutus">
                <h4>About Us</h4>
               <p>Offering high level ambiance for weddings,parties,delicious food and formal meetings and dine ins.You can easily book any room for your stay efficiently through our website</p> 
                <ul className="sci">
                <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
            </ul>
            
            </div>
            <div className= "sec quickLinks">
                <h4>Created By</h4>
                <ul>
                    <li><a href="#">Keshav Sharma</a></li>
                   
                </ul>
           </div>
           <div className= "sec contact">
           <h4>Contact Us</h4>
           <ul className="info"> 
                <li>
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <span>Maqsudan Chowk,Jalandhar</span>
                </li>
                <li>
                    <span><i class="fas fa-phone-alt"></i></span>
                    <span>011 4568795</span>
                </li>
                <li>
                    <span><i class="fas fa-envelope"></i></span>
                    <span>Maqsudan Chowk,Jalandhar</span>
                </li>
                <li>
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <span>1Maqsudan Chowk,Jalandhar</span>
                </li>
           </ul>
               </div>
        </div>
        </footer>
        </>
    )
}

export default Footer