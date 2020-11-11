import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lockCharacter, unlockCharacter } from '../actions/characterActions';

function Characters() {
  const characters = useSelector(state => state.characters);
  const xml = useSelector(state => state.xml);
  const dispatch = useDispatch();

  const toggleCharacterUnlock = (character, checked) => {
    if (checked) dispatch(unlockCharacter(character))
    else dispatch(lockCharacter(character));
  }

  return (
    <div className="characters">
      <h3>Characters</h3>
      {
        Object.values(characters).map((character, id) => {
          return (
            <div key={id} className="character">
              <input
                type="checkbox"
                id={`${character.internal_id}-checkbox`}
                name={`${character.internal_id}-checkbox`}
                checked={character.unlocked}
                onChange={event => toggleCharacterUnlock(character.internal_id, event.target.checked)}
              />
              <label htmlFor={`${character.internal_id}-checkbox`}>{character.name}</label>
            </div>
          );
        })
      }
    </div>
  );
}

export default Characters;