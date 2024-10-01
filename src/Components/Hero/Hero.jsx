import './Hero.css';
import floatingland from './floatingland.png';
import React, { useEffect } from 'react';
import Typed from 'typed.js'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ScrollReveal from 'scrollreveal';

function Hero() {
    useEffect(() => {
        const options = {
            strings: ['A Feature', 'Where your', 'Fantasy meets', 'Your expectation', 'To everything!!'],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true,
        };

        const typed = new Typed('.multiple-text', options);
        return () => {
            typed.destroy();
        };
    }, []); 

    useEffect(() => {
        ScrollReveal({
            distance: '80px',
            duration: 2000,
            delay: 100,
        });
    
        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-contact h2, .about-content', { origin: 'right' });
    }, []);
    

    return (
      <div className="Hero">
        
        <section class="home" id="home">
            <div class="home-content">
                <h3>Hi, Welcome to...</h3>
                <h1>DenLand</h1>
                <h3> <span class="multiple-text"></span></h3>
                <div class="social-media">
                    <a href="https://www.facebook.com/dennies100420/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/its_thenden/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.tiktok.com/@itzthen?lang=en" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>
                    <a href="https://x.com/DenniesCarboni2" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
                <a href="#about" class="btn">Read more</a>
            </div>
            
            <div class="home-img">
                <img src={floatingland} alt="" />
            </div>
        </section>
      </div>
    );
  }
  
  export default Hero;