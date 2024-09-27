// src/components/MobileContainer.js
import React from 'react';
import styled from 'styled-components';

const MobileWrapper = styled.div`
  padding: 10px;
  max-width: 100%;
  margin: auto;
`;

const MobileContainer = ({ children }) => {
  return <MobileWrapper>{children}</MobileWrapper>;
};

export default MobileContainer;
