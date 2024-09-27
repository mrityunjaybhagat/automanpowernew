import React, { useState, useEffect } from 'react';
import { getUserData ,createStudentProfile } from '../../services/profileServices';
import PrimaryButton from '../../components/form/PrimaryButton';
import { useNavigate  } from 'react-router-dom';

const CreateProfile = () => {
  const userId = localStorage.getItem('login_token');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const navigate = useNavigate();
  // Modal state
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    diCategory: '',
    gender: '',
    jobRole: '',
    experience: ''
  });

  const [errors, setErrors] = useState({});
  const [profileData, setProfileData] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // Fetch profile data
  useEffect(() => {
    if (userId) {
      getUserData(userId)
        .then((response) => {
          if (response.code === 200 && response.data.user_data.length > 0) {
            const user = response.data.user_data[0];
            setFormData({
              fullName: user.name || '',
              dob: user.dob || '',
              email: user.email || '',
              dniCategory: user.dni_category || '',
              gender: user.gender || '',
              jobRole: user.job_role || '',
              experience: user.experience || '',
            });
           };
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error loading user data:", error);
          setIsLoading(false);
        });
    }
  }, [userId]);

  //Validate Form
  const validate = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      formErrors.name = 'Full Name is required';
      isValid = false;
    }

    if (!formData.dob) {
      formErrors.dob = 'Date of Birth is required';
      isValid = false;
    } else if (new Date(formData.dob) > new Date()) {
      formErrors.dob = 'Date of Birth cannot be in the future';
      isValid = false;
    } else if (new Date().getFullYear() - new Date(formData.dob).getFullYear() < 16) {
      formErrors.dob = 'You must be at least 16 years old';
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Email Address is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email Address is invalid';
      isValid = false;
    }

    if (!formData.diCategory) {
      formErrors.diCategory = 'D & I Category is required';
      isValid = false;
    }

    if (!formData.gender) {
      formErrors.gender = 'Gender is required';
      isValid = false;
    }

    if (!formData.jobRole) {
      formErrors.jobRole = 'Job Role is required';
      isValid = false;
    }

    if (!formData.experience) {
      formErrors.experience = 'Experience is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true);
    if (validate()) {
      try {
        const response = await createStudentProfile(formData); // Call API
        if (response && response.code === 200) {
          console.log("Profile created successfully!");
          setIsModalVisible(true); // Show the modal on success
          // Redirect to /jobs after 3 seconds
          setTimeout(() => {
            navigate('/jobs');
          }, 5000);
          // You can redirect or show success message
        } else {
          setSubmissionError("Failed to create profile. Please try again.");
        }
      } catch (error) {
        setSubmissionError("An error occurred while creating the profile.");
      }
    }
  };


  // useEffect(() => {
  //   const isFormFilled = Object.values(formData).every(value => value.trim() !== '');
  //   setIsButtonDisabled(!isFormFilled);
  // }, [formData]);

  return (
    <>
      <section className='content'>
        <div className='container'>
          <div className='container_box'>
            <div className='card py-5 px-4'>
              <h2>Create Your Profile</h2>
              <p>Precision in your resume details increases your chances of landing the perfect job. Make every word count</p>
              <form onSubmit={handleSubmit}>
                <div className='form-row'>
                  <label htmlFor="name" className="form-label">Full Name*</label>
                  <input
                    type="text"
                    className={`form-control ${showErrors && errors.name ? 'is-invalid' : ''}`}
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {showErrors && errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className='form-row'>
                  <label htmlFor="dob" className="form-label">Date of Birth*</label>
                  <input
                    type="date"
                    className={`form-control ${showErrors && errors.dob ? 'is-invalid' : ''}`}
                    id="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                  {showErrors && errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
                </div>

                <div className='form-row'>
                  <label htmlFor="email" className="form-label">Email Address*</label>
                  <input
                    type="email"
                    className={`form-control ${showErrors && errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {showErrors && errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className='form-row'>
                  <label htmlFor="diCategory" className="form-label">D & I Category*</label>
                  <select
                    className={`form-control ${showErrors && errors.diCategory ? 'is-invalid' : ''}`}
                    id="diCategory"
                    value={formData.diCategory}
                    onChange={handleChange}
                  >
                    <option value="">Select D & I Category</option>
                    <option value="Veterans (Army/Navy/AirForce)">Veterans (Army/Navy/AirForce)</option>
                    <option value="People of Color">People of Color</option>
                    <option value="LGBTQ+">LGBTQ+</option>
                  </select>
                  {showErrors && errors.diCategory && <div className="invalid-feedback">{errors.diCategory}</div>}
                </div>

                <div className='form-row'>
                  <label htmlFor="gender" className="form-label">Gender*</label>
                  <select
                    className={`form-control ${showErrors && errors.gender ? 'is-invalid' : ''}`}
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {showErrors && errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                </div>

                <div className='form-row'>
                  <label htmlFor="jobRole" className="form-label">Job Role*</label>
                  <input
                    type="text"
                    className={`form-control ${showErrors && errors.jobRole ? 'is-invalid' : ''}`}
                    id="jobRole"
                    placeholder="Enter your job role"
                    value={formData.jobRole}
                    onChange={handleChange}
                  />
                  {showErrors && errors.jobRole && <div className="invalid-feedback">{errors.jobRole}</div>}
                </div>

                <div className='form-row'>
                  <label htmlFor="experience" className="form-label">Experience*</label>
                  <select
                    className={`form-control ${showErrors && errors.experience ? 'is-invalid' : ''}`}
                    id="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  >
                    <option value="">Select Experience</option>
                    <option value="1">1 Year</option>
                    <option value="2-3">2-3 Years</option>
                    <option value="3-5">3-5 Years</option>
                    <option value="5+">5+ Years</option>
                  </select>
                  {showErrors && errors.experience && <div className="invalid-feedback">{errors.experience}</div>}
                </div>

                <PrimaryButton text='Continue' disabled={isButtonDisabled} onClick={handleSubmit}/>
              </form>
            </div>
          </div>
        </div>
      </section>



  <div
  className="modal fade"
  id="successModal"
  tabIndex="-1"
  role="dialog"
  aria-labelledby="successModalLabel"
  aria-hidden="true"
  style={{ display: isModalVisible ? "block" : "none" }}
>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="successModalLabel">
          Profile Created Successfully
        </h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={() => setIsModalVisible(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Your profile has been successfully created. You can now explore job
        opportunities.
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => (window.location.href = "/jobs")}
        >
          Go to Jobs Page
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
          onClick={() => setIsModalVisible(false)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>;

    </>
  );
};

export default CreateProfile;
