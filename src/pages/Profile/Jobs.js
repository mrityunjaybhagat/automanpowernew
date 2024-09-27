import React, { useState, useEffect } from "react";

import icons from "../../assets/icons";
import images from "../../assets/images";
import ProfileCard from "../../components/profile/ProfileCard";
import IconCard from "../../components/ui/IconCard";
import PayNowCard from "../../components/profile/PayNowCard";
import OverviewData from "../../components/profile/OverviewData";
import TopCompanies from "../../components/profile/TopCompnies";
import RecemendedData from "../../components/profile/RecemndedData";
import UserProfile from "../../components/profile/Profile";
import NewlyAdded from "../../components/profile/NewlyAdded";

const Jobs = () => {
  return (
    <>
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ProfileCard />
              {/* <UserProfile/> */}
            </div>
            <div className="col-md-6">
            {/* Pay Now Banner */}
              <div className="card no-pad shadow">
              <PayNowCard
                    type=""
                    BgImge={images["payment_banner.png"]}
                  />
              </div>
              {/* Overview */}
              <div className="card no-border shadow">
                <div className="card-head">
                  <h3 className="card-title">Overview</h3>
                </div>
                <div className="d-flex justify-between w-100 gap-2">
                    <OverviewData/>
                </div>
              </div>
              {/* Recemended Jobs */}
              <div className="card no-border shadow">
              <div className="card-head">
                  <h3 className="card-title">Recemended Jobs</h3>
                  <a href="">See All</a>                  
              </div> 
              <div>
              <RecemendedData/>
              </div>               
              </div>
              {/* Search By JobType */}
              <div className="card no-border shadow">
              <div className="card-head">
                  <h3 className="card-title">Search by Job Type</h3>
              </div>
                
                <div className="d-flex justify-between  w-100  gap-2">
                  <IconCard iconSrc={icons["fulltime.svg"]} text="Full Time" goTo='/jobs/Fulltime'/>
                  <IconCard iconSrc={icons["parttime.svg"]} text="Part Time" goTo='/jobs/Part-time'/>
                  <IconCard
                    iconSrc={icons["internship.svg"]}
                    text="Internship"
                    goTo='/jobs/Internship'
                  />
                </div>
              </div>
              {/* Top Companies*/}
              <div className="card no-border shadow">
              <div className="card-head">
                <h3 className="card-title">New Hiring</h3>
              </div>
                <NewlyAdded/>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card verticle topcompanies p-4">
              <h2>Top Companies</h2>
                <TopCompanies/>
              </div>
              <PayNowCard type='verticle' BgImge={images["payment_banner.png"]}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );    
};

export default Jobs;
