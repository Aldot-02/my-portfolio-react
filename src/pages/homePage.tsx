import { Link } from 'react-router-dom';
import { TfiDownload, TfiEmail } from "react-icons/tfi";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinLine, RiTwitterXLine } from "react-icons/ri";
import { BiLogoInstagram } from "react-icons/bi";
import { MdOutlinePermPhoneMsg, MdOutlinePhoneInTalk, MdAlternateEmail } from "react-icons/md";
import { GiOilySpiral } from "react-icons/gi";
import './homePage.css';
import ProjectsPage from './projectPage/projectPage';
const Image = require('../images/Image.png')
const Profile = require('../images/placeholder.png')

const HomePage: React.FC = () => {

    return (
        <>
                <div className="diamonds">
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>

                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                    <div className="diamond"></div>
                </div>
                <header>
                    <nav className="navbar">
                        <Link to='' className="logo">
                            <img src={Image} />
                        </Link>
                        <div className="hamburger">
                            <div className="bar"></div>
                        </div>
                        <ul className="nav-links">
                            <li><Link to="#about">About</Link></li>
                            <li><Link to="#work">Work</Link></li>
                            <li><Link to="#blog">Blog</Link></li>
                            <li><Link to="#contact">Contact</Link></li>
                            <li className="resume-button-li">
                                <Link to="" className="resume-button" id="login-logout-button">
                                    <TfiDownload style={{color: "#F45815", fontSize: "20px", marginRight: "15px"}}/>
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <nav className="mobile-nav">
                    <Link to="#about" className="remove-mobile-nav">About</Link>
                    <Link to="#work" className="remove-mobile-nav">Work</Link>
                    <Link to="#blog" className="remove-mobile-nav">Blog</Link>
                    <Link to="#contact" className="remove-mobile-nav">Contact</Link>
                    <Link to="" className="resume-button" id="login-logout-button">
                        <TfiDownload style={{color: "#F45815", fontSize: "20px", marginRight: "15px"}}/>
                        Resume
                    </Link>
                </nav>
                <div id="popup">
                    <h1>SUCCESS</h1>
                    <p>Thanks for getting in touch with me. I will get back to you in several hours to days.</p>
                    <Link to="#">Close</Link>
                </div>
                <main className="container"  id="blur">
                    <aside className="left_col">
                        <div className="diamonds">
                            <div className="diamond"></div>
                            <div className="diamond"></div>
                            <div className="diamond"></div>
                            <div className="diamond"></div>
                            <div className="diamond"></div>
                            <div className="diamond"></div>
                            <div className="diamond"></div>
                            <div className="diamond"></div>
                            <div className="diamond"></div>
                            <div className="diamond"></div>
                        </div>
                        <div className="col_1">
                            <div className="left_border first_line"></div>
                            <div className="social_icons">
                                <Link to="mailto:twizald.02@gmail.com" className='social_icons_icon'>
                                    <TfiEmail style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}}/>
                                </Link>
                                <Link to="https://github.com/Aldot-02" className='social_icons_icon'>
                                    <VscGithubAlt style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                                </Link>
                                <Link to="https://www.linkedin.com/in/aldot-/" className='social_icons_icon'>
                                    <RiLinkedinLine style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                                </Link>
                                <Link to="https://twitter.com/twizald" className='social_icons_icon'>
                                    <RiTwitterXLine style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                                </Link>
                                <Link to="https://www.instagram.com/sprout.ta/" className='social_icons_icon'>
                                    <BiLogoInstagram style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                                </Link>
                            </div>
                            <div className="left_border second_line"></div>
                        </div>
                    </aside>

                    {/* <!-- HOME SECTION --> */}
                    <section>
                        <div className="index">
                            <div className="index_content">
                                <div className="greetings">
                                    <h1>Hello, my name is</h1>
                                </div>
                                <div className="name">
                                    <h2>Aldo Twizerimana</h2>
                                </div>
                                <div className="role">
                                    <h3>I'm a Creative Code Artisan</h3>
                                </div>
                                <div className="description">
                                    <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products and data engineering solutions at Rwanda ICT Chamber.</p>
                                </div>
                                <div className="message">
                                    <MdOutlinePermPhoneMsg style={{fontSize: "20px", marginRight: "15px"}}/>
                                    <p>Hire Me</p>
                                </div>
                            </div>
                            <div className="profile_image">
                                <div className='image-container'>
                                    <img src={Profile} style={{zIndex: "-99999"}}/>
                                </div>
                            </div>
                        </div>

                        {/* <!-- ABOUT SECTION --> */}
                        <div className="about" id="about">
                            <div className="about-card my_story">
                                <p><em><q className="quote">Think the design, and Design the Thinking.</q></em></p>
                                <p>I'm a design-minded, detail oriented software engineer passionate about combining beautiful code with beautiful design.</p>
                                <p>I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.</p>
                            </div>

                            <div className="story-heading skills">
                                <GiOilySpiral style={{fill: "#F45815", fontSize:"350px", animation: "spin 2s linear infinite", borderRadius: "50%", padding: "2rem"}} />
                            </div>
                            <div className="about-card my_skills">
                                <div className="wrapper-diamond">
                                    <div className="single-item">
                                        <div className="box box-1"></div>
                                        <div className="box box-2"></div>
                                        <div className="box box-3"></div>
                                    </div>
                                    <div className="single-item">
                                        <div className="box box-4"></div>
                                        <div className="box box-5"></div>
                                        <div className="box box-6"></div>
                                    </div>
                                    <div className="single-item">
                                        <div className="box box-7"></div>
                                        <div className="box box-8"></div>
                                        <div className="box box-9"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-skills skills">
                                <i className="fa-solid fa-head-side-virus"></i>
                                <h2>My Skills</h2>
                            </div>
                        </div>
                        <div className="about-card what_I_do">
                            <h2>The Things I do</h2>
                            <div className="offerings">
                                <div className="services">
                                    <div className="item">
                                        <i className="fa-solid fa-splotch"></i>
                                        <h3>Web Development</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam a similique animi at. Quo veniam assumenda maiores sapiente, officia ipsam excepturi quos delectus alias facilis ipsa eos minus, exercitationem est.20</p>
                                </div>
                                <div className="services">
                                    <div className="item">
                                        <i className="fa-solid fa-splotch"></i>
                                        <h3>Web Development</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam a similique animi at. Quo veniam assumenda maiores sapiente, officia ipsam excepturi quos delectus alias facilis ipsa eos minus, exercitationem est.20</p>
                                </div>
                                <div className="services">
                                    <div className="item">
                                        <i className="fa-solid fa-splotch"></i>
                                        <h3>Web Development</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam a similique animi at. Quo veniam assumenda maiores sapiente, officia ipsam excepturi quos delectus alias facilis ipsa eos minus, exercitationem est.20</p>
                                </div>
                                <div className="services">
                                    <div className="item">
                                        <i className="fa-solid fa-splotch"></i>
                                        <h3>Web Development</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam a similique animi at. Quo veniam assumenda maiores sapiente, officia ipsam excepturi quos delectus alias facilis ipsa eos minus, exercitationem est.20</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- WORK SECTIN --> */}

                        <ProjectsPage activePath="/" />

                        {/* <!-- CONTACT PAGE --> */}
                        <div className="class_section" id="contact">
                            <div className="personal_contact">
                                <div className="contact_title">
                                    <h2>Faster communication</h2>
                                    <div className="contact_underline"></div>
                                </div>
                                <div className="flex_contact">
                                    <div className="fast_contact">
                                        <MdAlternateEmail style={{ background: "#0A192F", color: "#ffffff90", borderRadius: "50%", marginRight: "20px", fontSize: "50px", padding: "10px", cursor: "pointer"}}/>
                                        <div>
                                            <p>Email me</p>
                                            <p><Link to="mailto:twizald.02@gmail.com" >twizald.02@gmail.com</Link></p>
                                        </div>
                                    </div>
                                    <div className="fast_contact">
                                        <MdOutlinePhoneInTalk style={{ background: "#0A192F", color: "#ffffff90", borderRadius: "50%", marginRight: "20px", fontSize: "50px", padding: "10px", cursor: "pointer"}}/>
                                        <div>
                                            <p>contact me</p>
                                            <p>+250 789 764 748</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact">
                                <form className="home-contact">
                                    <h3>GET IN TOUCH</h3>
                                    <div className="input-field field">
                                        <input type="text" id="name" placeholder="Your name" className="item"/>
                                        <div className="error-txt">This Field can't be empty</div>
                                    </div>
                                    <div className="input-field field">
                                        <input type="text" id="email" placeholder="Email address" className="item"/>
                                        <div className="error-txt email-address">This Field can't be empty</div>
                                    </div>
                                    <div className="input-field field">
                                        <input type="tel" id="phone" placeholder="Your phone No." className="item"/>
                                        <div className="error-txt">This Field can't be empty</div>
                                    </div>
                                    <div className="input-field field">
                                        <input type="text" id="subject" placeholder="Subject" className="item"/>
                                        <div className="error-txt">This Field can't be empty</div>
                                    </div>
                                    <div className="textarea-field field">
                                        <textarea id="message" placeholder="Your message" wrap="soft" className="item"></textarea>
                                        <div className="error-txt">This Field can't be empty</div>
                                    </div>
                                    <button type="submit">Submit</button>
                                </form>                    
                            </div>
                        </div>
                        <div className="social_res-icons">
                            <Link to="mailto:twizald.02@gmail.com" className='social_icons_icon'>
                                <TfiEmail style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}}/>
                            </Link>
                            <Link to="https://github.com/Aldot-02" className='social_icons_icon'>
                                <VscGithubAlt style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Link>
                            <Link to="https://www.linkedin.com/in/aldot-/" className='social_icons_icon'>
                                <RiLinkedinLine style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Link>
                            <Link to="https://twitter.com/twizald" className='social_icons_icon'>
                                <RiTwitterXLine style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Link>
                            <Link to="https://www.instagram.com/sprout.ta/" className='social_icons_icon'>
                                <BiLogoInstagram style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Link>
                        </div>
                        <footer>
                            <p className="copyright">Designed and Built By Aldo Twizerimana</p>
                            <p className="git_ratings">Follow me on my <Link to="https://github.com/Aldot-02">Github</Link></p>
                        </footer>
                    </section>
                </main>
        </>
    );
}


export default HomePage;