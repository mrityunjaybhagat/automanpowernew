import React, { useState, useEffect } from 'react';
import InputWithIcon from '../form/InputWithIcon';
import Logo from './Logo';
import { useLocation } from 'react-router-dom';
import { MenuIcon ,Bell, User2, SearchCheck, Search} from "lucide-react";
import icons from '../../assets/icons';
import LogoutModal from '../ui/LogoutModal';
import JobSearchForm from '../ui/SearchForm';
const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const location = useLocation();
  const userId = localStorage.getItem("login_token");
  const isLoggedIn = !!localStorage.getItem('login_token');

  const onlyLogoPaths = ['/login', '/verify-mobile','/upload-resume','/create-profile'];
  const onlyLogo = onlyLogoPaths.includes(location.pathname);
  const handleLogout = ({onlyLogo}) => {
    // Clear token and log out logic
    localStorage.removeItem("login_token");
    alert("You have been logged out.");
    window.location.href = "/login";
  };
  return (
    <>
        <header className='header  sticky-top top'>
            <div className='container'>
            <nav className={`navbar ${onlyLogo ? 'justify-content-center' : ''}`}>
                <Logo/>
                <div className='d-flex justify-content-end align-items-center'>
                {!onlyLogo && (
                <>
                {isLoggedIn ? (
                  <>
                  <span className='searchbox' onClick={() => setShowDiv(prev => !prev)}>
                    <InputWithIcon icon={<img src={icons["search.svg"]}/>}>
                    <input type='search' className='form-control' placeholder='Search Jobs'/>
                    </InputWithIcon>
                  </span>
                <a className='btn me-2  p-2 px-2' href="/notifications"><img src={icons["bell.svg"]}/></a> 
                <div className="dropdown-center">
                  <button className="btn me-2  p-2 px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={icons["toogleBlue.svg"]}/>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <a className='btn me-2  p-2 px-2' href="/receipt">Receipt</a>
                    <a className='btn me-2  p-2 px-2' href="/t&c">Terms & Conditions</a>
                    <a className='btn me-2  p-2 px-2' href="/privacy_policy">Privacy Policy</a>
                  </ul>
                </div>
                <div className="btn-group">
                  <button className="btn me-2  p-2 px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={icons["userSolid.svg"]}/>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <a className='btn me-2  p-2 px-2' href="/login">Account</a>
                    <a className='btn me-2  p-2 px-2' href="/login">Notification</a>
                    <button className="btn me-2  p-2 px-2" data-bs-toggle="modal" data-bs-target="#logoutModal">
                      Logout
                    </button>
                  </ul>
                </div>              
                  </>
                ):(
                  <>
                  <a className='btn btn-primary btn-trans me-2  p-2 px-4' href="/login">Login</a>
                  <a className='btn btn-primary btn-trans me-2  p-2 px-4' href="/login">Registration</a>
                  <a href="/login">For Employers</a>
                  </>
                )}

                </>)}
                
                </div>
                {showDiv && 
                  <>
                  <div class="header_search w-100">
                    <JobSearchForm/>
                  </div>
                  </>
                }
                </nav>
            </div>
        </header>
        <LogoutModal handleLogout={handleLogout}/>
    </>
  );
};

export default Header;



