import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import SectionWrapper from '../../components/home/SectionWrapper';
import CompanyCard from '../../components/profile/CompanyCard';

const SearchResults = () => {
  const location = useLocation();
  const [error, setError] = useState(null);
  const results = location.state?.results || []; // Safely access results passed from the form

  // Log the results to verify data is being received
  useEffect(() => {
    console.log('Received results:', results);
  }, [results]);

  return (
    <>
      <SectionWrapper className="content"
        headClass='d-flex justify-content-center'
        headerContent={
          <>
          <h2 className="">Search results</h2>
          </>
        }
    >
      <div className='d-flex'>
        {error && <p>{error}</p>}
        {/* <p>Total Results: {results.length}</p> */}
        {results.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          <>
          
          {results.map((result, index) => (
            <>
            <div className='p-2' style={{flex:'25%'}}>
            <CompanyCard 
            companyLogo={result?.employer_logo} 
            companyName={result.employer_name} 
            jobpost={result?.job_title} 
            jobsposted={result?.jobs_count} // Pass jobsposted if available
            employementType={result?.employement_type}
            location={result?.city}
            postedBy={result?.posted_by}
            isJob={true}    
            />
            </div>   
            </>
          ))}
          </>
        )}  
        </div>      
    </SectionWrapper>
    </>
  );
};

export default SearchResults;
