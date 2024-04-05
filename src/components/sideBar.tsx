import React from 'react'
import { PiUserCircleLight } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { GrUserAdmin } from "react-icons/gr";
import { SiCountingworkspro } from "react-icons/si";
import { IoIosLaptop } from "react-icons/io";
import { SlDocs } from "react-icons/sl";
import { MdLogout } from "react-icons/md";

function sideBar() {
  return (
    <>
            <section className="sidebar-nav">
            <div className="sidebar-header menu-link">
                <div className="admin-profile">
                    <PiUserCircleLight />
                </div>
                <div className="admin-details-top">
                    <p className="admin-name"></p>
                    <p className="admin-role">Administrator</p>
                </div>
            </div>
            <div className="sidebar-navigation">
                <Link to="#">
                    <div className="nav-link menu-link active">
                        <div className="nav-card">
                            <RxDashboard />
                            <p>Dashboard</p>
                        </div>
                    </div>
                </Link>
                <Link to="admin-users.html">
                    <div className="nav-link menu-link">
                        <div className="nav-card">
                            <GrUserAdmin />
                            <p>Admins</p>
                        </div>
                    </div>
                </Link>
                <Link to="admin-blogs.html">
                    <div className="nav-link menu-link">
                        <div className="nav-card">
                            <SiCountingworkspro />
                            <p>Projects</p>
                        </div>
                    </div>
                </Link>
                <Link to="admin-projects.html">
                    <div className="nav-link menu-link">
                        <div className="nav-card">
                            <IoIosLaptop />
                            <p>Experience</p>
                        </div>
                    </div>
                </Link>
                <Link to="admin-media.html">
                    <div className="nav-link menu-link">
                        <div className="nav-card">
                            <SlDocs />
                            <p>Certifications</p>
                        </div>
                    </div>
                </Link>
                <div className="nav-link menu-link logout">
                    <div className="nav-card">
                        <MdLogout />
                        <p>Logout</p>
                    </div>
                </div>
            </div>
            <div className="dashboard-mobile-nav">
                <Link to="#">
                    <RxDashboard />
                </Link>
                <Link to="admin-users.html">
                    <GrUserAdmin />
                </Link>
                <Link to="admin-blogs.html">
                    <SiCountingworkspro />
                </Link>
                <Link to="admin-projects.html">
                    <IoIosLaptop />
                </Link>
                <Link to="admin-media.html">
                    <SlDocs />
                </Link>
                <Link to="../Authentication/Login.html" className="logout">
                    <MdLogout />
                </Link>
            </div>
        </section>
    </>
  )
}

export default sideBar