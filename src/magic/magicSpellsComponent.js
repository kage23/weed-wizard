import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ItemList from '../components/itemList';
import ItemListItem from '../components/itemListItem';

import styles from './magic.css';

class MagicSpellsComponent extends Component {
  static propTypes = {
    spellsYouKnow: PropTypes.array,
    playerHighness: PropTypes.number,

    castSpell: PropTypes.func
  };

  tryToCastSpell(spell) {
    if (this.props.playerHighness > 0) {
      this.props.castSpell(spell);
    } else {
      debugger;
    }
  }

  renderSpellList() {
    const spells = this.props.spellsYouKnow.map((spell, idx) => {

      return (
        <ItemListItem
          key={idx}
          label={spell.name}
          description={spell.description}
          selected={spell.active}
          onClick={() => { this.tryToCastSpell(spell); }} />
      );
    });

    return (
      <ItemList
        header={`Magic Spells You Know`}
        list={spells} />
    );
  }

  render() {
    return (
      <div className={styles.magicSpells}>
        {this.renderSpellList()}
      </div>
    );
  }
}

export default MagicSpellsComponent;
