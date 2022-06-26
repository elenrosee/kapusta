import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Breakpoints, MQ } from 'common';

export const BackToMainNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;

  font-size: 12px;
  color: var(--text-color-2);
  margin-bottom: 10px;

  ${MQ(Breakpoints.md)} {
    margin-bottom: 0px;
    align-self: center;
  }

  p {
    margin-left: 15px;
  }
`;
