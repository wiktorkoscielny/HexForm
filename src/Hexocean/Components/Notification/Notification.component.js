/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import PropTypes from "prop-types";
import './Notification.styles.css';

/** @namespace Hexocean/Component/Notification/Component */
export class NotificationComponent extends PureComponent {
  static propTypes = {
    message: PropTypes.string.isRequired,
    open: PropTypes.bool,
  };

  state = {};

  renderPopup = () => {
    const { message, open } = this.props;
    if (open) {
      return <div className="notification-component"><div><p>Message: {message}</p></div></div>;
    }

    return;
  };

  render() {
    const { renderPopup } = this;

    return <div className="popup">{renderPopup()}</div>;
  }
}

export default NotificationComponent;
