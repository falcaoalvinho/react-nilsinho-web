import styled from "styled-components";
import {Colors} from '../../colors/colors'

export const HeaderContainer = styled.div`
    width: 97.5%;

    background-color: ${Colors.color171717};
    border-bottom: 5px solid ${Colors.colorFFF439};

    display: flex;
    flex-direction: row;

    padding: 15px;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 10px;
    margin-left: 15px;
    margin-rigth:auto;
`;

export const Logo = styled.img`
    height: 80px;
    width: 75px;
    align-self: center;
`;

export const Title = styled.h1`
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 40px;

    align-self:center;

    color: ${Colors.colorffffff};
`;

export const NavBar = styled.nav`
    margin-left: auto;
    align-self: center;
    justify-content: center;

    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 400;

    color: ${Colors.colorffffff};
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
`;

export const NavLink = styled.a`
    text-decoration: none;
`;