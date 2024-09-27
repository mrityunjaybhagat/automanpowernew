import React, { useState, useEffect } from 'react';
import CompanyCard from "../../components/profile/CompanyCard";
import images from "../../assets/images";
import icons from "../../assets/images";

import workIcon from '../../assets/icons/laptop-2.svg';
import department from '../../assets/icons/landmark.svg';
import salaryrange from '../../assets/icons/git-commit.svg';
import companyICon from '../../assets/icons/Group.svg';
import postedIcon from '../../assets/icons/calendar.svg';
import roleCatIcon from '../../assets/icons/layout-grid.svg';
import educationIcon from '../../assets/icons/briefcase.svg';
import topCompanyIcon from '../../assets/icons/star.svg';
import freshnessIcons from '../../assets/icons/calendar-search.svg';


import UpArrowIcon from '../../assets/icons/Vectordown.svg';

import Autocomplete from "../../components/form/Autocomplete";
import DynamicDropdown from '../../components/form/DynamicDropdown';
import CustomButton from '../../components/form/CustomButton';

const SearchJobs = () =>{
    const userId = localStorage.getItem("login_token");
    


    const [jobRole, setJobRole] = useState('');
    const [workMode, setWorkMode] = useState([]);
    const [salaryRange, setSalaryRange] = useState([]);
    const [postedBy, setPostedBy] = useState([]);
    const [companyType, setCompanyType] = useState([]);
    const [freshness, setFreshness] = useState([]);
    const [advanceSearch, setAdvanceSearch] = useState(false);

    const [diCategory, setDiCategory] = useState('');
    const [gender, setGender] = useState('');
    const [experience, setExperience] = useState('');

    const handleSelect = (suggestion) => {
        console.log('Selected suggestion:', suggestion);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle the form submission and search
        console.log({
          jobRole,
          //city,
          workMode,
          salaryRange,
          postedBy,
          companyType,
          freshness,
          //fullName,
          //dateOfBirth,
          diCategory,
          gender,
          experience
        });
      };
    return(
        <>
        <section className='content'>
            <div className='container'>
            <Autocomplete
                endpoint="candidate-job-suggestion" // Replace with your actual API endpoint
                onSelect={handleSelect}
                placeholder="Search by Title, skill or category"
            />
           <input type='text' placeholder='Location' className='form-control'/>
            <div className='advanced-search-toggle'>
              <button className="btn btn-trans w-full d-flex" type="button" onClick={() => setAdvanceSearch(!advanceSearch)}
                style={{ alignItems:'center',justifyContent:'space-between'}}
              >
                Advance Search
                {advanceSearch ? 
                  <img src={UpArrowIcon} alt=""/>
                  : <img src={UpArrowIcon} alt=""/>
                }
              </button>
            </div>
            {advanceSearch && (
              <div className='advanced-search-fields'>
              <DynamicDropdown 
                  endpoint="https://deijobs.in/deijobs-api/api/work-modes" 
                  iconSrc={workIcon}
                  placeholder="Work Mode"
              />
              <DynamicDropdown 
                  endpoint="https://deijobs.in/deijobs-api/api/detartment" 
                  iconSrc={department}
                  placeholder='Department'
              />
              <DynamicDropdown 
                  endpoint="https://deijobs.in/deijobs-api/api/salary-ranges" 
                  iconSrc={salaryrange}
                  placeholder='Salary Ranges'
              />
              <DynamicDropdown 
                  endpoint="https://deijobs.in/deijobs-api/api/company-types" 
                  iconSrc={companyICon}
                  placeholder='Company Type'
              />
              <DynamicDropdown 
                  endpoint="https://deijobs.in/deijobs-api/api/role-category" 
                  iconSrc={roleCatIcon}
                  placeholder='Role Category'
              />
              <DynamicDropdown 
                  endpoint="https://deijobs.in/deijobs-api/api/education" 
                  iconSrc={educationIcon}
                  placeholder='Education'
              />
              <DynamicDropdown 
                  endpoint="https://deijobs.in/deijobs-api/api/posted-by" 
                  iconSrc={postedIcon}
                  placeholder='Posted By'
              />
              <DynamicDropdown 
                  endpoint="https://deijobs.in/deijobs-api/api/posted-by" 
                  iconSrc={topCompanyIcon}
                  placeholder='Top Companies'
              />


              <DynamicDropdown 
                  endpoint="https://deijobs.in/deijobs-api/api/freshness" 
                  iconSrc={freshnessIcons}
                  placeholder='Freshness'
              />
              
              
              

              
              </div>
            )}
            <CustomButton onClick={handleSubmit} label='Search Jobs'/>
            </div>
        </section>
        </>
    )
};
export default SearchJobs;