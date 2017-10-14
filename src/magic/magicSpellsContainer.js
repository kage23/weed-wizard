import { connect } from 'react-redux';
import MagicSpellsComponent from './magicSpellsComponent';
import { getSpellById } from './magicUtils';

const mapStateToProps = state => {
  const spellsYouKnow = state.magic.spellsYouKnow.map(spellId => getSpellById(spellId));

  return {
    spellsYouKnow
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const MagicSpellsContainer = connect(mapStateToProps, mapDispatchToProps)(MagicSpellsComponent);

export default MagicSpellsContainer;
