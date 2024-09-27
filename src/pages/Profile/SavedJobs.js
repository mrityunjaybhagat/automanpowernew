import React, { useState, useEffect } from "react";
import { getUserSavedJobDetails } from "../../services/profileServices"; // Path to appServices.js
import CompanyCard from "../../components/profile/CompanyCard";
import ProfileCard from "../../components/profile/ProfileCard";

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSavedJobs = async () => {
      const userId = localStorage.getItem("login_token"); 
      const offset = 0;
      const limit = 10;

      try {
        const jobDetails = await getUserSavedJobDetails(userId,offset, limit);
        setSavedJobs(jobDetails); // Assuming jobDetails is an array of saved jobs
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSavedJobs();
  }, []);

  if (loading) {
    return <p>Loading saved jobs...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
    <section className='content'>
            <div className='container'>
            <div className="row">
            <div className="col-md-3">
              <ProfileCard/>            
            </div>
            <div className="col-md-8">
            <div className="card">
            <h3 className="card-title">Saved Jobs</h3>
            {savedJobs.length === 0 ? (
        <p>You have no saved jobs.</p>
      ) : (
        <ul>
          {savedJobs.map((job) => (
            <CompanyCard  jobpost={job.job_title} companyName={job.employer_name} companyLogo={job?.employer_logo}/>
          ))}
        </ul>
      )}
      </div>
            </div>
            </div>
        </div>
        </section>
    </>
  );
};

export default SavedJobs;
