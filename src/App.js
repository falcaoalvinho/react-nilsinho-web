import { Header } from './assets/components/Header/Header.jsx';
import { LocalWeatherCard } from './assets/components/LocalWeatherCard/LocalWeatherCard.jsx';
import { AppContainer } from './assets/components/AppContainer/AppContainer.js';
import { LocalInput } from './assets/components/LocalInput/LocalInput.jsx';
import { LocalListItem } from './assets/components/LocalList/LocalListItem/LocalListItem.jsx';
import { useState, useEffect } from 'react';
function App() {
  var [Input, setInput] = useState('');
  var [Locals, setLocal] = useState(['Brasília']);
  var [temperature, setTemperature] = useState('');
  var [weather, setWeather] = useState('');
  var [currentLocal, setCurrentLocal] = useState('Brasília');
  
  const inputValueHandler = event => {
    setInput(event.target.value)
    }
    
  const addCity = () => {
    if (Input && !Locals.includes(Input)) {
      setLocal([...Locals, Input]);
      setCurrentLocal(Input);
      setInput('');
    }
    }
      
  function deleteCity(LocalName){
    setLocal(Locals.filter(City => City !== LocalName));
    }

  const fetchWeather = (LocalName) => {
    setCurrentLocal(LocalName)

    const APIKey = '5a69e1a297ec15a6c66557de2e5a8e60';
    var URL = `https://api.openweathermap.org/data/2.5/weather?q=${LocalName}&appid=${APIKey}&lang=pt_br`;
    
    fetch(URL)
    .then((response) => response.json())
    .then(json => {
        setTemperature(`${Math.round(json.main.temp - 273.15)}ºc`);
        setWeather(json.weather[0].description);

    })
  }

  useEffect(() => {
    fetchWeather(currentLocal);
  }, [currentLocal]);
        
  return (
    <AppContainer>
      <Header/>
      <div style={{display: 'flex', flexDirection: 'row', gap: 30, padding: 30, marginTop: -50}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 30, marginTop: 70}}>
          <LocalInput value={Input} onChange={inputValueHandler} onClick={addCity}/>
          {Locals.map((LocalName, index) =>{
            return(
              <LocalListItem key={index} LocalName={LocalName} deleteClick={() => deleteCity(LocalName)} fetchClick={() => fetchWeather(LocalName)} onLoad={() => fetchWeather(LocalName)}/>
            )
          })}
        </div>
        <LocalWeatherCard TemperatureText={temperature} StateText={weather} LocalNameText={currentLocal}/>
      </div>
    </AppContainer> 
  );
}
export default App;
