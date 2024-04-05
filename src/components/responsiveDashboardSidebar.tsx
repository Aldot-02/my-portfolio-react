import React from 'react';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
interface DashboardMobileNavItem {
    path: string;
    icon: JSX.Element;
}

interface DashboardMobileNavProps {
    navItems: DashboardMobileNavItem[];
}

const DashboardMobileNav: React.FC<DashboardMobileNavProps> = ({ navItems }) => {
    return (
        <div className="dashboard-mobile-nav">
            {navItems.map((item, index) => (
                <Link key={index} to={item.path}>
                    {item.icon}
                </Link>
            ))}
            <Link to="/logout">
                <div className="nav-link menu-link">
                    <div className="nav-card">
                        <MdLogout style={{fontSize: "20px", marginRight: "15px"}} />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DashboardMobileNav;