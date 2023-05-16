/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FormComponent from "./Form.component";
import { FETCH_URL } from "../../Util/Fetch";
import {
  updateNotificationMessage,
  showNotification,
} from "../../Store/Notification/Notification.actions";
import { addRecipe } from "../../Store/Recipes/Recipes.actions";
import { resetForm } from "../../Store/Form/Form.actions";
import { updateLoader } from "../../Store/Loader/Loader.actions";

/** @namespace Component/ContactForm/Container/mapStateToProps */
function mapStateToProps(state) {
  return {};
}

/** @namespace Component/Form/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch) {
  return {
    updateNotificationMessage: (payload) =>
      dispatch(updateNotificationMessage(payload)),
    showNotification: () => dispatch(showNotification()),
    addRecipe: (payload) => dispatch(addRecipe(payload)),
    resetForm: () => dispatch(resetForm()),
    updateLoader: () => dispatch(updateLoader())
  };
}

/** @namespace Hexocean/Component/Form/Container */
class FormContainer extends PureComponent {
  static propTypes = {
    // values: PropTypes.object,
    updateNotificationMessage: PropTypes.func,
    showNotification: PropTypes.func,
    addRecipe: PropTypes.func,
    resetForm: PropTypes.func,
    updateLoader: PropTypes.func
  };

  state = {};

  containerFunctions = {
    handleFormSubmit: this.handleFormSubmit.bind(this),
  };

  handleFormSubmit(values) {
    const { sendRequest } = this;
    const body = this._toggleRequestOptions(values);

    return sendRequest(values, body);
  }

  sendRequest = (values, body) => {
    const {
      updateNotificationMessage,
      showNotification,
      addRecipe,
      resetForm,
      updateLoader } = this.props;
    const {
      numberOfSlices,
      diameter,
      slicesOfBread,
      spicinessScale,
      name,
      preparationTime,
      dishType } = values;

    const additionalData =
      (numberOfSlices && [{ no_of_slices: numberOfSlices, diameter: diameter }]) ||
      (spicinessScale && [{ spiciness_scale: spicinessScale }]) ||
      (slicesOfBread && [{ slices_of_bread: slicesOfBread }]);
    const request_body = body;

    updateLoader();
    fetch(FETCH_URL, request_body)
      .then(async (response) => {
        if (!response.ok) {
          const exception = await response.text();
          throw new Error(exception);
        } else {
          const response_data = await response.json();
          console.log(response_data);
          resetForm();
          showNotification();
          updateNotificationMessage("Success! Form submitted.");
          addRecipe({
            id: Date.now(),
            name: name,
            preparationTime: preparationTime,
            type: dishType,
            additionalInformation: additionalData,
          });
        }
      })
      .catch((err) => {
        resetForm();
        updateNotificationMessage(
          `${err.toString()}` 
        );
        showNotification();
      })
      .then(() => {
        updateLoader();
      })
  };

  _toggleRequestOptions(data) {
    const {
      numberOfSlices,
      diameter,
      slicesOfBread,
      spicinessScale,
      name,
      preparationTime,
      dishType } = data;

    if (data) {
      switch (dishType) {
        case "pizza":
          return {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: name,
              preparation_time: preparationTime,
              type: dishType,
              no_of_slices: numberOfSlices,
              diameter: diameter,
            }),
          };
        case "soup":
          return {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: name,
              preparation_time: preparationTime,
              type: dishType,
              spiciness_scale: spicinessScale,
            }),
          };
        case "sandwich":
          return {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: name,
              preparation_time: preparationTime,
              type: dishType,
              slices_of_bread: slicesOfBread,
            }),
          };
        default:
          return;
      }
    }

    return;
  }

  containerProps() {
    const {
      handleFormSubmit,
      values,
      updateNotificationMessage } = this.props;
    const { message } = this.state;

    return {
      handleFormSubmit,
      values,
      updateNotificationMessage,
      message,
    };
  }

  render() {
    return (
      <FormComponent
        {...this.containerProps()}
        {...this.containerFunctions}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
