/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RecipesComponent from "./Recipes.component";
import {
  deleteSingleRecipe,
  deleteAllRecipes,
} from "../../Store/Recipes/Recipes.actions";

/** @namespace Component/Recipes/Container/mapStateToProps */
function mapStateToProps(state) {
  return {
    recipes: state.recipe.recipes,
  };
}

/** @namespace Component/Recipes/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch) {
  return {
    deleteSingleRecipe: (payload) => dispatch(deleteSingleRecipe(payload)),
    deleteAllRecipes: () => dispatch(deleteAllRecipes()),
  };
}

/** @namespace Hexocean/Component/Recipes/Container */
class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.object,
    deleteSingleRecipe: PropTypes.func,
    deleteAllRecipes: PropTypes.func,
  };

  containerProps() {
    const { recipes, deleteSingleRecipe, deleteAllRecipes } = this.props;

    return {
      recipes,
      deleteSingleRecipe,
      deleteAllRecipes,
    };
  }

  render() {
    return (
      <RecipesComponent
        {...this.containerProps()}
        {...this.containerFunctions}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
