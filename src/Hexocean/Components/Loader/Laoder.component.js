/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import PropTypes from "prop-types";
import './Loader.styles.css';

/** @namespace Hexocean/Component/Loader/Component */
export class LoaderComponent extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.func.isRequired,
  };

  returnLoader = () => {
    const { isLoading } = this.props;

    if (isLoading) {
      return (
        <span className="loader"></span>
      );
    }

    return;
  };

  render() {
    const { returnLoader } = this;

    return(
      <div className="loader-wrapper">
        {returnLoader()}
      </div>
    );
  }
}

export default LoaderComponent;
