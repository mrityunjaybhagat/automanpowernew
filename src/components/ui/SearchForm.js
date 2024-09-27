import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import InputWithIcon from '../form/InputWithIcon';
import icons from '../../assets/icons/'
const JobSearchForm = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ensure the correct payload is sent to the API
      const response = await fetch('https://deijobs.in/deijobs-api/api/get-filtered-job-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobRole: title,
          search_location: location,
          experience: experience,
        }),
      });

      const data = await response.json();
      // Ensure you are navigating and passing the results correctly
      navigate('/search-results', { state: { results: data.data || [] } });
    } catch (error) {
      console.error('Error fetching job results:', error);
    }
  };
return (
<form onSubmit={handleSubmit} className='searchform shadow'>
<div className='d-flex align-items-center'>
  <div className='col col-md-6 input-outer'>
    <InputWithIcon icon={<img src={icons["search.svg"]} className='no-border'/>}>
    <input 
      type="text" 
      value={title} 
      onChange={(e) => setTitle(e.target.value)} 
      className='form-control input_trans' 
      placeholder='Enter skills / designations / companies'
    />
    </InputWithIcon>
  </div>
  <div className='col col-md-2 input-outer'>
    <input
      type="text" 
      value={location} 
      onChange={(e) => setLocation(e.target.value)} 
      className='form-control input_trans' 
      placeholder='Location'
    />
  </div>
  <div className='col col-md-2 input-outer'>
    <input 
      type="text" 
      value={experience} 
      onChange={(e) => setExperience(e.target.value)} 
      className='form-control input_trans' 
      placeholder='Select experience'
    />
  </div>
  <div className='col col-md-2'>
    <input type="submit" className='btn btn-primary' value='Search' />
  </div>
</div>
</form>
);
};

export default JobSearchForm;