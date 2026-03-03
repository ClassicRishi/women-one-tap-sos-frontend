import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import EmergencyIcon from '@mui/icons-material/Emergency';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <h1><CrisisAlertIcon className="alert"/>Women One-Tap SOS</h1>
                </div>

                <button className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <div className="login icon chase">
                        <LoginIcon  className="ui-icon"/>
                        <Link to="/login" onClick={() => setIsMenuOpen(false)}>login</Link>
                    </div>

                    <div className="signup icon chase">
                        <PersonAddIcon  className="ui-icon"/>
                        <Link to="/register" onClick={() => setIsMenuOpen(false)}>SignUp</Link>
                    </div>

                    <div className="about icon chase">
                        <InfoIcon  className="ui-icon"/>
                        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                    </div>
                    <div className="sos">
                        <Link to="" onClick={() => setIsMenuOpen(false)} className="btn-cta">
                            <EmergencyIcon />
                            Get Help
                        </Link>
                    </div>
                </nav>
            </div>
            
            <div className="hero-section">
                <div className="hero-content">
                    <h2>Empowering Women's Safety</h2>
                    <p>One tap to reach help. Instant protection when you need it most.</p>
                </div>
            </div>

            <div className="body-section">
                <div className="features-container">
                    <div className="feature-card">
                        <h3>🚨 Instant Emergency Alert</h3>
                        <p>Send distress signals to trusted contacts and authorities with a single tap. Your location is automatically shared in real-time.</p>
                    </div>
                    <div className="feature-card">
                        <h3>📍 Real-Time Location Tracking</h3>
                        <p>Emergency responders and trusted contacts can track your live location. Stay connected and protected during critical moments.</p>
                    </div>
                    <div className="feature-card">
                        <h3>📞 Instant Notifications</h3>
                        <p>Nearby women receive alerts in your area. Build a community of support and collective safety awareness.</p>
                    </div>
                    <div className="feature-card">
                        <h3>🛡️ Confidential & Secure</h3>
                        <p>Your privacy and security are our top priority. All data is encrypted and protected with industry-standard security protocols.</p>
                    </div>
                </div>

                <div className="about-section" id="about">
                    <h4>About Women One-Tap SOS</h4>
                    <p>Women One-Tap SOS is a safety-first emergency alert system designed specifically for women. In moments of danger or distress, every second counts. Our app puts the power of instant assistance at your fingertips—literally one tap away.</p>
                    <p>We believe every woman deserves to feel safe, whether walking home late, traveling alone, or facing an emergency. Our mission is to provide immediate, reliable help when you need it most.</p>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <CrisisAlertIcon className="footer-alert" />
                            <h3>Women One-Tap SOS</h3>
                        </div>
                        <p className="footer-description">
                            Quick emergency assistance at your fingertips. Stay safe with our one-tap SOS service.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#about">About</a></li>
                            <li><Link to="/register">Get Started</Link></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#help">Help Center</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#terms">Terms & Conditions</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="#facebook" className="social-icon">
                                <FacebookIcon />
                            </a>
                            <a href="#twitter" className="social-icon">
                                <TwitterIcon />
                            </a>
                            <a href="#instagram" className="social-icon">
                                <InstagramIcon />
                            </a>
                            <a href="#linkedin" className="social-icon">
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Women One-Tap SOS. All rights reserved. | Empowering Women. Saving Lives.</p>
                </div>
            </footer>
        </header>
    )
}

export default Header