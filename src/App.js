import { Header } from './assets/components/Header/Header.tsx';
import { LocalWeatherCard } from './assets/components/LocalWeatherCard/LocalWeatherCard.tsx';
import { Main } from './assets/components/Main/Main.tsx';
import { AppContainer } from './assets/components/AppContainer/AppContainer.js';
import { LocalInput } from './assets/components/LocalInput/LocalInput.tsx';
import { LocalListItem } from './assets/components/LocalList/LocalListItem/LocalListItem.tsx';
import { Colors } from './assets/colors/colors.js';
import { useState } from 'react';

function App() {
  var [Locals, setLocal] = useState([])

  return (
    <AppContainer>
      <Header/>
      <LocalInput/>
      <LocalListItem LocalName='Rio de Janeiro' colors={[Colors.colorFFB039, Colors.colorFFF439]}/>
    </AppContainer>
  );
}

export default App;
