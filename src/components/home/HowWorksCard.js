import React from 'react';

const HowWorksCard = ({ imageSrc, text, number }) => {  // Destructure props here
  return (
    <>
      <div className="hiwbox">
        <span className="sn text-white text-xl">{number}</span>
        <div className="hiw text-right">
          <img src={imageSrc} alt="How it works" />
        </div>
        <p className="text-white">{text}</p>
      </div>
    </>
  );
};

export default HowWorksCard;
