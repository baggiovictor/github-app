import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  max-width: 400px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`;


export const UserLogin = styled.p`
  color: white;
  margin: 5px 0;
`;

export const DetailsButton = styled.button`
    background: #0099FF;
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
`;