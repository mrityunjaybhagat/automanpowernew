import React, { useState, useEffect } from 'react';
import briefcaseIcon from '../../assets/icons/briefcase_job.svg';
import groupIcon from '../../assets/icons/group_job.svg';
import locationIcon from '../../assets/icons/location_job.svg';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../services/apiServices'; 
import BackButton from '../../components/ui/BackButton';

const JobDetailPage = () => {
  const { jobId } = useParams();  // Get the jobId from the URL
  const [jobDetail, setJobDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      setLoading(true);
      setError(null);  // Reset any previous errors
      try {
        // API endpoint for getting job details
        const url = `get-candidate-job-details?jobId=${jobId}&login_token=${localStorage.getItem('login_token')}&userId=${localStorage.getItem('login_token')}`;
        
        const response = await fetchData(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
        });

        // Check if the response code is 200 and data is available
        if (response.code === 200 && response.jobDetails) {
          setJobDetail(response.jobDetails);  // Set the job details
        } else {
          setError("Job not found");
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
        setError("Something went wrong while fetching job details.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [jobId]);  // Fetch job details whenever the jobId changes


const applyForJob = async (jobId, appliedFlag) => {
  const url = 'user-job-action'; // Your API endpoint

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      appliedFlag,
      jobId,
      login_token: localStorage.getItem('login_token'), // Retrieve login_token from localStorage
      userId: localStorage.getItem('login_token') // Assuming userId is the same as login_token
    }),
  };

  try {
    const response = await fetchData(url, options);
    const data = await response.json();
    if (data.code === 200) {
      console.log('Job action successful:', data);
      // Handle success (e.g., show a success message, update state)
    } else {
      console.error('Job action failed:', data);
      // Handle error (e.g., show an error message)
    }
  } catch (error) {
    console.error('Error applying for job:', error);
    // Handle network or other errors
  }
};

// Example usage: Call this function when the user performs an action (e.g., click a button)
applyForJob('2483', 'Saved');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return jobDetail ? (
    <>
    <section className="main_container main_container_new">
		    <div className="container">
			    <BackButton/>
				<div className="card big_card">
          <div className='job_top crad-head'>
             <h2>{jobDetail.job_title}</h2>
             <div className='d-flex'>
             <div className='d-flex'>
                <img src={briefcaseIcon} alt="Job Icon" />
                <span>{jobDetail.minimum_exp} - {jobDetail.maximum_exp} Years</span>
             </div>
             <div className='d-flex'>
                <img src={groupIcon} alt="Breafcase Icon" />
                <span>{jobDetail.dni_category}</span>
             </div>
             <div className='d-flex'>
                <img src={locationIcon} alt="Location Icon" />
                <span>{jobDetail.city_name}</span>
             </div>
             </div>
             <p>Posted on {jobDetail.posted} • <strong>{jobDetail.totalApplicansts} Applicants</strong></p>
             
              {jobDetail.applied_job_link && (
                <a href={jobDetail.applied_job_link} target="_blank" rel="noopener noreferrer">
                  Apply Here
                </a>
              )}
          </div>
      
      <p><stron>Overview</stron></p>
      <p>{jobDetail.job_details}</p>
      <p><strong>Role: </strong></p>
      <p><strong>Industry Type : </strong></p>
      <p><strong>Department : </strong></p>
      <p><strong>Employment Type:</strong> {jobDetail.employement_type}</p>
      <p><strong>Company: </strong>{jobDetail.employer_name}</p>
      <p><strong>Posted by: </strong>{jobDetail.posted_by}</p>
      <p><strong>Experience: </strong>{jobDetail.minimum_exp} - {jobDetail.maximum_exp} years</p>
      <p><strong>Salary Range: </strong>{jobDetail.salary_range}</p>
      {/* <p><strong>Key skill: </strong> {jobDetail.skill}</p> */}
      <p><strong>Key skill: </strong>
        {jobDetail.skill && jobDetail.skill.split(',').map((skill, index) => (
          <span key={index} style={{ display:'inline-block',marginRight: '8px',marginBottom: '8px',borderRadius:'15px',color:'#474D6A', padding:'0px 9px',border:'1px solid #E7E7F1',}}>
            {skill.trim()}
          </span>
        ))}
      </p>
      
      {/* Add more job details here as needed */}
        </div>
      </div>
    </section>
    </>
  ) : (
    <p>Job details not available.</p>
  );
};

export default JobDetailPage;
