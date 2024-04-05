import React from 'react'
import '../dashboard-styles/styles.css'
import { PiUserCircleLight } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { GrUserAdmin } from "react-icons/gr";
import { SiCountingworkspro } from "react-icons/si";
import { IoIosLaptop } from "react-icons/io";
import { SlDocs } from "react-icons/sl";
import { MdLogout } from "react-icons/md";
import { PiUsersThreeThin } from "react-icons/pi";
import SearchBar from '../../../components/searchBar';
import NavigationSidebar from '../../../components/sidebarNav';
import DashboardMobileNav from '../../../components/responsiveDashboardSidebar';



interface NavItem {
    path: string;
    label: string;
    icon: JSX.Element;
}
interface DashboardMobileNavItem {
    path: string;
    icon: JSX.Element;
}

const AdminHome: React.FC = () => {

    const navItems: NavItem[] = [
        { path: '/admin/home', label: 'Dashboard', icon: <RxDashboard style={{fontSize: "20px", marginRight: "15px"}}/> },
        { path: '/admin/admins', label: 'Admins', icon: <GrUserAdmin style={{fontSize: "20px", marginRight: "15px"}}/> },
        { path: '/admin/projects', label: 'Projects', icon: <SiCountingworkspro style={{fontSize: "20px", marginRight: "15px"}} /> },
        { path: '/admin/experience', label: 'Experience', icon: <IoIosLaptop style={{fontSize: "20px", marginRight: "15px"}} /> },
        { path: '/admin/certification', label: 'Certifications', icon: <SlDocs style={{fontSize: "20px", marginRight: "15px"}} /> },
    ];

    const dashboardMobileNavItems: DashboardMobileNavItem[] = [
        { path: '/admin/home', icon: <RxDashboard style={{fontSize: "20px", marginRight: "15px"}} /> },
        { path: '/admin/admins', icon: <GrUserAdmin style={{fontSize: "20px", marginRight: "15px"}} /> },
        { path: '/admin/projects', icon: <SiCountingworkspro style={{fontSize: "20px", marginRight: "15px"}} /> },
        { path: '/admin/experience', icon: <IoIosLaptop style={{fontSize: "20px", marginRight: "15px"}} /> },
        { path: '/admin/certification', icon: <SlDocs style={{fontSize: "20px", marginRight: "15px"}} /> },
        { path: '../Authentication/Login.html', icon: <MdLogout style={{fontSize: "20px", marginRight: "15px"}} /> },
    ];

    const activePath: string = '/admin/home';
    const activeNavItem = navItems.find(item => item.path === activePath);

    
  return (
    <>
        <div className="dash-container">
        <div className="hamburger">
            <div className="bar"></div>
        </div>
        <section className="sidebar-nav">
            <div className="sidebar-header menu-link">
                <div className="admin-profile">
                    <PiUserCircleLight style={{fontSize: "40px", color: "#F45815"}} />
                </div>
                <div className="admin-details-top">
                    <p className="admin-name"></p>
                    <p className="admin-role">Administrator</p>
                </div>
            </div>
            <NavigationSidebar navItems={navItems} activePath={activePath} />
            <DashboardMobileNav navItems={dashboardMobileNavItems} />
        </section>
        <section className="dashboard-content">
            <SearchBar pageTitle={activeNavItem?.label || ''} />
            <div className="dashboard-main-content">
                <div className="left-stats-col">
                    <div className="left-top-stats">
                        <div className="left-top-stats-card">
                            <div className="card-header">
                                <PiUsersThreeThin style={{fontSize: "25px", marginRight: "15px"}} />
                                <p>Total Admins</p>
                            </div>
                            <div className="card-numbers">
                                <p className="color">69</p>
                            </div>
                        </div>
                        <div className="left-top-stats-card">
                            <div className="card-header">
                                <IoIosLaptop style={{fontSize: "25px", marginRight: "15px"}} />
                                <p>Total Projects</p>
                            </div>
                            <div className="card-numbers">
                                <p className="color blogs-nbr">69</p>
                            </div>
                        </div>
                        <div className="left-top-stats-card">
                            <div className="card-header">
                                <SlDocs style={{fontSize: "25px", marginRight: "15px"}} />
                                <p>Total Certificates</p>
                            </div>
                            <div className="card-numbers">
                                <p className="color">69</p>
                            </div>
                        </div>
                    </div>
                    <div className="left-stats-users">
                        <h3>Latest Registered Users</h3>
                        <table id="user-table">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email Address</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="right-stats-col">
                    <p>All Blogs Were Liked By <span className="color">123</span> People.</p>
                    <p>All Projects Were Opened By <span className="color">123</span> People.</p>
                    <p><span className="color">123</span> People Downloaded The Resume</p>
                    <p><span className="color">Want see who they are?</span></p>
                    <p>Navigate me and get to know more details about who they are.</p>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default AdminHome


