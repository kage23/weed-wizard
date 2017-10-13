import { DEFAULT_NOTIFICATION_LIFE } from '../utils/constants';

export const UPDATE_NOTIFICATIONS = 'UPDATE_NOTIFICATIONS';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const CHANGE_WEED_UOM = 'CHANGE_WEED_UOM';
export const PLANT_SEED = 'PLANT_SEED';
export const AGE_PLANT = 'AGE_PLANT';
export const REMOVE_PLANT = 'REMOVE_PLANT';

export function updateNotifications() {
  return {
    type: UPDATE_NOTIFICATIONS
  };
}

export function addNotification(message, life = DEFAULT_NOTIFICATION_LIFE) {
  return {
    type: ADD_NOTIFICATION,
    message,
    life
  };
}

export function changeSettingsUoM(uom) {
  return {
    type: CHANGE_WEED_UOM,
    uom
  };
}

export function plantSeed(strain) {
  return {
    type: PLANT_SEED,
    strain
  };
}

export function agePlant(plant) {
  return {
    type: AGE_PLANT,
    plant
  };
}

export function removePlant(gardenSquare) {
  return {
    type: REMOVE_PLANT,
    gardenSquare
  };
}
