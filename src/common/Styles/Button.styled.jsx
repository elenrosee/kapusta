/* eslint-disable react/prop-types */
import styled from 'styled-components';

export const Button = styled.button`
  width: 125px;
  height: 44px;
  font-weight: 700;
  color: var(--text-color-3);
  text-transform: uppercase;
  border: 2px solid var(--bg-color);
  background-color: transparent;
  border-radius: 16px;
  transition: 0.2s ease-out;
  &:first-child {
    margin-right: 15px;
  }

  &:hover,
  &:focus {
    color: white;
    border: none;
    background-color: var(--accent-color);
  }
`;
