import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lockSkin, unlockSkin } from '../actions/skinsActions';

export default function Skins() {
  const skins = useSelector(state => state.skins);
  const dispatch = useDispatch();

  const toggleSkinUnlock = (skin, checked) => {
    if (checked) dispatch(unlockSkin(skin))
    else dispatch(lockSkin(skin));
  }

  return (
    <div className="skins">
      <h3>Skins</h3>
      {
        Object.values(skins).map(skin => {
          return (
            <div className="skin">
              <input
                type="checkbox"
                id={`${skin.internal_id}-checkbox`}
                name={`${skin.internal_id}-checkbox`}
                checked={skin.unlocked}
                onChange={event => toggleSkinUnlock(skin.internal_id, event.target.checked)}
              />
              <label htmlFor={`${skin.internal_id}-checkbox`}>{skin.name}</label>
            </div>
          )
        })
      }
    </div>
  )
}