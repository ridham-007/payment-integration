import styled from "styled-components";

const ModelHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const BottomLine = styled.div`
    width: 100%;
    height: 0.9px;
    margin-top: 10px;
    border: 1px solid #C4CFD4;
`;

const CountryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export {
    ModelHeader, BottomLine, CountryWrapper
};