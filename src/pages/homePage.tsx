import { Link } from 'react-router-dom';
import { TfiEmail } from "react-icons/tfi";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinLine, RiTwitterXLine } from "react-icons/ri";
import { BiLogoInstagram } from "react-icons/bi";
import Reaveal from '../components/reveal'
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { IoIosLaptop } from "react-icons/io";
import { PiDatabaseThin } from "react-icons/pi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiSoundcloudLogoLight } from "react-icons/pi";
import { SlDocs } from "react-icons/sl";
import { TbMenu2 } from "react-icons/tb";
import './homePage.css';
import ProjectsPage from './projectPage/projectPage';
import { useState, useEffect } from 'react';
const Image = require('../images/Image.png')
const AboutProfile = require('../images/profile.jpeg')
const Alx = require('../images/alx.jpeg')
const Chamber = require('../images/ict_chamber.jpeg')
const Andela = require('../images/andela.png');


const HomePage: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);

            const header = document.querySelector('header');
            if (currentScrollPos > 0) {
                header?.classList.remove('header-top');
                header?.classList.add('header-scroll');
            } else {
                header?.classList.remove('header-scroll');
                header?.classList.add('header-top');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);


    return (
        <>
                <div className="floating-button">
                    <a href="https://wa.me/250789764748">
                        <MdOutlinePermPhoneMsg style={{fontSize: "20px"}}/>
                    </a>
                </div>
                <header style={{ top: visible ? 0 : -128 }}>             
                    <Link to='' className="logo">
                            <img alt="" src={Image} />
                    </Link>
                    <TbMenu2 id='menu-icon' className={isMenuOpen ? 'close-icon' : ''} onClick={toggleMenu} />
                    <nav className={`navbar ${isMenuOpen ? 'active-menu' : ''}`}>
                        <a href="#about" onClick={toggleMenu}><span className="color">01. </span> About</a>
                        <a href="#experience" onClick={toggleMenu}><span className="color">02. </span> Experience</a>
                        <a href="#work" onClick={toggleMenu}><span className="color">03. </span> Work</a>
                        <a href="#contact" onClick={toggleMenu}><span className="color">04. </span> Contact</a>
                        <a href="https://drive.google.com/file/d/1hphhSS35RVk-pgzpR9FIMsG7hxUaZxwr/view?usp=sharing" className="resume-button" id="login-logout-button" target='_blank' rel="noreferrer" onClick={toggleMenu}>
                        <span className="color">05. </span> Resume
                        </a>
                    </nav>
                </header>
            <div className={`nav-bg ${isMenuOpen ? 'active-menu' : ''}`}></div>
            <main className="container"  id="blur">
                <aside className="left_col">
                    <div className="col_1">
                        <Reaveal>
                            <div className="left_border first_line"></div>
                        </Reaveal>
                        <div className="social_icons">
                            <Link to="https://github.com/Aldot-02" className='social_icons_icon'>
                                <Reaveal>
                                    <VscGithubAlt style={{fontSize: "20px", marginTop: "20px"}} />
                                </Reaveal>
                            </Link>
                            <Link to="https://www.linkedin.com/in/aldot-/" className='social_icons_icon'>
                                <Reaveal>
                                    <RiLinkedinLine style={{fontSize: "20px", marginTop: "20px"}} />
                                </Reaveal>
                            </Link>
                            <Link to="https://twitter.com/twizald" className='social_icons_icon'>
                                <Reaveal>
                                    <RiTwitterXLine style={{fontSize: "20px", marginTop: "20px"}} />
                                </Reaveal>
                            </Link>
                            <Link to="https://www.instagram.com/sprout.ta/" className='social_icons_icon'>
                                <Reaveal>
                                    <BiLogoInstagram style={{fontSize: "20px", marginTop: "20px"}} />
                                </Reaveal>
                            </Link>
                        </div>
                        <Reaveal>
                            <div className="left_border second_line"></div>
                        </Reaveal>
                    </div>
                </aside>

                {/* <!-- HOME SECTION --> */}
                <section>
                    <div className="index">
                        <div className="index_content">
                            <div className="greetings">
                                <Reaveal>
                                    <h1>Hello, my name is</h1>
                                </Reaveal>
                            </div>
                            <div className="name">
                                <Reaveal>
                                    <h2>Aldo Twizerimana.</h2>
                                </Reaveal>
                            </div>
                            <div className="role">
                                <Reaveal>
                                    <h3>I'm a Creative  <span className='color'>Code </span>Artisan.</h3>
                                </Reaveal>
                            </div>
                            <div className="description">
                                <Reaveal>
                                    <p>I’m a software engineer specializing in building and designing exceptional digital experiences. Currently, I’m focused on building accessible, and cross-cutting tech solutions through <span className='color'>Andela Apprenticeship.</span></p> 
                                </Reaveal>
                            </div>
                            <Reaveal>
                                <a href="#contact">
                                    <div className="message">
                                            <TfiEmail style={{fontSize: "20px", marginRight: "15px"}}/>
                                            <p>Hire Me</p>
                                    </div>
                                </a>
                            </Reaveal>
                        </div>
                    </div>

                    {/* <!-- ABOUT SECTION --> */}
                    <div className="about" id="about">
                        <div className="my_story_profile img">
                            <Reaveal>
                                <img alt="" src={AboutProfile} style={{zIndex: "-99999"}}/>
                            </Reaveal>
                        </div>
                        <div className="about-card my_story">
                            <div className="about-heading">
                                <div className="line"></div>
                                <h2><span className='color'>01. </span>About Me</h2>
                            </div>
                            <Reaveal>
                                <p>I'm a design-minded, detail oriented software engineer passionate about combining beautiful code with beautiful design.</p>
                            </Reaveal>
                            <Reaveal>
                                <p>I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. I consider <span className='color'>work an ongoing education</span>, and I'm always looking for <span className='color'>opportunities</span> to work with those who are willing to <span className='color'>share</span> their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me. I achieve all of these using these <span className='color'>technologies</span>:</p>
                            </Reaveal>
                            <div className="tech-skills">
                                    <ul>
                                        <Reaveal>
                                            <li>JavaScript (ES6+)</li>
                                        </Reaveal>
                                        <Reaveal>
                                            <li>React</li>
                                        </Reaveal>
                                        <Reaveal>
                                            <li>Node.js</li>
                                        </Reaveal>
                                    </ul>
                                    <ul>
                                        <Reaveal>
                                            <li>Typescript</li>
                                        </Reaveal>
                                        <Reaveal>
                                            <li>Git & GitHub</li>
                                        </Reaveal>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div className="about-card what_I_do">
                        <div className="my-services">
                                <h2>My <span className='color'>Services</span></h2>
                            <div className="service-cards">
                                    <div className="card">
                                        <Reaveal>
                                            <IoIosLaptop className='service-icon' style={{marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        </Reaveal>
                                        <Reaveal>
                                            <h3>Frontend Development</h3>
                                        </Reaveal>
                                        <Reaveal>
                                            <p>I build elegant and accessible apps & websites using CSS, React, Next.js, Bootstrap, and Vanilla JavaScript.</p>
                                        </Reaveal>
                                    </div>
                                    <div className="card">
                                        <Reaveal>
                                            <PiDatabaseThin className='service-icon' style={{marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        </Reaveal>
                                        <Reaveal>
                                            <h3>Backend Development</h3>
                                        </Reaveal>
                                        <Reaveal>
                                            <p>I build a scalable and secure backend functionality of apps & websites using Node.js, Express, MongoDB, and Postgresql.</p>
                                        </Reaveal>
                                    </div>
                                    <div className="card">
                                        <Reaveal>
                                            <HiOutlineDevicePhoneMobile className='service-icon' style={{marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        </Reaveal>
                                        <Reaveal>
                                            <h3>Mobile Development</h3>
                                        </Reaveal>
                                        <Reaveal>
                                            <p>I build a mobile applications using React Native.</p>
                                        </Reaveal>
                                    </div>
                                    <div className='card'>
                                        <Reaveal>
                                            <PiDatabaseThin className='service-icon' style={{marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        </Reaveal>
                                        <Reaveal>
                                            <h3>Database Management</h3>
                                        </Reaveal>
                                        <Reaveal>
                                            <p>I manage and maintain databases using SQL and NoSQL databases.</p>
                                        </Reaveal>
                                    </div>
                                    <div className='card'>
                                        <Reaveal>
                                            <PiSoundcloudLogoLight className='service-icon' style={{marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        </Reaveal>
                                        <Reaveal>
                                            <h3>Data Engineering</h3>
                                        </Reaveal>
                                        <Reaveal>
                                            <p>I build datawarehouses and datapipelines using Snowflake, AmazonRedshift, and BigQuery.</p>
                                        </Reaveal>
                                    </div>
                                    <div className='card'>
                                        <Reaveal>
                                            <SlDocs className='service-icon' style={{marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        </Reaveal>
                                        <Reaveal>
                                            <h3>Data Strategy Documentation</h3>
                                        </Reaveal>
                                        <Reaveal>
                                            <p>I help businesses to build data strategy about the company's data and data management methodologies.</p>
                                        </Reaveal>
                                    </div>
                            </div>
                        </div>
                    </div>

                    {/* EXPERIENCE SECTION */}
                    <h2 className='experience-section'><span className='color' id='experience'>02. </span>Experience</h2>
                    <div className="timeline">
                        <div className="timeline-container left-container">
                            <img alt="" src={Alx}/>
                            <div className="text-box">
                                    <div className="experience">
                                        <Reaveal>
                                            <h2>Fullstack Software Developer @<span className='color'>Andela</span></h2>
                                        </Reaveal>
                                        <Reaveal>
                                            <p style={{fontSize: "16px"}}>Jan 2024 - Present . <span className='color'>Remote</span></p>
                                        </Reaveal>
                                        <Reaveal>
                                            <p className='color'  style={{fontSize: "14px"}}>- Apprenticeship -</p>
                                        </Reaveal>
                                    </div>
                                    <ul>
                                        <Reaveal>
                                            <li>Acquired hands-on experience with modern web development technologies and best practices, enhancing problem-solving skills, attention to detail, and ability to prioritize tasks in a dynamic and fast-paced development environment.</li>
                                        </Reaveal>
                                        <Reaveal>
                                            <li>Collaborated with team members to design and build an e-commerce marketplace platform, incorporating functionalities like user authentication, product management, cart functionality, and checkout process using Node.js, Express, PostgreSQL, and React, as well as working independently to develop fully functional blog website</li>
                                        </Reaveal>
                                        <Reaveal>
                                            <li>Demonstrated effective leadership, communication, and collaboration skills within a team environment, conducting code reviews, providing feedback, and addressing issues to improve code quality and project outcomes.</li>
                                        </Reaveal>
                                    </ul>
                                <span className='left-container-arrow'></span>
                            </div>
                        </div>
                        <div className="timeline-container right-container">
                            <img alt="" src={Chamber}/>
                            <div className="text-box">
                                <div className="experience">
                                    <Reaveal>
                                        <h2>Data Engineer @<span className='color'>Rwanda ICT Chamber</span></h2>
                                    </Reaveal>
                                    <Reaveal>
                                        <p>May 2023 - Feb 2024 . <span className='color'>Hybrid</span></p>
                                    </Reaveal>
                                    <Reaveal>
                                        <p className='color'  style={{fontSize: "14px"}}>- Fellowship -</p>
                                    </Reaveal>
                                </div>
                                <ul>
                                    <Reaveal>
                                        <li>Developed data strategy for both Umurava and Inyange companies,  that provides the guiding plan to define the people, processes and technology necessary to solve data challenges they were facing and support their business goal.</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Built a data lake that will help to eliminate the need for data modeling at the time of ingestion in the future after the data warehouse is built and be used for data analysis.</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Developed Data warehouse architectures to define the structure of those companies' data warehouse.</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Worked on Data modeling and ETL processes documentation that will include data sources and transformation used to populate the data warehouse as well as entities and relationships within the data.</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Worked on automating data pipelines for uploading data in the data warehouse programmatically rather than manually for long-term sustainability.</li>
                                    </Reaveal>
                                </ul>
                                <span className='right-container-arrow'></span>
                            </div>
                        </div>
                        <div className="timeline-container left-container">
                            <img alt="" src={Andela}/>
                            <div className="text-box">
                                <div className="experience">
                                    <Reaveal>
                                        <h2>Fullstack Software Developer @<span className='color'>ALX Africa</span></h2>
                                    </Reaveal>
                                    <Reaveal>
                                        <p style={{fontSize: "16px"}}>Nov 2022 - Dec 2023 . <span className='color'>Remote</span></p>
                                    </Reaveal>
                                    <Reaveal>
                                        <p className='color'  style={{fontSize: "14px"}}>- Apprenticeship -</p>
                                    </Reaveal>
                                </div>
                                <ul>
                                    <Reaveal>
                                        <li>Line 138:37:  img alt="" elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Line 138:37:  img alt="" elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Line 138:37:  img alt="" elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Line 138:37:  img alt="" elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Line 138:37:  img alt="" elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                </ul>
                                <span className='left-container-arrow'></span>
                            </div>
                        </div>
                    </div>
                    {/* THE END OF EXPERIENCE SECTION */}

                    {/* <!-- WORK SECTIN --> */}
                    <ProjectsPage activePath="/" />

                    {/* <!-- CONTACT PAGE --> */}
                    <h2 style={{textAlign: "center", margin: "100px auto"}} id='contact'><span className='color'>04. </span>Get In Touch</h2>
                    <div className="mail-me">
                        <div className='contact-me'>
                            <Reaveal>
                                <p>Whether you have an idea for a <span className='color'>project</span> or just want to chat, feel free to send me an email!</p>
                            </Reaveal>
                            <Reaveal>
                                <p>I am currently looking for new <span className='color'>opportunities</span>, and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                            </Reaveal>
                            <Reaveal>
                                <a href="mailto:twizald.02@gmail.com">
                                    <div className='message'>
                                        <TfiEmail style={{fontSize: "20px", marginRight: "15px"}}/>
                                        <span>Email Me</span>
                                    </div>
                                </a>
                            </Reaveal>
                        </div>
                    </div>
                    <div className="social_res-icons">
                        <Link to="https://github.com/Aldot-02" className='social_icons_icon'>
                            <Reaveal>
                                <VscGithubAlt style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Reaveal>
                        </Link>
                        <Link to="https://www.linkedin.com/in/aldot-/" className='social_icons_icon'>
                            <Reaveal>
                                <RiLinkedinLine style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Reaveal>
                        </Link>
                        <Link to="https://twitter.com/twizald" className='social_icons_icon'>
                            <Reaveal>
                                <RiTwitterXLine style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Reaveal>
                        </Link>
                        <Link to="https://www.instagram.com/sprout.ta/" className='social_icons_icon'>
                            <Reaveal>
                                <BiLogoInstagram style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Reaveal>
                        </Link>
                    </div>
                    <footer>
                        <Reaveal>
                            <p className="copyright" style={{color: "#8892b0", fontSize: "16px"}}>Designed and Built By Aldo Twizerimana</p>
                        </Reaveal>
                        <Reaveal>
                            <p className="git_ratings" style={{color: "#8892b0", fontSize: "16px"}}>Follow me on my <a href="https://github.com/Aldot-02" className='color'>Github</a></p>
                        </Reaveal>
                    </footer>
                </section>
            </main>
        </>
    );
}


export default HomePage;