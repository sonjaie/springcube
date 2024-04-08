import React, {useState} from 'react';
import './style.css'
import logoImage from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'


function Header() {
    const [isJobSeekerHovered, setIsJobSeekerHovered] = useState(false);

    return (
        <header className="header">
            <div className="logo-and-nav">
                <img 
                    src={logoImage}
                    alt="SpringCube Logo"
                    width="256"   // Set the width as required
                    height="126"  // Set the height as required
                    className="logo"
                    />
                <nav>
                    <div 
                        className="dropdown"
                        onMouseEnter={() => setIsJobSeekerHovered(true)}
                        onMouseLeave={() => setIsJobSeekerHovered(false)}
                    >
                        <a href="#jobseeker" className="nav-link">Job Seeker ▼</a>
                        {isJobSeekerHovered && (
                            <div className="dropdown-content">
                                <a href="#viewjobs">View jobs</a>
                                {/* Other dropdown items can go here */}
                            </div>
                        )}
                    </div>
                    <a href="#employer" className="nav-link">Employer Solution</a>
                    <a href="#about" className="nav-link">About Us</a>
                    <a href="#contact" className="nav-link">Contact Us</a>
                </nav>
            </div>
            <div className="actions">
                <div className="post-job-wrapper">
                    <button className="action-button post-job">
                        <FontAwesomeIcon icon={faPencilAlt} style={{ marginRight: "10px", borderBottom: '1px solid #0000ff', color: '7D4CDB' }} /> Post a Job
                    </button>
                </div>
                <div className="auth-buttons">
                    <button className="action-button register">Register</button>
                    <button className="action-button sign-in">Sign In</button>
                </div>
            </div>

        </header>
    );
}

export default Header;