import React, { useState, useEffect } from "react";
import { getPaymentStatus } from "../../services/profileServices"; // Assuming this is the correct path for your service


const PayNowCard = ({ type , BgImge }) => {
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPaymentStatus = async () => {
      const userId = localStorage.getItem("login_token"); // Retrieve userId from localStorage
      try {
        const response = await getPaymentStatus(userId);

        if (response.code === 200) {
          setPaymentData(response);
        } else {
          setError("No payment data found.");
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPaymentStatus();
  }, []);
  // Display a loading message while fetching data
  if (loading) {
    return <p>Loading...</p>;
  }

  // Display an error message if an error occurred
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      {paymentData.status === "pending" ? (
        <div className={`card text-bg-dark w-100 ${type}`} 
      style={{
        background:`linear-gradient(0deg, rgba(0, 85, 159, 0.69), rgba(0, 85, 159, 0.69)), url(${BgImge})`,
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        objectFit:'cover',  // Optional: to prevent repeating the image
      }}>
       
          <p className="card-text" style={{
              fontSize: '17px',
              fontWeight:'700',
              lineHeight: '24px',
              letterSpacing:'0.02em'
          }}>
            Email your resume to 5000+ HR Agencies in India at the price of a cup of coffee ₹399/- only.
          </p>
          <div className='clearfix' style={{textAlign:'right'}}>
          <button className='btn btn-sm btn-white btn-paynow'>Pay Now</button>
          </div>
      </div>
      ) : (
        <p style={{ color: "green" }}>Thank you! Your payment is complete.</p>
      )}
    





      
    </>
  );
};

export default PayNowCard;
