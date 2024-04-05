import React, { useState } from 'react';
import { PiUserCircleLight } from 'react-icons/pi';
import { RxDashboard } from 'react-icons/rx';
import { GrUserAdmin } from 'react-icons/gr';
import { SiCountingworkspro } from 'react-icons/si';
import { IoIosLaptop } from 'react-icons/io';
import { SlDocs } from 'react-icons/sl';
import { MdLogout } from 'react-icons/md';
import SearchBar from '../../../components/searchBar';
import NavigationSidebar from '../../../components/sidebarNav';
import DashboardMobileNav from '../../../components/responsiveDashboardSidebar';
import ProjectsPage from '../../projectPage/projectPage';
import NewProject from '../../../components/newProject';

interface NavItem {
    path: string;
    label: string;
    icon: JSX.Element;
}
interface DashboardMobileNavItem {
    path: string;
    icon: JSX.Element;
}

const AdminProject: React.FC = () => {
    const navItems: NavItem[] = [
        { path: '/admin/home', label: 'Dashboard', icon: <RxDashboard style={{ fontSize: '20px', marginRight: '15px' }} /> },
        { path: '/admin/admins', label: 'Admins', icon: <GrUserAdmin style={{ fontSize: '20px', marginRight: '15px' }} /> },
        { path: '/admin/projects', label: 'Projects', icon: <SiCountingworkspro style={{ fontSize: '20px', marginRight: '15px' }} /> },
        { path: '/admin/experience', label: 'Experience', icon: <IoIosLaptop style={{ fontSize: '20px', marginRight: '15px' }} /> },
        { path: '/admin/certification', label: 'Certifications', icon: <SlDocs style={{ fontSize: '20px', marginRight: '15px' }} /> },
    ];

    const dashboardMobileNavItems: DashboardMobileNavItem[] = [
        { path: '/admin/home', icon: <RxDashboard style={{ fontSize: '20px', marginRight: '15px' }} /> },
        { path: '/admin/admins', icon: <GrUserAdmin style={{ fontSize: '20px', marginRight: '15px' }} /> },
        { path: '/admin/projects', icon: <SiCountingworkspro style={{ fontSize: '20px', marginRight: '15px' }} /> },
        { path: '/admin/experience', icon: <IoIosLaptop style={{ fontSize: '20px', marginRight: '15px' }} /> },
        { path: '/admin/certification', icon: <SlDocs style={{ fontSize: '20px', marginRight: '15px' }} /> },
        { path: '../Authentication/Login.html', icon: <MdLogout style={{ fontSize: '20px', marginRight: '15px' }} /> },
    ];

    const [isAddingNewProject, setIsAddingNewProject] = useState(false);

    const handleToggleForm = () => {
        setIsAddingNewProject((prev) => !prev);
    };

    const activePath: string = '/admin/projects';
    const activeNavItem = navItems.find((item) => item.path === activePath);

    return (
        <div className="dash-container">
            <section className="sidebar-nav">
                <div className="hamburger">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="sidebar-header menu-link">
                    <div className="admin-profile">
                        <PiUserCircleLight style={{ fontSize: '40px', color: '#F45815' }} />
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
                    <div className="projects-stats-col">
                        <div className="projects-controller-btns">
                            <button className="user-btn" onClick={handleToggleForm}>
                                Add New
                            </button>
                        </div>
                        {isAddingNewProject ? <NewProject /> : <ProjectsPage activePath="/admin/projects" />}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminProject;