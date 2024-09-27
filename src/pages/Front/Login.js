import React, { useState } from 'react';
import Divider from '../../components/ui/Divider';
import icons from "../../assets/icons";
import loginImg from "../../assets/images/Group 1707478927.png";
import CustomButton from '../../components/form/CustomButton';
import PrimaryButton from '../../components/form/PrimaryButton';
import InputWithIcon from '../../components/form/InputWithIcon';
import { sendOtp } from '../../services/apiServices';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;

    // Allow only digits
    const onlyNumbers = value.replace(/\D/g, '');

    // Update mobile number state with only digits
    setMobileNumber(onlyNumbers);

    // Check if the length is exactly 10 digits and enable the button
    if (onlyNumbers.length === 10) {
      setIsButtonDisabled(false); // Enable button if valid
    } else {
      setIsButtonDisabled(true); // Disable button if invalid
    }
  };
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendOtp(mobileNumber); // Call the service function
      navigate("/verify-mobile", { state: { mobileNumber } });
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <section className='' style={{padding:'0px'}}>
        <div className='row'>
            <div className="login_intro col-md-6">
              <img src={loginImg} alt=""/>
            </div>
            <div className="col-md-6 py-5">
            <div className='login_form'>
              <div className='card py-3'>
                <h2>Portal to connect D&I Job Seekers with Diversity Hiring Organisations</h2>
                <InputWithIcon icon={' +91 '}>
                  <input
                    type='tel' // Using 'tel' to hint mobile input on mobile devices
                    className='form-control'
                    placeholder='Enter your mobile number'
                    value={mobileNumber}
                    onChange={handleInputChange}
                    maxLength={10} // Ensures users can't type more than 10 digits
                  />
                </InputWithIcon>

                <div className='form-check d-flex align-top gap-2 mb-2'>
                  <input type='checkbox' className='form-control_ form-check-input' />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    By continuing you agree to have read and accept the
                    <a href='/t&c'> Terms & Conditions </a> and
                    <a href='/privacy_policy'> Privacy Policy.</a>
                  </label>
                </div>

                <div className=''>
                  <PrimaryButton text='Continue' disabled={isButtonDisabled} onClick={handleSubmit}/>
                </div>

                <div className='form-row'>
                  <Divider />
                </div>

                <div className='form-row'>
                  <CustomButton text='Continue with Google' btnclass='btn-google' btnIcon={icons["googleBtnImg.svg"]} />
                </div>

                <div className='form-row'>
                  <CustomButton text='Continue with LinkedIn' btnclass='btn-linkedin' btnIcon={icons["linkedInBtn.svg"]} />
                </div>
              </div>
            </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default LoginPage;
