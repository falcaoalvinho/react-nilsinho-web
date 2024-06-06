import React from "react";
import Image from '../../images/Header/Logo.png';
import * as Component from './HeaderComponents';


export function Header() {
 return (
   <Component.HeaderContainer>
      <Component.LogoContainer>
         <Component.Logo src={Image}/>
         <Component.Title>react-nilsinho-web</Component.Title>
      </Component.LogoContainer>
      <Component.NavBar>
         <Component.NavList>
            <li><Component.NavLink>Conta</Component.NavLink></li>
            <li><Component.NavLink>Configurações</Component.NavLink></li>
            <li><Component.NavLink>Contato</Component.NavLink></li>
         </Component.NavList>
      </Component.NavBar>
   </Component.HeaderContainer>
 )
}