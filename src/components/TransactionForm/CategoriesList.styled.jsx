import { Breakpoints, MQ } from 'common';
import styled from 'styled-components';

export const AllCategories = styled.ul`
  position: absolute;
  z-index: 3;
  top: 42px;
  border: 2px solid var(--bg-text-color);
  border-bottom: none;
  box-shadow: 0px 3px 4px rgba(170, 178, 197, 0.4);

  li {
    border-bottom: 2px solid var(--bg-text-color);
  }
`;

export const CategoryBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 278px;
  height: 33px;
  background-color: var(--bg-color);
  border: none;
  outline: none;
  color: var(--color-placeholder);

  ${MQ(Breakpoints.md)} {
    background-color: var(--bg-text-color);
    border: 2px solid var(--bg-color);
    width: 167px;
  }

  ${MQ(Breakpoints.lg)} {
    width: 184px;
  }
`;
