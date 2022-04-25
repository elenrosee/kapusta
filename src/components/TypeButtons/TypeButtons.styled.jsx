import styled from 'styled-components';

export const Container = styled.div``;

export const Btn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 140px;
  height: 40px;

  font-weight: 700;
  text-transform: uppercase;

  border: none;
  border-radius: 22px 22px 0 0;

  color: var(--text-color);
  background-color: var(--bg-tab);

  &.active {
    color: var(--accent-color);
    background-color: var(--bg-tab-selected);
  }
`;
