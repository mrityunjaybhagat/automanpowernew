import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../services/apiServices'; // Assuming fetchData is your function to fetch data
import CompanyCard from '../../components/profile/CompanyCard';
import ProfileCard from '../../components/profile/ProfileCard';

const JobsPage = () => {
  const { type } = useParams();  // Get the job type from the URL
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch jobs based on type
    const getJobs = async () => {
      setLoading(true);
      try {
        const url = `get-user-saved-job-details`; // Your API endpoint
        const options = {
          type,  // The dynamic type from the URL
          limit: 6,  // Set limit to 6
          offset: 0,  // Set offset to 0
          userId: localStorage.getItem('login_token')  // Get userId from localStorage
        };

        const response = await fetchData(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(options)
        });

        setJobs(response.data); // Assuming the API returns a `data` field
      } catch (error) {
        console.error("Error fetching job data:", error);
      } finally {
        setLoading(false);
      }
    };

    getJobs();
  }, [type]);  // Trigger useEffect whenever the `type` changes

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className='content'>
            <div className='container'>
            <div className="row">
            <div className="col-md-3">
              <ProfileCard/>            
            </div>
            <div className="col-md-8">
            <div className="card">
            <h3 className="card-title">Recent Jobs</h3>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <CompanyCard jobpost={job.job_title} companyName={job.employer_name} companyLogo={job?.employer_logo}/>
          ))
        ) : (
          <p>No jobs found for this type.</p>
        )}
        </div>
            </div>
            </div>
        </div>
        </section>
  );
};

export default JobsPage;
