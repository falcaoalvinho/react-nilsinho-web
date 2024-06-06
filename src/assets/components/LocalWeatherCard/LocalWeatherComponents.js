import styled from "styled-components";
import { Colors } from "../../colors/colors";

export const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;

    width: 45vw;
    height: fit-content;
    
    border-radius: 40px;
    border: 5px solid ${Colors.color4E4E4E};
    background-color: ${Colors.color212121};
`; 

export const SunIcon = styled.img`
    width: 200px;
    height: 200px;

    display: flex;
    align-self: center;
    margin-top: -40px;
    z-index: 999;

    border-radius: 50%;
    background-color: ${Colors.color_253_247_146};
    box-shadow: ${Colors.color_253_247_146} 0px 0px 150px 75px;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin-left: 30px;
    z-index: 2;
`;

export const TemperatureText = styled.h1`
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 100px;
    text-decoration: underline;

    padding: 10px 20px;
    width: fit-content;

    border-radius: 30px;
    border: 3px solid ${Colors.color4E4E4E};

    color: ${Colors.colorFFB039};
    background-color: ${Colors.color171717};
`;

export const StateText = styled.h2`
    font-family: 'Montserrat';
    font-size: 80px;
    font-weight: 800;
    margin-top: -65px;
    color: ${Colors.colorffffff};
`;

export const NilsinhoImage = styled.img`
    height: 25vw;
    margin-left: -150px;
    margin-top: -50px;
`;

export const LocalName = styled.div`
    margin-top: -20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 20px 30px;
    gap: 8px;
    z-index: 2;
    background-color: ${Colors.color171717};
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;

export const Detail = styled.div`
    height: 40px;
    width: 8px;
    align-self: center;
    background-color: ${Colors.colorFFB039};
`;

export const LocalNameText = styled.h3`
    font-family: 'Montserrat';
    font-size: 50px;
    font-weight: bold;
    margin: 0px;
    color: ${Colors.colorffffff};
`;