import React, { useState, useEffect } from 'react';
const JobCard = ({companyLogo,companyName,jobpost, jobsposted}) => {
  return (
    <>
        <div className='card no-border' style={{cursor:'pointer'}}>
            <div className='d-flex gap-2'>
              <div className='comp_logo w-25'>
                {companyLogo && <img src={companyLogo} alt={`${companyName} logo`} />}
              </div>
                <div className=''>
                    {companyName}
                    <p style={{fontWeight:'300',color:'#6B7280'}}>{jobpost}</p>
                </div>
            </div>
            {jobsposted && (  // Conditional rendering
              <div className='d-flex gap-2 mt-2'>
              <h2 className=''>{jobsposted}</h2><p style={{fontWeight:300}}>Jobs Available</p>
            </div>
          )}
        </div>
    </>
  );
};

export default JobCard;



