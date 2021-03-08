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
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link className="footerlinks" to='/sign-up'>How it works</Link>
            <Link className="footerlinks" to='/'>Testimonials</Link>
            <Link className="footerlinks" to='/'>Careers</Link>
            <Link className="footerlinks" to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
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
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
           <hr></hr>
          </div>
          {/* <small class='website-rights'>TRVL © 2020</small> */}
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to=''
              target='_blank'
              aria-label='Facebook'
            >
                <a className="socials" href="https://www.facebook.com/">
              <i class='fab fa-facebook-f' /></a>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
                <a className="socials" href="https://www.facebook.com/">              
              <i class='fab fa-instagram' /></a>
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
                <a className="socials" href="https://www.facebook.com/">
              <i class='fab fa-youtube' /></a>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
                <a className="socials" href="https://www.facebook.com/">
              <i class='fab fa-twitter' /></a>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
                <a className="socials" href="https://www.facebook.com/">
              <i class='fab fa-linkedin' /></a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
