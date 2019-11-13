import PropTypes from 'prop-types';
import { notification as notificationAntd } from 'antd';

export const notification = (props) => {
  return notificationAntd[props.type]({...props})
};

notification.propTypes  = {
  type: PropTypes.string
};

notification.defaultProps = {
  type: 'info'
};