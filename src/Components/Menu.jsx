/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


function Menu() {
    return (
            <header id="header" className="header header-fixed">
                <div className="container-fluid clearfix">
                    <div className="brand">
                        <a href="#">
                            <div className="brand-name text-texture">Y.S</div>
                            <div className="brand-text">Yaya<br />SADIO</div>
                        </a>
                    </div>

                    <button className="nav-toggle-btn a-nav-toggle">
                        <span className="nav-toggle-title">Menu</span>
                        <span className="nav-toggle nav-toggle-sm">
                            <span className="stick stick-1"></span>
                            <span className="stick stick-2"></span>
                            <span className="stick stick-3"></span>
                        </span>
                    </button>

                    <div className="header-content d-none d-md-block">
                        <div className="header-contacts">
                            <div className="header-contact-item"><a href="tel:(+221) 77 293 55 53" className="phone-link">(+221) 77 293 55 53</a></div>
                            <div className="header-contact-divider">/</div>
                            <div className="header-contact-item"><a href="mailto:arahmano@keloumakcoding.com" className="mail-link">arahmano@keloumakcoding.com</a></div>
                        </div>
                    </div>
                </div>

                <div className="hide-menu a-nav-toggle"></div>

                <div className="menu">
                    <div className="menu-lang">
                        <a href="#" className="menu-lang-item active">ENG</a>
                        <a href="#" className="menu-lang-item">FRA</a>
                    </div>

                    <div className="menu-main" id="accordion">
                        <ul>
                            <li className="active"><a data-text="Home" data-toggle="collapse" href="#menuHome" role="button" aria-expanded="true" aria-controls="menuHome">Home</a>
                                <div className="collapse show" id="menuHome" data-parent="#accordion">
                                    <ul>
                                        <li><a href="home-flash.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Flash">Flash</a></li>
                                        <li className="active"><a href="home-horizontal.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Parallax Horizontal">Parallax Horizontal</a></li>
                                        <li><a href="home-minimal.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Minimal">Minimal</a></li>
                                        <li><a href="home-zoom.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Zoom Parallax Image">Zoom Parallax Image</a></li>
                                        <li><a href="home-3d.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="3D Parallax">3D Parallax</a></li>
                                        <li><a href="home-video.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Video Background">Video Background</a></li>
                                        <li><a href="home-piling.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Parallax Piling">Parallax Piling</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a data-text="Works" data-toggle="collapse" href="#menuWorks" role="button" aria-expanded="false" aria-controls="menuWorks">Works</a>
                                <div className="collapse" id="menuWorks" data-parent="#accordion">
                                    <ul>
                                        <li><a href="work-grid.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Grid">Grid</a></li>
                                        <li><a href="work-masonry.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Masonry">Masonry</a></li>
                                        <li><a href="work-metro.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Metro">Metro</a></li>
                                        <li><a href="work-listing.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Listing">Listing</a></li>
                                        <li><a href="work-carousel.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Carousel">Carousel</a></li>
                                        <li><a href="work-parallax.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Parallax">Parallax</a></li>
                                        <li><a href="single-project-branding.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Single Project Branding">Single Project Branding</a></li>
                                        <li><a href="single-project-photography.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Single Project Photography">Single Project Photography</a></li>
                                        <li><a href="single-project-web-design.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Single Project Web Design">Single Project Web Design</a></li>
                                        <li><a href="single-project-mobile-app.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Single Project Mobile App">Single Project Mobile App</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a data-text="News" data-toggle="collapse" href="#menuNews" role="button" aria-expanded="false" aria-controls="menuNews">News</a>
                                <div className="collapse" id="menuNews" data-parent="#accordion">
                                    <ul>
                                        <li><a href="news-grid.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Grid">Grid</a></li>
                                        <li><a href="news-masonry.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Masonry">Masonry</a></li>
                                        <li><a href="news-with-sidebar.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="News with sidebar">News with sidebar</a></li>
                                        <li><a href="single-post-no-sidebar.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Single Post No Sidebar">Single Post No Sidebar</a></li>
                                        <li><a href="single-post-with-sidebar.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Single Post With Sidebar">Single Post With Sidebar</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a data-text="Studio" data-toggle="collapse" href="#menuStudio" role="button" aria-expanded="false" aria-controls="menuStudio">Studio</a>
                                <div className="collapse" id="menuStudio" data-parent="#accordion">
                                    <ul>
                                        <li><a href="about-us.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="About Us">About Us</a></li>
                                        <li><a href="about-me.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="About Me">About Me</a></li>
                                        <li><a href="our-team.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Our team">Our team</a></li>
                                        <li><a href="career.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Career">Career</a></li>
                                        <li><a href="career-detail.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Career Detail">Career Detail</a></li>
                                        <li><a href="how-its-work.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="How its work">How its work</a></li>
                                        <li><a href="service.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Service">Service</a></li>
                                        <li><a href="coming-soon.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Coming soon">Coming soon</a></li>
                                        <li><a href="404.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Page 404">Page 404</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="contact.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="menu-footer">
                        <ul className="social social-rounded">
                            <li><a href="#"><i className="socicon-twitter"></i></a></li>
                            <li><a href="#"><i className="socicon-facebook"></i></a></li>
                            <li><a href="#"><i className="socicon-googleplus"></i></a></li>
                        </ul>
                        <div className="menu-copyright">&copy; 2020 <strong>SADIO</strong>. Tous droits réservés.<br /> Designed by <strong>Arahmano</strong></div>
                    </div>
                </div>
            </header>
    );
}

export default Menu;
