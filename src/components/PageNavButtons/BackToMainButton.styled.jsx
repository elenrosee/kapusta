import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackToMainNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;

  font-size: 12px;
  color: var(--text-color-2);

  p {
    margin-left: 15px;
  }
`;
