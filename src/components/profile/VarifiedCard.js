import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getVarificationData ,sendEmailOtp } from '../../services/profileServices';
import icons from "../../assets/icons";

const VarifiedCard = () => {
  const [verificationData, setVerificationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem('login_token');

  useEffect(() => {
    if (userId) {
      const fetchVerificationData = async () => {
        try {
          const data = await getVarificationData(userId);
          setVerificationData(data);
        } catch (error) {
          setError('Failed to fetch verification data');
        } finally {
          setLoading(false);
        }
      };

      fetchVerificationData();
    }
  }, [userId]);

  const handleEmailOtp = async () => {
    try {
      const response = await sendEmailOtp(userId);
      if (response) {
        navigate("/verification/email");
      }
    } catch (error) {
      // Handle error case
      console.error('Failed to send OTP:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {verificationData && (
        <>
        <div className='card no-border shadow'>
        <div class="card-head"><h3 class="card-title">Account</h3></div>
        
        <div className="card w-100">
        <div className='d-flex  justify-content-between align-items-center'>
        Email Address
          <p>{verificationData.emailStatus  === "Verified" ? (
                <div className="d-flex items-center cursor-pointer gap-1 ">
                    <div className="text-lime-700  text-sm font-medium font-['Lexend'] leading-none ">Verfied</div>
                    <img src={icons["check-circle-2.svg"]} alt="verification status"/>
                </div>
          ) : (
                <a href="" className="d-flex items-center cursor-pointer gap-1"  onClick={handleEmailOtp}>
                    <div className="text-lime-700  text-sm font-medium font-['Lexend'] leading-none">Not Verfied</div>
                    <img src={icons["alert-triangle.svg"]} alt="verification status"/>
                </a>
          )}</p>

          </div>
          <p>{verificationData?.mobile}</p>
        </div>
        <div className="card w-100">
        <div className='d-flex  justify-content-between align-items-center'>
        Phone Number
          <p>{verificationData.mobileStatus  === "Verified" ? (
                <div className="d-flex d-flex justify-content-between align-items-center cursor-pointer gap-1 ">
                    <div className="text-lime-700  text-sm font-medium font-['Lexend'] leading-none ">Verfied</div>
                    <img src={icons["check-circle-2.svg"]} alt="verification status"/>
                </div>
          ) : (
                <div className="d-flex items-center cursor-pointer gap-1">
                    <div className="text-lime-700  text-sm font-medium font-['Lexend'] leading-none">Not Verfied</div>
                    <img src={icons["alert-triangle.svg"]} alt="verification status"/>
                </div>
          )}</p>
          </div>
          <p>{verificationData?.mobile}</p>
        </div>
        </div>
        </>
      )}
    </>
  );
};

export default VarifiedCard;
