import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoNavLink = styled(NavLink)`
  display: inline-block;
  position: relative;
  font-weight: 900;
  font-size: 14px;
  color: var(--text-color);
  padding: 11px 0 3px 20px;

  &::before {
    content: '';
    width: 33px;
    height: 26px;
    border-radius: 8px;
    background-color: var(--accent-color);

    position: absolute;
    left: 7px;
    top: 7px;
    z-index: -1;
  }

  &::after {
    content: '';
    width: 33px;
    height: 26px;
    border-radius: 8px;
    background-color: var(--accent-color-2);

    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
  }
`;

export const S = styled.span`
  position: relative;

  &::before {
    content: '';
    width: 1.5px;
    height: 2.5px;
    background-color: var(--text-color);

    position: absolute;
    top: 4.7px;
    left: 4px;
  }

  &::after {
    content: '';
    width: 1.5px;
    height: 2.5px;
    background-color: var(--text-color);

    position: absolute;
    bottom: 1.5px;
    left: 4px;
  }
`;
