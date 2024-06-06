import React from "react";
import * as Component from './LocalListItemComponents';
import ButtonBackground from '../../../images/LocalInput/RemoveIcon.png'

export function LocalListItem(props) {
    return (
        <Component.Container>
            <div style={{display: "flex", flexDirection: "row", gap: 10, alignItems: "center"}}>
                <Component.Detail detailColor={props.colors}/>
                <Component.Text>{props.LocalName}</Component.Text>
            </div>
            <Component.RemoveButton ButtonImage={ButtonBackground} deleteClick={props.deleteClick}/>
        </Component.Container>
    )
}