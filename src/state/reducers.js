import { combineReducers } from 'redux';

import garden from '../garden/gardenReducers';
import notifications from '../notifications/notificationsReducers';
import player from '../player/playerReducers';
import settings from '../settings/settingsReducers';

export default combineReducers({
  garden,
  notifications,
  player,
  settings
});
