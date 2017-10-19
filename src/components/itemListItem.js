import PropTypes    from 'prop-types';
import React        from 'react';
import { ListItem } from 'react-toolbox/lib/list';

import styles       from './components.css';

class ItemListItem extends React.Component {
  static propTypes = {
    description: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    selected: PropTypes.bool
  };

  render() {
    return (
      <ListItem
        caption={this.props.label}
        legend={this.props.description}
        className={this.props.selected ? styles.itemListItemSelected : styles.itemListItem}
        onClick={this.props.onClick}>
        {this.props.children ?
          <div>{this.props.children}</div> :
          null}
      </ListItem>
    );
  }
}

export default ItemListItem;
