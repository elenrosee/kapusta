import { Breakpoints, MQ } from 'common/Breakpoints';
import styled from 'styled-components';

export const AppBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  background-color: var(--bg-text-color);
  padding: 12px 19px;
  position: relative;
  z-index: 1;

  ${MQ(Breakpoints.md)} {
    padding: 12px 26px;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.button`
  border: none;
  background-color: transparent;
  color: var(--text-color-3);

  ${MQ(Breakpoints.md)} {
    height: 36px;
    padding-right: 20px;
    border-right: 2px solid var(--color-placeholder);
  }
`;

export const LogOutButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 12px;
  line-height: 14px;
  color: var(--text-color-3);
  text-decoration-line: underline;
  padding-left: 20px;
`;

export const LogOutIcon = styled.img`
  height: 16px;
  width: 16px;
`;
