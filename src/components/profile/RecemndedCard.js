import React, { useState, useEffect } from 'react';
import images from "../../assets/images";
import CompanyCard from './CompanyCard';
const RecemndedCard = () => {
  return (
    <>
        
      <CompanyCard 
  companyLogo={images['SBI.svg']} // Static image passed as a prop
  companyName="Google" // Static name passed as a prop
  jobpost="Software Engineer" // Static job post
  jobsposted={10} // Static jobs count
/>
    </>
  );
};

export default RecemndedCard;
