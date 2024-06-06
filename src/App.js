import { Header } from './assets/components/Header/Header.jsx';
import { LocalWeatherCard } from './assets/components/LocalWeatherCard/LocalWeatherCard.jsx';
// import { Main } from './assets/components/Main/Main.jsx';
import { AppContainer } from './assets/components/AppContainer/AppContainer.js';
import { LocalInput } from './assets/components/LocalInput/LocalInput.jsx';
import { LocalListItem } from './assets/components/LocalList/LocalListItem/LocalListItem.jsx';
import { Colors } from './assets/colors/colors.js';
import { useState } from 'react';
import { LocalList } from './assets/components/LocalList/LocalList.jsx';

const colorThemes = {Sun: [Colors.colorFFB039, Colors.colorFFF439]}
var x = -1;

function App() {
  var [Input, setInput] = useState('');
  var [Locals, setLocal] = useState(['Brasília']);
  
  const inputValueHandler = event => {
    setInput(event.target.value)
  }
  
  const addCidade = () => {
    setLocal([...Locals, Input])
  }

  return (
    <AppContainer>
      <Header/>
      <div style={{display: 'flex', flexDirection: 'row', gap: 30, padding: 30, marginTop: -50}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 30, marginTop: 70}}>
          <LocalInput onChange={inputValueHandler} onClick={addCidade}/>
          {Locals.map((itemPesquisado) =>{
            x++;
            return(
              <LocalListItem key={x} LocalName={itemPesquisado}
              //  deleteClick={deleteCidade}
               />
            )
          })}
        </div>
        <LocalWeatherCard/>
      </div>
    </AppContainer> 
  );
}

export default App;
