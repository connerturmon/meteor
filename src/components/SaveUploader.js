import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lockCharacter, unlockCharacter } from '../actions/characterActions';
import { setXml, setXmlFileName } from '../actions/xmlActions';

function SaveUploader() {
  const characters = useSelector(state => state.characters);
  const dispatch = useDispatch();
  const [fileLoadError, setFileLoadError] = useState(false);

  const loadSaveFile = event => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile !== null && uploadedFile.type === 'text/xml') {
      setFileLoadError(false);

      // Store the file name for when the use downloads the
      // modified save.
      dispatch(setXmlFileName(uploadedFile.name));

      const fileReader = new FileReader();
      fileReader.readAsText(uploadedFile);

      // Throw an error if file is unable to load.
      fileReader.onerror = event => {
        setFileLoadError(true);
        console.log(`Error on loading file ${fileReader.error}`);
      }

      // File reader successfully loads file.
      fileReader.onload = event => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(event.target.result, 'text/xml');
        dispatch(setXml(xml));

        /////////////////////////////////////////////////////////////////////////
        //   OK SO THIS IS SUPER NOT POG. WE NEED TO NOT HAVE EVERYTHING LOAD  \\
        //   IN HERE BUT I DON'T KNOW HOW TO SOLVE THAT YET                    //
        ////////////////////////////////////////////////////////////////////////
        for (let i = 0; i < Object.values(characters).length; i++)
          dispatch(lockCharacter(Object.values(characters)[i].internal_id));

        const characterNodes = fetchCharacterNodesFromXml(xml);
        for (let i = 0; i < characterNodes.length; i++) {
          const characterInternalName = characterNodes[i].innerHTML.slice(11);
          const characterValues = Object.values(characters);
          for (let j = 0; j < characterValues.length; j++) {
            if (characterInternalName === characterValues[j].internal_id)
              dispatch(unlockCharacter(characterInternalName));
          }
        }
      }
    } else setFileLoadError(true);
  }

  // Fetch the character nodes 
  const fetchCharacterNodesFromXml = xml => {
    const characters = [];
  
    if (xml.querySelector('stats') !== null) {
      const unlockNodes = xml.querySelector('stats').querySelectorAll('unlock');
  
      for (let i = 0; i < unlockNodes.length; i++) {
        if (unlockNodes[i].innerHTML.includes('Characters.'))
          characters.push(unlockNodes[i]);
      }
    }
  
    return characters;
  }

  return (
    <div className="save-uploader">
      {fileLoadError &&
        <p style={{color: 'red'}}>Error loading file. Make sure file is of .xml type.</p>
      }
      <input
        type="file"
        id="save-uploader"
        name="save-uploader"
        onChange={loadSaveFile}
      />
    </div>
  )
}

export default SaveUploader;