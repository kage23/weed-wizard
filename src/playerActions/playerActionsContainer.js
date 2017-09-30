import { connect } from 'react-redux';
import PlayerActionsComponent from './playerActionsComponent';

import {
  smokeWeed,
  addNotification,
  addSeed
} from '../state/actions';

import { getToolById } from '../utils/toolUtils';
import { getStrainById } from '../utils/weedUtils';
import { BASE_SEED_DROP_RATE } from '../utils/constants';

const mapStateToProps = state => {
  return {
    hasWeed: state.player.weed.length > 0,
    selectedWeed: state.player.weed.filter(weed => weed.selected)[0],
    selectedTool: state.player.tools.filter(tool => tool.selected)[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSmokeWeed: (strainId, toolId) => {
      const strain = getStrainById(strainId);
      const tool = getToolById(toolId);

      dispatch(smokeWeed(strain, tool));
      dispatch(addNotification(`You smoked ${strain.label} out of ${tool.label}.`));

      if (Math.random() <= BASE_SEED_DROP_RATE * strain.seedDropMod) {
        dispatch(addSeed(strain));
        dispatch(addNotification('You found a seed!'));
      }
    }
  };
};

const PlayerActionsContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerActionsComponent);

export default PlayerActionsContainer;
