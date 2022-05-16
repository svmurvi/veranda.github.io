import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Logo = styled.img`
  max-height: 60px;
  max-width: 60px;
`;

export const Content = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Footer = styled.div`
  height: 60px;
  width: 100vw;
  box-shadow: 0px -1px rgb(0 0 0 / 20%);
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CustomLink = styled(Link)`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  margin-left: 10px;
`;
