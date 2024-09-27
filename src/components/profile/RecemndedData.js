import React, { useState, useEffect } from 'react';
import { getRecemndedJobData } from '../../services/profileServices';
import CompanyCard from './CompanyCard';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='roundedbtn slick-arrow slick-next'
      //style={{ ...style, display: "block",}}
      onClick={onClick}
    ><ChevronRight /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='roundedbtn slick-arrow slick-next'
      //style={{ ...style, display: "block",}}
      onClick={onClick}
    ><ChevronLeft /></div>
  );
}
const RecemendedData = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const userId = localStorage.getItem('userId');

  const fetchJobs = async () => {
    const offset = 0;
    const limit = 10;

    try {
      const jobsData = await getRecemndedJobData(userId, offset, limit);
      if (jobsData && jobsData.data) {
        setCompanies(jobsData.data);  // Update the companies state with fetched job data
      }
    } catch (error) {
      setError('Error fetching recommended jobs');
    } finally {
      setLoading(false);  // Make sure to stop loading after fetching data
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
//Slider Settings 
var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow:2,
    slidesToScroll: 1,
    margin:10,
    arrows:1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
    <Slider {...settings}>
      {companies.map((company, index) => (
        <div className='p-2 recjob'>
        <CompanyCard 
          key={index}
          companyLogo={company?.employer_logo} 
          companyName={company.job_title} 
          jobpost={company.job_title}
          jobsposted={company.jobsposted} 
          // You can add more fields if necessary
        />
        </div>
      ))}
      </Slider>
    </>
  );
};

export default RecemendedData;
