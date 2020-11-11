import React from 'react';
import { useSelector } from 'react-redux';

function SaveDownloader() {
  const characters = useSelector(state => state.characters);
  const skins = useSelector(state => state.skins);
  const xml = useSelector(state => state.xml);

  const downloadSaveFile = () => {
    // Add all of the characters to the xml file before downloading
    const characterValues = Object.values(characters);
    for (let i = 0; i < characterValues.length; i++) {
      if (characterValues[i].unlocked) {
        const characterNode = xml.document.createElement('unlock');
        characterNode.innerHTML = `Characters.${characterValues[i].internal_id}`;
        xml.document.querySelector('stats').appendChild(characterNode);
      }
    }

    // Add all of the skins
    const skinsValues = Object.values(skins);
    for (let i = 0; i < skinsValues.length; i++) {
      if (skinsValues[i].unlocked) {
        const skinNode = xml.document.createElement('unlock');
        skinNode.innerHTML = `Skins.${skinsValues[i].internal_id}`;
        xml.document.querySelector('stats').appendChild(skinNode);
      }
    }

    // Serialize the XML Document back into an xml string.
    const serializer = new XMLSerializer();
    const serializedXmlString = serializer.serializeToString(xml.document);
    // Create blob file to download.
    const blob = new Blob([serializedXmlString], {type: 'text/xml'});
    const url = window.URL.createObjectURL(blob);
    // Now we create invisible anchor to download from when user
    // presses the button.
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', xml.fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className="save-downloader">
      <button onClick={downloadSaveFile}>Download Save</button>
    </div>
  )
}

export default SaveDownloader;