import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from 'react-modal';

import Button from '../components/button';

import styles from './alerts.css';

class AlertsComponent extends Component {
  static propTypes = {
    header: PropTypes.string,
    content: PropTypes.node,
    isOpen: PropTypes.bool,

    dismissAlert: PropTypes.func
  };

  static contextTypes = {
    loop: PropTypes.object
  };

  componentDidMount() {
    if (this.props.isOpen) {
      this.context.loop.stop();
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isOpen) {
      this.context.loop.stop();
    }
  }

  closeModal() {
    this.props.dismissAlert();
    this.context.loop.start();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        className={styles.content}
        overlayClassName={styles.overlay}
        shouldCloseOnOverlayClick={false}>
        {this.props.header ?
          <h3>{this.props.header}</h3> :
          null}
        {this.props.content ?
          this.props.content :
          null}
        <Button
          label="Okay"
          onClick={() => { this.closeModal(); }} />
      </Modal>
    );
  }
}

export default AlertsComponent;

