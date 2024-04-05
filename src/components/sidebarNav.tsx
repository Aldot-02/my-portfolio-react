import React from 'react';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface NavItem {
    path: string;
    label: string;
    icon: JSX.Element;
}

interface NavigationSidebarProps {
    navItems: NavItem[];
    activePath: string;
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({ navItems, activePath }) => {
    return (
        <div className="sidebar-navigation">
            {navItems.map((item, index) => (
                <Link key={index} to={item.path}>
                    <div className={`nav-link menu-link ${item.path === activePath ? 'active' : ''}`}>
                        <div className="nav-card">
                            {item.icon}
                            <span>{item.label}</span>
                        </div>
                    </div>
                </Link>
            ))}
            <Link to="/logout">
                <div className="nav-link menu-link">
                    <div className="nav-card">
                        <MdLogout style={{fontSize: "20px", marginRight: "15px"}} />
                        <span>Logout</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default NavigationSidebar;