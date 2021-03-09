import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container' style={{ marginTop: "15%"}}>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join us for a better environment
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>        
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link className="footerlinks" to='/sign-up'>How it works</Link>
            <Link className="footerlinks" to='/'>Testimonials</Link>
            <Link className="footerlinks" to='/'>Careers</Link>
            <Link className="footerlinks" to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link className="footerlinks"  to='/ContactUs'>Contact</Link>
            <Link className="footerlinks"  to='/'>Support</Link>
            <Link className="footerlinks"  to='/'>Destinations</Link>
            <Link className="footerlinks"  to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
         </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
           <hr></hr>
          </div>
          {/* <small class='website-rights'>TRVL © 2020</small> */}
          <div className='socialicons'>
            <Link
              className='social-icon-link facebook'
              to=''
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' href="https://www.facebook.com/"/>
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' href="https://www.facebook.com/" />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' href="https://www.facebook.com/" />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' href="https://www.facebook.com/" />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' href="https://www.facebook.com/" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
