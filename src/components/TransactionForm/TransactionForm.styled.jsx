/* eslint-disable no-unused-vars */
import { Button } from 'common';
import styled from 'styled-components';
import backArrow from 'images/backArrow.svg';
import calculator from 'images/calculator.svg';

export const FormContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 30px;
`;

export const ArrowBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: inherit;
  background-image: url(${backArrow});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 0 20px;
  width: 282px;
  height: 44px;
  background-color: transparent;
  border: 2px solid var(--bg-text-color);
  outline: none;

  &:first-child {
    border-bottom: none;
    border-radius: 20px 20px 0 0;
  }

  &:nth-child(2) {
    border-radius: 0 0 20px 0;
    margin-bottom: 30px;
  }

  &:nth-child(3) {
    width: 183px;
    border-radius: 30px;
    margin-bottom: 30px;
    padding: 0 60px 0 30px;

    background-image: url(${calculator});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: right 30px bottom 50%;
  }

  &::placeholder {
    color: var(--color-placeholder);
  }
`;

export const Btn = styled(Button)`
  background-color: var(--bg-color);
`;
