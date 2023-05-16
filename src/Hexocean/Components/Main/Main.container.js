/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainComponent from "./Main.component";

/** @namespace Component/Main/Container/mapStateToProps */
function mapStateToProps(state) {
  return {
    recipes: state.recipe.recipes,
  };
}

/** @namespace Component/Main/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch) {
    return {};
  }

/** @namespace Hexocean/Component/Main/Container */
class MainContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.object
  };

  containerProps() {
    const { recipes } = this.props;

    return {
      recipes
    };
  }

  render() {
    return (
      <MainComponent
        {...this.containerProps()}
        {...this.containerFunctions}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
