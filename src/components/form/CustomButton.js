import React from 'react';
import PropTypes from 'prop-types';
//import './PrimaryButton.css'; // Optional: Import CSS for styling

const CustomButton = ({ btnclass,onClick, disabled, text, btnIcon }) => {
  return (
    <button 
      className={`btn btn-primary ${btnclass} ${disabled ? 'disabled' : ''}`} 
      style={{
        width:'100%',
        padding:'12px 16px 12px 16px',
        gap: '10px',
        opacity:'1',
      }}
      onClick={onClick} 
      disabled={disabled}
    >
      <span className='butonImh' style={{float:'left'}}>
        <img src={btnIcon} alt=""/>
      </span>
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.node.isRequired
};

CustomButton.defaultProps = {
  disabled: false
};

export default CustomButton;
