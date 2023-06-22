import styled from "styled-components";

const Header = styled.div`
    width: 100%;
    height: 100px;
    background: #34609B;
    display:flex;
    align-items: center;
    justify-content: center;

    h1{
        text-align: center;
        color: #fff;
    }
`;
const WrapperMain = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: space-around; 

    p{
        padding-top: 80px;
    }

    img{
        width: 450px;
    }
`;

const WrapperCard = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: space-around;

`;

const WrapperDiv = styled.div`
    width: 25%;
    height: 200px;
    border: 1px solid #428BCA;
    border-radius: 10px;
    box-shadow: 5px 5px 0px #428BCA;
    justify-content: space-around;
    align-items: center;
    position: relative;
    
    .Wrapper-img1{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    img{
        width: 100px;
        }
    }
    .Wrapper-img2 img{
        width: 100px;
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .Wrapper-img3 img{
        width: 30px;
        position: absolute;
        top: 20%;
        right: 0%;
        transform: translate(-50%, -50%);
    }
    
`;

const WrapperDiv1 = styled.div`
    width: 25%;
    height: 200px;
    border: 1px solid #08C988;
    border-radius: 10px;
    box-shadow: 5px 5px 0px #08C988;
    justify-content: space-around;
    align-items: center;
    position: relative;
    
    .Wrapper-img1{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    img{
        width: 100px;
        }
    }
    .Wrapper-img2 img{
        width: 100px;
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .Wrapper-img3 img{
        width: 30px;
        position: absolute;
        top: 20%;
        right: 0%;
        transform: translate(-50%, -50%);
    }
`;

const WrapperDiv2 = styled.div`
    width: 25%;
    height: 200px;
    border: 1px solid #FFE0A9;
    border-radius: 10px;
    box-shadow: 5px 5px 0px #FFE0A9;
    justify-content: space-around;
    align-items: center;
    position: relative;
    
    .Wrapper-img1{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    img{
        width: 100px;
        }
    }
    .Wrapper-img2 img{
        width: 100px;
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .Wrapper-img3 img{
        width: 30px;
        position: absolute;
        top: 20%;
        right: 0%;
        transform: translate(-50%, -50%);
    }
`;

export { Header, Wrapper, WrapperMain, WrapperCard, WrapperDiv, WrapperDiv1, WrapperDiv2 }