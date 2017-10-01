import { connect } from 'react-redux';
import PlayerActionsComponent from './playerActionsComponent';

import {
  increaseHighness,
  decreaseWeedQuantity,
  decreaseSeedQuantity,
  addNotification,
  addSeed,
  plantSeed
} from '../state/actions';

import { getToolById } from '../utils/toolUtils';
import {
  getStrainById,
  getRandomTier1Strain
} from '../utils/weedUtils';
import {
  CONVERSIONS,
  BASE_SEED_DROP_RATE
} from '../utils/constants';

const mapStateToProps = state => {
  const selectedWeedFromState = state.player.weed.filter(weed => weed.selected)[0];
  const selectedWeedProps = getStrainById(selectedWeedFromState.id);
  const selectedWeed = {
    ...selectedWeedFromState,
    ...selectedWeedProps
  };

  const selectedToolFromState = state.player.tools.filter(tool => tool.selected)[0];
  const selectedToolProps = getToolById(selectedToolFromState.id);
  const selectedTool = {
    ...selectedToolFromState,
    ...selectedToolProps
  };

  const emptyGardenSpace = state.garden.some(gardenSpace => gardenSpace === null);

  return {
    selectedWeed,
    selectedTool,
    emptyGardenSpace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSmokeWeed: (strain, tool) => {
      const strainProps = getStrainById(strain.id);
      const toolProps = getToolById(tool.id);
      const fullStrain = {
        ...strainProps,
        ...strain
      };
      const fullTool = {
        ...toolProps,
        ...tool
      };
      const baseBowlSize = CONVERSIONS[`BOWL_TO_${fullStrain.uom.toUpperCase()}`];

      const amountToSmoke = Math.min(
        fullStrain.quantity,
        fullTool.size * baseBowlSize
      );

      dispatch(increaseHighness(fullStrain.highness * (amountToSmoke / baseBowlSize)));
      dispatch(decreaseWeedQuantity(strain.id, amountToSmoke));
      dispatch(addNotification(`You smoked ${fullStrain.label} out of ${fullTool.label}.`));

      if (Math.random() <= BASE_SEED_DROP_RATE * fullStrain.seedDropMod) {
        dispatch(addSeed(strain));
        dispatch(addNotification('You found a seed!'));
      }

      if (fullStrain.quantity - amountToSmoke <= 0) {
        dispatch(addNotification(`You ran out of ${fullStrain.label}!`));
      }
    },

    onPlantSeed: (strain) => {
      let strainToPlant = strain;

      if (strainToPlant.id === 0) {
        strainToPlant = getRandomTier1Strain();
      }

      dispatch(decreaseSeedQuantity(strain.id));
      dispatch(plantSeed(strainToPlant));
    }
  };
};

const PlayerActionsContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerActionsComponent);

export default PlayerActionsContainer;
