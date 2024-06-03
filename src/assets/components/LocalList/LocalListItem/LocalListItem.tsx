import React from "react";
import * as Component from './LocalListItemComponents';
import { Colors } from "../../../colors/colors";
import ButtonBackground from '../../../images/LocalInput/RemoveIcon.png'

export function LocalListItem(props) {
    function AlertTest(){
        console.log('Funfa que é uma beleza')
    }
    return (
        <Component.Container>
            <div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                <Component.Detail detailColor={props.colors}/>
                <Component.Text>{props.LocalName}</Component.Text>
            </div>
            <Component.RemoveButton ButtonImage={ButtonBackground} onClick={() => {AlertTest()}}/>
        </Component.Container>
    )
}