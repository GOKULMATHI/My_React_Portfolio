import React from 'react'
import './footer.css';
import { ReactComponent as Piclog } from './images/fot.svg';

const Footer = () => {
    return (
        <div className='foter' id='footer' >



            <div className='touch' >
                <h2 className='touchtext' >Don’t be a stranger</h2>
                <h3 className='touchtext2' >just say hello.</h3>
                <p style={{ width: '100%' }} >Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <br></br>
                <span className="far fa-envelope"  >{'   '}Email: gokulmathip@gmail.com</span>
                <br></br>
                <br></br>
                <br></br>
                <span className="fab fa-whatsapp "  >{'   '}Contact: 9363385335</span>
                <br></br>
                <br></br>
                <br></br>
                <span className="fab fa-linkedin"     >{'         '}Linkedin: https://www.linkedin.com/in/gokulmathi </span>
                <br></br>
                <br></br>
                <br></br>
                
                







             
            </div>

            < Piclog className='picl' />

        </div>
    )
}

export default Footer;
