import { Breakpoints, MQ } from 'common';
import { Button } from 'common';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--bg-text-color);

  width: 300px;

  padding: 40px 0 53px;

  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 22px;

  ${MQ(Breakpoints.md)} {
    width: 435px;

    padding: 50px 85px;
  }
`;

export const InputForm = styled.form``;

export const Text = styled.p`
  font-size: 10px;
  color: var(--text-color-3);
  width: 242px;

  ${MQ(Breakpoints.md)} {
    font-size: 12px;
  }
`;

export const ErrorText = styled.span`
  color: red;
`;

export const AuthLabel = styled.label`
  display: flex;
  flex-direction: column;

  margin-top: 30px;

  :not(:first-child) {
    margin-bottom: 40px;
  }
`;

export const LebelText = styled.p`
  color: var(--text-color);
  margin-bottom: 12px;

  font-size: 10px;

  ${MQ(Breakpoints.md)} {
    font-size: 12px;
  }
`;

export const AuthInput = styled.input`
  padding: 0 20px;
  background-color: rgba(246, 247, 251, 1);
  border-radius: 30px;
  border: none;
  outline: none;

  width: 253px;
  height: 52px;

  &::placeholder {
    color: rgba(166, 171, 185, 1);
  }

  ${MQ(Breakpoints.md)} {
    width: 265px;
  }
`;

export const AuthButton = styled(Button)`
  border: none;
  background-color: rgba(246, 247, 251, 1);
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));

  :first-child {
    margin-right: 15px;
  }

  &.active {
    color: white;
    background-color: var(--accent-color);
  }
`;
