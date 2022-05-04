import styled from 'styled-components';

export const Wraper = styled.div`
  display: inline-flex;
  flex-direction: row;

  padding: 7px;
  width: 282px;
  height: 85px;
  background: var(--bg-text-color);
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: calc(100% / 2);
    height: 100%;

    :first-child {
      border-right: 1px solid #e0e5eb;
    }
  }
`;

export const TypeText = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: var(--text-color-3);

  margin-bottom: 5px;
`;

export const Sum = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${({ type }) =>
    type === 'costs' ? 'var(--accent-color-3)' : 'var(--accent-color-4)'};
`;
