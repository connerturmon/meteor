import React from 'react';
import SaveUploader from './components/SaveUploader';
import SaveDownloader from './components/SaveDownloader';
import Characters from './components/Characters';
import Skins from './components/Skins';

function App() {
return (
    <div className="App">
      <SaveUploader />
      <SaveDownloader />
      <Characters />
      <Skins />
    </div>
  );
}

export default App;
