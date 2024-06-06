import React from "react";
import { Colors } from "../../colors/colors";
import SearchImage from '../../images/LocalInput/SearchIcon.png';

export function LocalInput(props) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            marginTop: 30,
            // width: '40vw',
            borderRadius: 20,
            borderColor: Colors.color4E4E4E,
            borderWidth: 3,
            borderStyle: 'solid',
            backgroundColor: Colors.color212121
        }}>
            <input type="text" style={
                {
                    fontWeight: 400,
                    fontSize: 40,
                    color: Colors.colorD9D9D9,
                    backgroundColor: Colors.color212121,
                    borderStyle: 'none'
                }}
                placeholder="Procurar Local"
                onChange={props.onChange}
            />
            <button 
                style={{
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderStyle: 'none'
                }}  
                onClick={props.onClick}>
                <img src={SearchImage} style={{height: 40, width: 40}} alt='Icone de Pesquisa'/>
            </button>
        </div>
    )
}