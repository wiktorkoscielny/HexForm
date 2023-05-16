/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoaderComponent from "./Laoder.component";

/** @namespace Component/Loader/Container/mapStateToProps */
function mapStateToProps(state) {
  return {
    isLoading: state.loader.isLoading,
  };
}

/** @namespace Component/Loader/Container/mapDispatchToProps */
function mapDispatchToProps() {
  return {};
}

/** @namespace Hexocean/Component/Loader/Container */
class LoaderContainer extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  containerProps() {
    const { isLoading } = this.props;

    return { isLoading };
  }

  render() {
    return (
      <LoaderComponent
        {...this.containerProps()}
        {...this.containerFunctions}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoaderContainer);
