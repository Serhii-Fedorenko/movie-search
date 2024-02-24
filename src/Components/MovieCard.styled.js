import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const LeftSide = styled.div`
  width: 40%;
`;

export const RightSide = styled.div`
  width: 40%;
`;

export const Button = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #232323;
  font-weight: 500;
  border-radius: 4px;
  border: black solid 1px;
`;
