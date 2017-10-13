import { combineReducers } from 'redux';

import {
  CHANGE_WEED_UOM,
} from './actions';

import garden from '../garden/gardenReducers';
import notifications from '../notifications/notificationsReducers';
import player from '../player/playerReducers';

const initialSettings = {
  settingsUoM: 'oz' // unit of measurement
};

/**
 * Settings reducers
 * @param settings
 * @param action
 */
function settings(settings = initialSettings, action = null) {
  switch (action.type) {
    case CHANGE_WEED_UOM:
      return {
        ...settings,
        settingsUoM: action.uom
      };
    default:
      return settings;
  }
}

export default combineReducers({
  garden,
  notifications,
  player,
  settings
});
