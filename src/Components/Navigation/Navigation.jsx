import './Navigation.css';

function Navigation() {
    return (
      <div className="Navigation">
        <header class="header">
            <a href="#" class="logo">DenLand</a>

            <nav class="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
      </div>
    );
  }
  
  export default Navigation;