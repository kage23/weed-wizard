import { CAST_SPELL } from './magicActions';
import MagicState from './magicState';

export default function magic(state = MagicState, action = null) {
  switch (action.type) {
    case CAST_SPELL:
      return {
        ...state,
        spellsYouKnow: state.spellsYouKnow.map(spell => {
          if (spell.id === action.spell.id) {
            return {
              ...spell,
              active: true
            };
          }
          return spell;
        })
      };

    default:
      return state;
  }
}
