import { connect } from 'react-redux';
import PlayerStatusComponent from '../playerStatus/playerStatusComponent';

import {
  selectWeed,
  addNotification
} from '../state/actions';

const mapStateToProps = state => {
  const { weed, tools, highness } = state.player;

  return { weed, tools, highness };
};

const mapDispatchToProps = dispatch => {
  return {
    selectWeed: (idx) => {
      dispatch(selectWeed(idx));
    },
    weedRanOutNotification: (label) => {
      dispatch(addNotification(`You ran out of ${label}!`));
    }
  };
};

const PlayerStatusContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerStatusComponent);

export default PlayerStatusContainer;
