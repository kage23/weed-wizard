import { DEFAULT_NOTIFICATION_LIFE } from '../utils/constants';

const NotificationsState = [{
  message: 'Welcome to Weed Wizard!',
  life: DEFAULT_NOTIFICATION_LIFE,
  lastUpdated: new Date().valueOf()
}];

export default NotificationsState;
