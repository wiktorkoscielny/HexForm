/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Recipes.styles.css";

/** @namespace Hexocean/Component/Recipes/Component */
export class RecipesComponent extends PureComponent {
  static propTypes = {
    recipes: PropTypes.object || PropTypes.bool,
    deleteSingleRecipe: PropTypes.func,
    deleteAllRecipes: PropTypes.func,
    countRecipes: PropTypes.func,
  };

  renderRecipes = () => {
    const { recipes, deleteSingleRecipe } = this.props;

    if (recipes.length > 0) {
      return (
        <div className="recipes-container">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="slice">
              <div className="item">
                <div className="provider">
                  <p>Dish Name:</p>
                </div>
                <div className="data">{recipe.name}</div>
              </div>
              <div className="item">
                <div className="provider">
                  <p>Dish Type: </p>
                </div>
                <div className="data">
                  <p>{recipe.type}</p>
                </div>
              </div>
              <div className="item">
                <div className="provider">
                  <p>Preparation Time: </p>
                </div>
                <div className="data">
                  <p>{recipe.preparationTime}</p>
                </div>
              </div>
              {recipe.additionalInformation.map((value, index) => (
                <div key={index} className="item">
                  <div className="provider">
                    <p>{Object.keys(value)[0]} : </p>
                  </div>
                  <div className="data">
                    <p>{Object.values(value)[0]}</p>
                  </div>
                </div>
              ))}
              <button
                className="btn-secondary"
                onClick={() => deleteSingleRecipe(recipe.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="empty-container">
        <p>You have no recipes...</p>
      </div>
    );
  };

  render() {
    const { renderRecipes } = this;
    const { deleteAllRecipes, countRecipes, recipes } = this.props;

    return (
      <div>
        <div>{renderRecipes()}</div>
        <div>
          <div className="clear-wrapper">
            {recipes.length > 0 && (
              <button
                className="btn-secondary clear"
                onClick={() => deleteAllRecipes()}
              >
                Delete all recipes
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default RecipesComponent;
