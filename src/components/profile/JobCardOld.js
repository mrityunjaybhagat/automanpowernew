import React, { useState, useEffect } from 'react';
const JobCardOld = ({emplogo}) => {
  return (
    <>        
        <div className="card w-100">
            <div className="d-flex gap-4 space-between">
                <div className="emplogo">
                    <img src={emplogo}/>
                </div>
                <div className="card_text">
                    <h4 className="jobposition">Bank Manager</h4>
                    <h5 className='jobinfo'>Fulltime • Apple • Mumbai</h5>
                    <h5 className='postedBy'>Job posted by Organisation</h5>
                </div>
                <div className="emplogo">
                    See
                </div>
            </div>
        </div>
    </>
  );
};
export default JobCardOld;