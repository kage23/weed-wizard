import { connect } from 'react-redux';
import AlertsComponent from './alertsComponent';

import { dismissAlert } from './alertsActions';

const mapStateToProps = state => {
  return {
    header: state.alerts.header,
    content: state.alerts.content,
    isOpen: state.alerts.isOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dismissAlert: () => {
      dispatch(dismissAlert());
    }
  };
};

const AlertsContainer = connect(mapStateToProps, mapDispatchToProps)(AlertsComponent);

export default AlertsContainer;

