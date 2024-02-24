import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MovieBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const MovieCard = styled.li`
  margin-right: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const MovieTitle = styled.h3`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
`;
