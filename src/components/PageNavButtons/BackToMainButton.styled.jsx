import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import backspace from 'images/backspace.svg';

export const BackToMainNavLink = styled(NavLink)`
  font-size: 12px;
  color: var(--text-color-2);
`;

export const Image = styled.svg`
  background-image: url(${backspace});
  width: 18px;
  height: 12px;
  background-repeat: no-repeat;
`;
