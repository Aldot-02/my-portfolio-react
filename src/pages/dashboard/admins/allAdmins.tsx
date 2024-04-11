import React from 'react'
import '../dashboard-styles/styles.css'
import { PiUserCircleLight } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { GrUserAdmin } from "react-icons/gr";
import { SiCountingworkspro } from "react-icons/si";
import { IoIosLaptop } from "react-icons/io";
import { SlDocs } from "react-icons/sl";
import { MdLogout } from "react-icons/md";
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

const allAdmins: React.FC = () => {

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

const activePath: string = '/admin/admins';
const activeNavItem = navItems.find(item => item.path === activePath);


  return (
    <>
      <div className="dash-container" id="blur">
          <div className="hamburger">
              <div className="bar"></div>
          </div>
          <section className="sidebar-nav">
              <div className="sidebar-header menu-link">
                  <div className="admin-profile">
                      <PiUserCircleLight style={{fontSize: "40px", color: "#F45815"}} />
                  </div>
                  <div className="admin-details-top">
                      <p className="admin-name">Aldo Twizerimana</p>
                      <p className="admin-role">Administrator</p>
                  </div>
              </div>
              <NavigationSidebar navItems={navItems} activePath={activePath} />
              <DashboardMobileNav navItems={dashboardMobileNavItems} />
          </section>
          <section className="dashboard-content">
              <SearchBar pageTitle={activeNavItem?.label || ''} />
              <div className="dashboard-main-content">
                  <div className="users-stats-col">
                      <div className="all-users">
                          <table className="user-table" id="user-table-extended">
                              <thead>
                                  <tr>
                                      <th>First Name</th>
                                      <th>Last Name</th>
                                      <th>Email Address</th>
                                      <th>Action</th>
                                  </tr>
                              </thead>
                              <tbody>

                              </tbody>
                          </table>
                          <div className="user-controller-btns">
                              <button className="user-btn">Prev</button>
                              <button className="user-btn non-active-btn">Next</button>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    </>
  )
}

export default allAdmins