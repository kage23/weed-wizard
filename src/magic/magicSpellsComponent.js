import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './magic.css';

class MagicSpellsComponent extends Component {
  render() {
    return (
      <div className={styles.magicSpells}>
        <h3>Magic Spells You Know</h3>
      </div>
    );
  }
}

export default MagicSpellsComponent;
