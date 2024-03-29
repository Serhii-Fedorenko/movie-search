import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MovieBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const MovieCard = styled.li`
  margin-right: 5px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const MovieTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  width: 180px;
`;

export const CustomLink = styled(NavLink)`
  text-decoration: none;
  & > img {
    display: block;
    width: 200px;
    height: auto;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px;
`;

export const Button = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #232323;
  font-weight: 500;
  border-radius: 4px;
  border: black solid 1px;
  margin-right: 20px;
`;

export const CustomForm = styled.form`
  display: flex;

  & > input {
    font-size: 16px;
  }
`;
