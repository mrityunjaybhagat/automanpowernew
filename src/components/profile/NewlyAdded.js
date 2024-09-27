import React, { useState, useEffect } from 'react';
import { getRecentJobDetails } from '../../services/profileServices';
import CompanyCard from './CompanyCard';

const NewlyAdded = () => {
    const [recentJobs, setRecentJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchRecentJobs = async () => {
        const userId = localStorage.getItem("login_token"); 
        const offset = 0;
        const limit = 10;
  
        try {
          const jobDetails = await getRecentJobDetails(userId,offset, limit);
          setRecentJobs(jobDetails); // Assuming jobDetails is an array of recent jobs
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
  
      fetchRecentJobs();
    }, []);
  
    if (loading) {
      return <p>Loading recent jobs...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
    return (
    <>
      {recentJobs.map((company, index) => (
        <CompanyCard 
          key={index}
          companyLogo={company?.employer_logo} 
          companyName={company.job_title} 
          jobpost={company.job_title}
          jobsposted={company.jobsposted} 
          // You can add more fields if necessary
        />
      ))}
    </>
  );
};

export default NewlyAdded;
