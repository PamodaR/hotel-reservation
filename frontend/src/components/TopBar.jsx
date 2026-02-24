import React from 'react';
import { Menu, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopBar = ({ toggleSidebar, userRole }) => {
    const navigate = useNavigate();
    const username = "Guest"; // TODO: Fetch from context or local storage if available

    return (
        <header className="sticky top-0 z-30 flex items-center justify-between h-20 px-6 bg-white/80 backdrop-blur-md border-b border-surface-200 shadow-sm transition-all duration-300">
            {/* Left Section: Menu Toggle & Title */}
            <div className="flex items-center">
                <button
                    onClick={toggleSidebar}
                    className="p-2 mr-4 text-surface-500 rounded-lg lg:hidden hover:bg-surface-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Right Section: Profile Only */}
            <div className="flex items-center space-x-4">
                {/* User Profile Dropdown Simulator */}
                <div className="relative flex items-center pl-4 border-l border-surface-200">
                    <div className="flex flex-col items-end mr-3 hidden sm:flex">
                        <span className="text-sm font-semibold text-surface-900">{username}</span>
                        <span className="text-xs text-surface-500 font-medium bg-surface-100 px-2 py-0.5 rounded-full uppercase tracking-wider">{userRole}</span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold shadow-md cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-primary-500 transition-all">
                        {username.charAt(0)}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;