import React, { useState, useEffect } from 'react';
import images from "../../assets/images";
import ProfileCard from '../../components/profile/ProfileCard';
import PayNowCard from '../../components/profile/PayNowCard';
import JobAlertToggle from '../../components/profile/NotificationCard';

const NotificationPage = () => {
  const [verificationData, setVerificationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem('login_token');
  return (
    <>
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ProfileCard/>
            </div>
            <div className="col-md-6">
               <div className='card'>
                <JobAlertToggle/>
               </div>
            </div>
            <div className="col-md-3">
              <PayNowCard type='verticle' BgImge={images["payment_banner.png"]}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotificationPage;
