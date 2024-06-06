import React from "react";
import * as Component from './LocalWeatherComponents';
import SunIcon from '../../images/LocalWeatherCard/SunIcon.png';
import SunGlassesNilsinho from '../../images/LocalWeatherCard/SunGlassesNilsinho.png';

export function LocalWeatherCard (props) {
    return (
        <Component.Container>
            <Component.SunIcon src={SunIcon}/>
            <Component.ContentContainer>
                <Component.TextContainer>
                    <Component.TemperatureText>{props.TemperatureText}</Component.TemperatureText>
                    <Component.StateText>{props.StateText}</Component.StateText>
                </Component.TextContainer>
                <Component.NilsinhoImage src={SunGlassesNilsinho}/>
            </Component.ContentContainer>
            <Component.LocalName>
                <Component.Detail/>
                <Component.LocalNameText>{props.LocalNameText}</Component.LocalNameText>
            </Component.LocalName>
        </Component.Container>
    )
}