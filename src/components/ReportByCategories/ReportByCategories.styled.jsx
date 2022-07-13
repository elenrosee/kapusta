import styled from 'styled-components';
import { Breakpoints, MQ } from 'common';

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 280px;

  ${MQ(Breakpoints.md)} {
    width: 100%;
  }
`;

export const Category = styled.li`
  display: flex;
  justify-content: center;
  flex-basis: calc((100% - 30px) / 3);

  height: 122px;
  margin: 10px 0 10px 0;

  ${MQ(Breakpoints.md)} {
    flex-basis: calc((100% - 30px) / 6);
  }
`;

export const CategoryBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  background-color: inherit;
  border: none;
`;

export const SvgWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 60px;
  height: 60px;

  margin: 10px 0;

  &::before {
    content: '';
    width: 59px;
    height: 46px;
    border-radius: 20px;
    background-color: ${({ focused }) =>
      focused ? 'var(--accent-color-2)' : 'var(--bg-color)'};

    position: absolute;
    bottom: 0px;
    z-index: 1;
  }

  svg {
    position: relative;
    z-index: 2;
    margin: 5px 0 5px 0;
  }
`;

export const CategoryText = styled.p`
  color: var(--text-color-3);

  :last-child {
    text-transform: uppercase;
  }
`;
