import { combineReducers } from 'redux';

import {
  CHANGE_WEED_UOM,
  PLANT_SEED,
  AGE_PLANT,
  REMOVE_PLANT
} from './actions';

import { PLANT_GROWTH_PHASES } from '../utils/constants';

import { plantAgeFilter } from '../utils/weedUtils';

import notifications from '../notifications/notificationsReducers';
import player from '../player/playerReducers';

const initialSettings = {
  settingsUoM: 'oz' // unit of measurement
};

/**
 * Garden reducers
 */
function garden(state = [null], action = null) {
  switch (action.type) {
    case PLANT_SEED:
      const { strain } = action;
      const firstEmptyGardenSquare = state.indexOf(null);
      return [
        ...state.slice(0, firstEmptyGardenSquare),
        {
          ...strain,
          age: 0,
          ageUpdated: new Date(),
          phase: PLANT_GROWTH_PHASES[0],
          phaseIndex: 0,
          gardenSquare: firstEmptyGardenSquare
        },
        ...state.slice(firstEmptyGardenSquare + 1)
      ];

    case AGE_PLANT:
      const now = new Date();
      const plantFromState = state[action.plant.gardenSquare];
      const newPlantAge = plantFromState.age + (now - plantFromState.ageUpdated);
      const newPlantPhaseIndex = plantAgeFilter(newPlantAge);
      const newPlant = {
        ...plantFromState,
        age: newPlantAge,
        ageUpdated: now,
        phase: PLANT_GROWTH_PHASES[newPlantPhaseIndex],
        phaseIndex: newPlantPhaseIndex
      };

      return [
        ...state.slice(0, action.plant.gardenSquare),
        newPlant,
        ...state.slice(action.plant.gardenSquare + 1)
      ];

    case REMOVE_PLANT:
      return state.map((gardenSquare, idx) => {
        if (idx === action.gardenSquare) {
          return null;
        }
        return gardenSquare;
      });

    default:
      return state;
  }
}

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
