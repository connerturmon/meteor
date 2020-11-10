import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lockCharacter, unlockCharacter } from './actions/characterActions';
import { CAPTAIN_INTERNAL_ID } from './common/characterConstants';

function App() {
  const characters = useSelector(state => state);
  const dispatch = useDispatch();

  const toggleCharacterUnlock = character => {
    if (characters[character].unlocked) dispatch(lockCharacter(character))
    else dispatch(unlockCharacter(character));
  }

  return (
    <div className="App">
      {
        Object.values(characters).map(function(character) {
          return (
            <div className="character">
              <p>{character.unlocked ? `${character.name}: Unlocked` : `${character.name}: Locked`}</p>
              <button onClick={() => toggleCharacterUnlock(character.internal_id)}>Toggle</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
