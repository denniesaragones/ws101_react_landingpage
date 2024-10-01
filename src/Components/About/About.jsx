import './About.css';
import aboutimg from './aboutimg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
      <div className="About">
        <section class="about" id="about">
            <div class="about-img">
                <img src={aboutimg} alt="" />
            </div>
            
            <div class="about-content">
                <h2 class="heading">ABOUT <span>!!</span></h2>
                <h3>We dream to develop a web3 game where you can earn while enjoying the game!!</h3>
                <p>"Web3 is built on decentralized technologies like blockchain. Unlike the traditional web (often referred to as Web 2.0), which relies heavily on centralized platforms and servers controlled by large companies (e.g., Google, Facebook, Amazon), Web3 aims to create a more decentralized, user-controlled internet. 💻🚀"</p>
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
                <a href="#" class="btn">Read more</a>
            </div>
        </section>
      </div>
    );
  }
  
  export default About;