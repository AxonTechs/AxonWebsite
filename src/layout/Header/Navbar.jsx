import React, {useState, useEffect}from 'react'
import "../../Asserts/Style/Navbar.css"
import { NavLink } from 'react-router-dom';


export default function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavToggle = () => {
      setIsNavCollapsed(!isNavCollapsed);
    };

    
  
    const [activeLink, setActiveLink] = useState("home");
    
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const homeSection = document.getElementById("home-section");
        const aboutSection = document.getElementById("about-section");
        const portfolioSection = document.getElementById("portfolio-section");
        const blogSection = document.getElementById("blog-section");
        const careerSection = document.getElementById("career-section");
        const contactSection = document.getElementById("contact-section");
  
        if (homeSection && scrollPosition < homeSection.offsetTop) {
          setActiveLink("home");
        } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
          setActiveLink("about");
        }
        else if (portfolioSection && scrollPosition >= portfolioSection.offsetTop) {
          setActiveLink("portfolio");
        } 
        else if (blogSection && scrollPosition >= blogSection.offsetTop) {
          setActiveLink("blog");
        } 
        else if (careerSection && scrollPosition >= careerSection.offsetTop) {
          setActiveLink("career");
        } 

        else if (contactSection && scrollPosition >= contactSection.offsetTop) {
            setActiveLink("contact");
          }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [activeLink]);
  
    return (  
      
        <>
            <nav className="navbar navbar-expand-lg">
              <div className="container px-3">
                <a className="navbar-brand btn-light" href="/">
                  <img src="https://axontechs.com/wp-content/uploads/2021/09/White_logo.png" className='logo' alt="..." />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={handleNavToggle}
                >
                  <span className="navbar-toggler-icon btn btn-light"></span>
                </button>
                <div
                  className={`collapse navbar-collapse ${
                    isNavCollapsed ? "" : "show"
                  }`}
                >
                  <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">
                  <li
                  className={`nav-item ${
                    activeLink === "home" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("home")}
                >
                    <NavLink
                        className="nav-link"
                        to="/"
                        id="home-section"
                        activeClassName="active"
                    > 
                        Home
                    </NavLink>
                </li> 

                <li
                  className={`nav-item ${
                    activeLink === "about" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("about")}
                >
                    <NavLink
                        className="nav-link"
                        to="/about"
                        id="about-section"
                        activeClassName="active"
                    >
                        About
                    </NavLink>
                </li>


                     <li
                  className={`nav-item ${
                    activeLink === "portfolio" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("portfolio")}
                >
                    <NavLink
                        className="nav-link"
                        to="/portfolio"
                        id="portfolio-section"
                        activeClassName="active"
                    >
                        Portfolio
                    </NavLink>
                </li>
              
                <li
                  className={`nav-item ${
                    activeLink === "blog" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("blog")}
                >
                    <NavLink
                        className="nav-link"
                        to="/blog"
                        id="blog-section"
                        activeClassName="active"
                    >
                        Blog
                    </NavLink>
                </li> 


                <li
                  className={`nav-item ${
                    activeLink === "career" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("career")}
                >
                    <NavLink
                        className="nav-link"
                        to="/career"
                        id="career-section"
                        activeClassName="active"
                    >
                        Career
                    </NavLink>
                </li>

            
                <li
                  className={`nav-item ${
                    activeLink === "contact" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("contact")}
                >
                    <NavLink
                        className="nav-link"
                        to="/contact"
                        id="contact-section"
                        activeClassName="active"
                    >
                        Contact
                    </NavLink>
                </li>
                  </ul>
                </div>
              </div>
            </nav>
        </>
      );
    }