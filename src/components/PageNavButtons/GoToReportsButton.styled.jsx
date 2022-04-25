import { NavLink } from 'react-router-dom';
import report from 'images/report.svg';
import styled from 'styled-components';
import { Breakpoints, MQ } from 'common';

export const ToRaportsNavLink = styled(NavLink)`
  margin-bottom: 40px;

  ${MQ(Breakpoints.md)} {
    margin: 0;
  }
`;

export const Image = styled.span`
  display: inline-block;
  margin-left: 20px;
  width: 14px;
  height: 14px;
  background-color: inherit;
  background-image: url(${report});
  background-repeat: no-repeat;
  background-size: contain;
`;
