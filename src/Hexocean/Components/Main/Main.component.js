/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import PropTypes from "prop-types";
import RecipesContainer from "../Recipes/Recipes.container";
import FormContainer from "../Form/Form.container";
import { AiOutlineForm } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import "./Main.styles.css";

/** @namespace Hexocean/Component/Main/Component */
export class MainComponent extends PureComponent {
  static propTypes = {
    recipes: PropTypes.object,
  };

  state = { isOpenForm: false, isListOpen: false };

  render() {
    const { recipes } = this.props;
    return (
      <>
        <sidenav>
          <div className="content">
            <div className="buttons">
              <a
                className="btn-nav"
                onClick={() =>
                  this.setState((prevState) => ({
                    isOpen: !prevState.isOpen,
                    isListOpen: false,
                  }))
                }
              >
                <BiAddToQueue />
              </a>
              <a
                className="btn-nav"
                onClick={() =>
                  this.setState((prevState) => ({
                    isListOpen: !prevState.isListOpen,
                    isOpen: false,
                  }))
                }
              >
                <AiOutlineForm />
                <span className="counter">{recipes.length}</span>
              </a>
            </div>
            <div
              className="section-one"
              style={{ display: this.state.isListOpen ? "block" : "none" }}
            >
              <RecipesContainer />
            </div>
            <div
              className="section-two"
              style={{ display: this.state.isOpen ? "block" : "none" }}
            >
              <FormContainer />
            </div>
          </div>
        </sidenav>
        <div className="main">
          <h1>Menage your recipes</h1>
          <h2>with chief dashboard.</h2>
        </div>
      </>
    );
  }
}

export default MainComponent;
