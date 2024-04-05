import React from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { PiDotsThreeVertical } from 'react-icons/pi';

interface SearchBarProps {
    pageTitle: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ pageTitle }) => {
    return (
        <div className="searchbar-top">
            <div className="top-header-nav">
                <span>{pageTitle}</span>
            </div>
            <div className="searchbar-section">
                <form>
                    <input type="search" name="" id="" placeholder="Search" className="search" />
                </form>
                <div className="searchbar-icons">
                    <IoIosNotificationsOutline style={{fontSize: "20px"}} />
                    <PiDotsThreeVertical style={{fontSize: "20px"}} />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;