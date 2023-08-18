import PropTypes from 'prop-types';

import { NotificationMessage } from './Notifications.styled';

export const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
