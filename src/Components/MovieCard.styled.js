import styled from "styled-components";

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const LeftSide = styled.div`
  width: 40%;
`;

export const RightSide = styled.div`
  width: 50%;
  border-left: #232323 solid 1px;
  padding-left: 30px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ArtistCard = styled.li`
  margin-right: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 150px;
  height: auto;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  & > img {
    display: block;
    width: 150px;
    height: auto;
  }
`;
