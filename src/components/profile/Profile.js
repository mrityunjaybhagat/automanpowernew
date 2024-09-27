import React, { useEffect, useState } from "react";
import { getUserData } from "../../services/profileServices"; // Assuming this is the correct path for your service

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("login_token"); // Retrieve userId from localStorage
      try {
        const response = await getUserData(userId);

        // Even if userExists is false, we check if user_data array has data
        if (response.code === 200 && response.data.user_data.length > 0) {
          setUserData(response.data);
        } else {
          setError("No user data found.");
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Display a loading message while fetching data
  if (loading) {
    return <p>Loading...</p>;
  }

  // Display an error message if an error occurred
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Display user data once it is fetched
  const user = userData.user_data[0]; // Extracting user_data array

  return (
    <div>
      <h2>User Profile</h2>
      <img
        src={user.candidate_profile_picture || "https://deijobs.in/uploads/profile/user_default.png"}
        alt="User Profile"
        width="150"
        height="150"
      />
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Mobile:</strong> {user.mobile}</p>
      <p><strong>DNI Category:</strong> {user.dni_category}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Job Role:</strong> {user.job_role}</p>
      <p><strong>Experience:</strong> {user.experience} year(s)</p>
      <p><strong>Date of Birth:</strong> {user.dob}</p>

      {/* Work Experience (if available) */}
      {userData.work_experience && userData.work_experience.length > 0 && (
        <div>
          <h3>Work Experience</h3>
          {userData.work_experience.map((work, index) => (
            <div key={index}>
              <p><strong>Company Name:</strong> {work.company_name || "Not Provided"}</p>
              <p><strong>Role:</strong> {work.role_name || "Not Provided"}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education Data (if available) */}
      {userData.education_data && userData.education_data.length > 0 && (
        <div>
          <h3>Education</h3>
          {userData.education_data.map((education, index) => (
            <div key={index}>
              <p><strong>Degree:</strong> {education.degree || "Not Provided"}</p>
              <p><strong>University:</strong> {education.university || "Not Provided"}</p>
              <p><strong>Passing Year:</strong> {education.passing_year || "Not Provided"}</p>
            </div>
          ))}
        </div>
      )}

      {/* Certifications Data (if available) */}
      {userData.certifications_data && userData.certifications_data.length > 0 && (
        <div>
          <h3>Certifications</h3>
          {userData.certifications_data.map((certification, index) => (
            <div key={index}>
              <p><strong>Certification:</strong> {certification.detail || "Not Provided"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
