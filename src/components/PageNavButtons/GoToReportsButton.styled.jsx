import { NavLink } from 'react-router-dom';
import report from 'images/report.svg';
import styled from 'styled-components';

export const ToRaportsNavLink = styled(NavLink)`
  font-size: 12px;
  color: var(--text-color-2);
`;

export const Image = styled.svg`
  background-image: url(${report});
  display: inline-block;
  margin-left: 15px;
`;
