import styled from "styled-components";

export const Header = styled.div`
    height: 48px;
    max-height: 44px;
    width: 100%;
    background: rgba(22,22,23,0.8);
    z-index:9999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 35px;
`;

export const ItemHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-conten 

`;

export const TextHeader = styled.div`
    font-size: 11px;
    color: #f5f5f7;
    font-family: 'text-light';
    opacity: .8;
    cursor: pointer;
`;

export const OptionsProductsApple = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 105px;
    gap: 30px;
    cursor: pointer;
    z-index: 1;
`;

export const ItemOptionProductApple = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
`;

export const TextOptionProductApple = styled.div`
    font-family: text-regular;
    color: rgba(0,0,0,0.8);
    font-size: 13px;
`;

export const SpanNewOptionProductApple = styled.span`
    font-family: text-regular;
    color: #f56300;
    font-size: 10px;
    font-weight: 400;
    margin-top: 75px;
    position: absolute;
`;

export const ApplePromoBlock = styled.div`
    position: relative;
    z-index: 1;
    height: 38px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #f5f5f7;
    color: rgba(22,22,23,0.8);

    p {
        font-family: 'text-regular';
        font-size: 14 px;
        font-weight: 400;

        a {
            color: #06c;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
    }
`;

export const BannerArea = styled.div`
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;


    h1 {
        color: white;
        font-family: text-bold;
        line-height: 1.07143;
        font-weight: 600;
        font-size: 56px;
        letter-spacing: -.005em;
    }

    p{
        color: white;
        font-family: text-regular;
        font-size: 28px;
        line-height: 1.14286;
        font-weight: 400;
        letter-spacing: .007em;
        margin-top: -32px;
    }
`;

export const LineButtom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 35px;

`;
export const PurchaseButtom = styled.button `
    cursor: pointer;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    font-family: text-regular;
    color: white;
    background: #0071e3;
    font-size: 17px;
    line-height: 1.17648;
    font-weight: 400;
    border-radius: 25px;
    border-color: #0071e3;
    border-width: 1px;
    padding-left: 21px;
    padding-right: 21px;
    padding-top: 11px;
    padding-bottom: 11px;
    letter-spacing: -.022em;
`;


export const BannerIphone16Pro = styled.div`
    margin-top: -205px;
    z-index: -1;
`;

export const SpaceBanners = styled.div`
    margin-top: 22px;
    width: 100%;
    height: 7px;
`;

export const BannerIphone16 = styled.div`
    margin-top: -202px;
    z-index: -1;
`;

export const SpaceBanners2 = styled.div`
    margin-top: 15px;
    width: 100%;
    height: 12px;
`;

export const LogoIpaidAir = styled.div`
    align-items: center;
    margin-top: 55px;
`;

export const BannerIpadAir = styled.div`
   margin-top: -200px;
   z-index: -1;
`;



