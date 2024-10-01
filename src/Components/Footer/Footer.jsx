import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
    return (
      <div className="Footer">
        <footer class="footer">
            <div class="footer-text">
                <p>&copy; 2024 DenLand | All Rights Reserved.</p>
            </div>

            <div class="footer-icontop">
                <a href="#home">
                    <i className="fa-sharp fa-solid fa-angles-up"></i>
                </a>
            </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;