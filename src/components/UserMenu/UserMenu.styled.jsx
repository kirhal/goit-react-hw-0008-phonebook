import styled from 'styled-components';

export const User = styled.div`
  // padding: 20px 20px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

export const UserEmail = styled.p`
  margin-right: 5px;
  display: block;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 5px 0;
  cursor: pointer;

  width: 70px;

  border: 1px solid rgb(11, 51, 78);
  border-radius: 5px;

  background-color: rgb(255, 255, 255);

  font-weight: 400;
  font-size: 14px;

  color: rgb(11, 51, 78);

  &:hover {
    color: white;
    border: 1px solid rgb(11, 51, 78);
    background-color: rgb(11, 51, 78);
  }
`;
