// src/components/BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import back from "../../assets/icons/back.svg";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className='btn btn-trans no-border back-btn' onClick={() => navigate(-1)}><img src={back}/></button>
  );
};

export default BackButton;
