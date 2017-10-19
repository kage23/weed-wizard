import PropTypes  from 'prop-types';
import React      from 'react';
import { Button } from 'react-toolbox/lib/button';
import Navigation from 'react-toolbox/lib/navigation';
import Tooltip    from 'react-toolbox/lib/tooltip';

const TooltipButton = Tooltip(Button);

class PlayerActionsComponent extends React.Component {
  static propTypes = {
    emptyGardenSquare: PropTypes.bool,
    selectedTool: PropTypes.object,
    selectedWeed: PropTypes.object,

    onPlantSeed: PropTypes.func,
    onSmokeWeed: PropTypes.func,
    pauseGame: PropTypes.func
  };

  render() {
    const {
      emptyGardenSquare,
      onPlantSeed,
      onSmokeWeed,
      pauseGame,
      selectedTool,
      selectedWeed
      } = this.props;

    return (
      <Navigation>
        <TooltipButton
          label='Smoke Weed'
          raised primary
          disabled={selectedWeed.quantity <= 0 || !selectedTool}
          tooltip={`Click to smoke ${selectedWeed.label} from your ${selectedTool.label}.`}
          tooltipDelay={500}
          onMouseUp={() => {
            onSmokeWeed(selectedWeed, selectedTool);
          }} />
        <TooltipButton
          label='Plant a Seed'
          raised primary
          disabled={selectedWeed.seeds <= 0 || !emptyGardenSquare}
          tooltip={`Click to plant a ${selectedWeed.label} seed in your garden.`}
          tooltipDelay={500}
          onMouseUp={() => {
            onPlantSeed(selectedWeed);
          }} />
        <TooltipButton
          label='Pause Game'
          raised primary
          tooltip='Click to, uh, pause the game'
          tooltipDelay={500}
          onMouseUp={() => { pauseGame(); }} />
      </Navigation>
    );
  }
}

export default PlayerActionsComponent;
