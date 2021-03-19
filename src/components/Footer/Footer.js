import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container' >
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
            <Link className="footerlinks" to='/UserSignUp'>How it works</Link>
            <Link className="footerlinks" to='/Testimonials'>Testimonials</Link>
            <Link className="footerlinks" to='/Goals'>Goals</Link>
            <Link className="footerlinks" to='/OurTeam'>Our Team</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link className="footerlinks"  to='/ContactUs'>Contact</Link>
            <Link className="footerlinks"  to='/Services'>Services</Link>
            <Link className="footerlinks"  to='/Achievements'>Achievements</Link>
            <Link className="footerlinks"  to='/RepresentativeSignUp'>Join us</Link>
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
          <div className='socialicons'>
            <Link
              className='social-icon-link facebook'
              to=''
              target='_blank'
              aria-label='Facebook'
            >
             <a href="https://www.facebook.com/"><i className='fab fa-facebook-f' href="https://www.facebook.com/"/></a>
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
             <a href="https://www.instagram.com/"><i className='fab fa-instagram' href="https://www.facebook.com/" /></a>
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
             <a href="https://www.youtube.com/?gl=IN"> <i className='fab fa-youtube' href="https://www.facebook.com/" /></a>
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
             <a href="https://twitter.com/?lang=en-in"> <i className='fab fa-twitter' href="https://www.facebook.com/" /></a>
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <a href="https://www.linkedin.com/login/"><i className='fab fa-linkedin' href="https://www.facebook.com/" /></a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
