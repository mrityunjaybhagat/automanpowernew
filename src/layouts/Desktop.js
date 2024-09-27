// src/components/DesktopContainer.js
import React from 'react';
import styled from 'styled-components';

const DesktopWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

const DesktopContainer = ({ children }) => {
  return <DesktopWrapper>{children}</DesktopWrapper>;
};

export default DesktopContainer;
