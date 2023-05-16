/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NotificationComponent from "./Notification.component";
import { showNotification, hideNotification } from "../../Store/Notification/Notification.actions";

/** @namespace Component/Notification/Container/mapStateToProps */
function mapStateToProps(state) {
  return {
    message: state.notification.message,
    open: state.notification.open,
  };
}

/** @namespace Component/Notification/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch) {
  return {
    showNotification: () => dispatch(showNotification()),
    hideNotification: () => dispatch(hideNotification())
  };
}

/** @namespace Hexocean/Component/Notification/Container */
class NotificationContainer extends PureComponent {
  static propTypes = {
    message: PropTypes.string.isRequired,
    open: PropTypes.bool,
    showNotification: PropTypes.func,
  };

  static defaultProps = {
    message: "",
  };

  containerFunctions = {};

  componentDidMount() {
    const { hideNotification } = this.props;

    return hideNotification();
  }

  componentDidUpdate(prevProps, prevState) {
    const { showNotification } = this.props;
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        const onDelayedAction = setTimeout(() => {
          showNotification();
        }, 3000);

        return onDelayedAction;
      }
    }
  }

  containerProps() {
    const {
      message,
      open, 
      showNotification
    } = this.props;

    return {
      message,
      open,
      showNotification,
    };
  }

  render() {
    return (
      <NotificationComponent
        {...this.containerProps()}
        {...this.containerFunctions}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationContainer);
