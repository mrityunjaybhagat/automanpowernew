import React from 'react';

const Divider = () => {
  return (
    <>
      <div className='divider' style={{ position: 'relative', padding: '20px 0px' }}>
        <div className='divider_inner' style={{ width: '100%', height: '1px', background: '#D1D5DB', position: 'absolute', top: '50%' }}>
          <span 
            style={{
              height: '28px', 
              width: '48px', 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              color:'#9CA3AF',
              background: '#fff', 
              lineHeight: '28px', 
              textAlign: 'center', 
              transform: 'translate(-50%, -50%)' // Centering the span
            }}>
            OR
          </span>
        </div>
      </div>
    </>
  );
};

export default Divider;
