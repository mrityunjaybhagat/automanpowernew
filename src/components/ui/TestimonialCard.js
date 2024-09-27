import React from 'react';
import icons from '../../assets/icons';

const TestimonialCard = ({ image, title, created_at, description, preference_category }) => { 
  return (
    <>
      <div className="card testimonial-card">
        <div className="d-flex gap-2">
          <div className="img testi_img">
            <img src={image} alt={title} /> 
          </div>
          <div className="">
            <p style={{marginBottom:'2px'}}><strong>{title}</strong></p>
            <p style={{fontSize:'12px'}}>{created_at}</p>
          </div>
        </div>
        <h6 style={{color:'#111827'}}>{title}</h6>
        <p style={{fontSize:'12px',color:'#9CA3AF'}}>{description}</p>
        <div className="d-flex justify-content-between">
          <p style={{color:'#ea580c'}}>{preference_category}</p>
          <p className='d-flex align-items-center'>
            <img src={icons["share.svg"]} alt="Share icon" />
            Share
          </p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
