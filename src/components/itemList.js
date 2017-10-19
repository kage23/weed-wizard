import PropTypes  from 'prop-types';
import React      from 'react';
import {
  List,
  ListSubHeader } from 'react-toolbox/lib/list';

class ItemList extends React.Component {
  static propTypes = {
    after: PropTypes.node,
    before: PropTypes.node,
    header: PropTypes.string,
    list: PropTypes.array
  };

  render() {
    return (
      <List>
        {this.props.header ? <ListSubHeader caption={this.props.header} /> : null}
        {this.props.before ? this.props.before : null}
        {this.props.list}
        {this.props.after ? this.props.after : null}
      </List>
    );
  }
}

export default ItemList;
