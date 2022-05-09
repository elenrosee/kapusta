import styled from 'styled-components';

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: -10px 0 -10px 0;
`;

export const Category = styled.li`
  display: flex;
  flex-basis: calc((100% - 30px) / 3);
  justify-content: center;
  align-items: center;

  margin: 10px 0 10px 0;
`;

export const CategoryBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  background-color: inherit;
  border: none;
`;

export const SvgWrap = styled.div`
  position: relative;

  &::before {
    content: '';
    width: 59px;
    height: 46px;
    border-radius: 20px;
    background-color: ${({ focused }) =>
      focused ? 'var(--accent-color-2)' : 'var(--bg-color)'};

    position: absolute;
    bottom: 5px;
    z-index: -1;
  }

  svg {
    margin: 5px 0 5px 0;
  }
`;

export const CategoryText = styled.p`
  color: var(--text-color-3);
  text-transform: uppercase;
`;
