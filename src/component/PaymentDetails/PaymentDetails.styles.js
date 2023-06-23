import styled from "styled-components";

const PaymentWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 600px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    border-radius: 2%;
    margin: auto;
    padding: 24px;

    @media (max-width: 767px) {
        width: auto;
        position: inherit;
        top: 0%;
        left: 0%;
        transform: translate(-0%, -0%);
        display: block;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 2%;
        margin: 30px;
        padding: 24px;  
    }

    .text-filed{
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;

        @media (max-width: 767px) {
        flex-direction: column;
        }
    }

    .button{
        display: flex;
        justify-content: space-around;
        flex-direction: row;

        @media (max-width: 767px) {
        flex-direction: column;
        }
    }
    }

`;

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
    ModelHeader, BottomLine, CountryWrapper, PaymentWrapper
};