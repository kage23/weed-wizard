import { connect } from 'react-redux';
import { castSpell } from './magicActions';
import MagicSpellsComponent from './magicSpellsComponent';
import { getSpellById } from './magicUtils';

const mapStateToProps = state => {
  const spellsYouKnow = state.magic.spellsYouKnow.map((spell) => {
    const spellProps = getSpellById(spell.id);

    return {
      ...spell,
      ...spellProps
    };
  });

  return {
    spellsYouKnow,
    playerHighness: state.player.highness
  };
};

const mapDispatchToProps = dispatch => {
  return {
    castSpell: (spell) => {
      dispatch(castSpell(spell));
    }
  };
};

const MagicSpellsContainer = connect(mapStateToProps, mapDispatchToProps)(MagicSpellsComponent);

export default MagicSpellsContainer;
