import React from 'react';

const SectionWrapper = ({ children, className = '', headerContent,headClass, footerContent ,footClass }) => {
  return (
    <section className={className}>
      <div className="container">
        <div className={`section-head mb-2 ${headClass}`}>
          {headerContent} {/* Render header content if provided */}
        </div>
        <div className='section-body'>
          {children} {/* Render the content passed as children */}
        </div>
        <div className={`section-foot ${footClass}`}>
          {footerContent} {/* Render footer content if provided */}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
