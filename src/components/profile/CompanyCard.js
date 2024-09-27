import React, { useState, useEffect } from "react";
const CompanyCard = ({
  onclcik,
  companyLogo,
  companyName,
  jobpost,
  jobsposted,
  employementType,
  postedBy,
  location,
  isJob,
}) => {
  return (
    <>
      <div onClick={onclcik}
        className={`card no-border ${isJob ? "job-card" : "company-card"}`}
        style={{ cursor: "pointer" }}
      >
        <div
          className={`d-flex gap-2 ${
            isJob ? "job-card-inner flex-column" : "company-card"
          }`}
        >
          <div className="comp_logo w-25">
            {companyLogo && (
              <img src={companyLogo} alt={`${companyName} logo`} />
            )}
          </div>
          <div className="">
            {isJob ? (
              <>
                {jobpost}
                <p style={{ fontWeight: "300", color: "#6B7280" }}>
                  {employementType || "Not specified"} •{" "}
                  {companyName || "Not specified"} •{" "}
                  {location || "Not specified"}
                <p>{postedBy || "Not specified"}</p>
                </p>
              </>
            ) : (
              <>
                {companyName}
                <p style={{ fontWeight: "300", color: "#6B7280" }}>{jobpost}</p>
                {/* <p>{postedBy || "Not specified"}</p> */}
              </>
            )}
          </div>
        </div>
        {isJob && (
          <div className="viewjobs text-center p-3">
            <a href="/login" className="text-center">
              View jobs
            </a>
          </div>
        )}
        {jobsposted && ( // Conditional rendering
          <div className="d-flex gap-2 mt-2">
            <h2 className="">{jobsposted}</h2>
            <p style={{ fontWeight: 300 }}>Jobs Available</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CompanyCard;
