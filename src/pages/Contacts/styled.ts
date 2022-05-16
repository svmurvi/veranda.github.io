import styled from "@emotion/styled";

export const BlockTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  margin: 20px auto;
`;

export const Banner = styled.div`
  width: 100vw;
  height: 400px;
  overflow: hidden;

  & > img {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;

export const Person = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  margin: 20px 0px;
`;

export const Wrap = styled.div`
  max-width: 1200px;
  margin: auto;
`
