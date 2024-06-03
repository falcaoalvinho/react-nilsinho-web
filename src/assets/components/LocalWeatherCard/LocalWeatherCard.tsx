import React from "react";
import * as Component from './LocalWeatherComponents';
import SunIcon from '../../images/LocalWeatherCard/SunIcon.png';
import SunGlassesNilsinho from '../../images/LocalWeatherCard/SunGlassesNilsinho.png';

export function LocalWeatherCard () {
    return (
        <Component.Container>
            <Component.SunIcon src={SunIcon}/>
            <Component.ContentContainer>
                <Component.TextContainer>
                    <Component.TemperatureText>30°c</Component.TemperatureText>
                    <Component.StateText>Ensolarado</Component.StateText>
                </Component.TextContainer>
                <Component.NilsinhoImage src={SunGlassesNilsinho}/>
            </Component.ContentContainer>
            <Component.LocalName>
                <Component.Detail/>
                <Component.LocalNameText>São Paulo</Component.LocalNameText>
            </Component.LocalName>
        </Component.Container>
    )
}