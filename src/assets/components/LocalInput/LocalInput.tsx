import React from "react";
import { Colors } from "../../colors/colors";
import SearchImage from '../../images/LocalInput/SearchIcon.png';
import { useState } from "react";

export function LocalInput() {
    var [teste, setTest] = useState('');

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 20,
            marginTop: 30,
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
                onChange={event => {
                    setTest(event.target.value);
                }}

            />
            <button 
                style={{
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderStyle: 'none'
                }}  
                onClick={() => {
                console.log(teste);
            }}>
                <img src={SearchImage} style={{height: 40, width: 40}} alt='Icone de Pesquisa'/>
            </button>
        </div>
    )
}