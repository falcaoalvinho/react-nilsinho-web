import React from "react";
import * as Component from './LocalListItemComponents';
import ButtonBackground from '../../../images/LocalInput/RemoveIcon.png'

export function LocalListItem(props) {
    return (
        <Component.Container>
            <div style={{display: "flex", flexDirection: "row", gap: 10, alignItems: "center"}}>
                <Component.Detail detailColor={props.colors}/>
                <button style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} onClick={props.fetchClick}>
                    <Component.Text onLoad={props.onLoad}>{props.LocalName}</Component.Text>
                </button>
            </div>
            <Component.RemoveButton ButtonImage={ButtonBackground} deleteClick={props.deleteClick}/>
        </Component.Container>
    )
}