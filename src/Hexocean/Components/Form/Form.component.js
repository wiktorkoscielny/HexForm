/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { FORM_NAME } from "../../Util/Config";
import {
  REQUIRED,
  TEXT_VALIDATOR,
  NUMBER_VALIDATOR,
} from "../../Util/Validation";
import formatValue from "../../Util/Formatter";
import InputComponent from "../InputField/InputField.component";
import SelectComponent from "../SelectField/SelectField.component";
import '../../Style/Button.css';
import '../../Style/Inputs.css';
import './Form.style.css';

/** @namespace Hexocean/Component/Form/Component */
export class FormComponent extends PureComponent {
  static propTypes = {
    ...super.propTypes,
    handleFormSubmit: PropTypes.func.isRequired,
    values: PropTypes.object,
  };

  state = {};

  renderConditionalFields(type, inputComponent, selectComponent) {

    switch (type) {
      case "pizza":
        return (
          <>
            <InputComponent
              fieldLabel={"Number Of Slices"}
              fieldName={"numberOfSlices"}
              componentType={inputComponent}
              fieldType={"number"}
              fieldPlaceholder={"Number Of Slices"}
              validators={[REQUIRED, NUMBER_VALIDATOR]}
            />
            <InputComponent
              fieldLabel={"Diameter"}
              fieldName={"diameter"}
              componentType={inputComponent}
              fieldType={"number"}
              fieldPlaceholder={"Diameter"}
              validators={[REQUIRED, NUMBER_VALIDATOR]}
            />
          </>
        );
      case "soup":
        return (
          <SelectComponent
            fieldLabel={"Spciness Scale"}
            fieldName={"spicinessScale"}
            componentType={selectComponent}
            validators={REQUIRED}
            min={1}
            max={10}
          />
        );
      case "sandwich":
        return (
          <InputComponent
            fieldLabel={"Slices Of Bread"}
            fieldName={"slicesOfBread"}
            componentType={inputComponent}
            fieldType={"number"}
            fieldPlaceholder={"Slices of bread"}
            validators={[REQUIRED, NUMBER_VALIDATOR]}
          />
        );
      default:
        return;
    }
  }

  inputComponent({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <div>
        <label>{label}</label>
        <div className="required-field">
          <input {...input} placeholder={label} type={type} />
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
  }

  selectComponent = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
    children,
  }) => (
    <div>
      <label>{label}</label>
      <div className="required-field">
        <select {...input}>{children}</select>
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );

  render() {
    const {
      handleFormSubmit,
      handleSubmit,
      pristine,
      reset,
      submitting,
      dishTypeValue,
    } = this.props;

    const { inputComponent, selectComponent } = this;

    const selectedOptions = [
      { value: "", text: "" },
      { value: "pizza", text: "Pizza" },
      { value: "soup", text: "Soup" },
      { value: "sandwich", text: "Sandwich" },
    ];

    return (
      <div className="form-container">
        <form className="form-component" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="input-field form-input">
            <label>Dish Name</label>
            <div>
              <Field
                name="name"
                component={inputComponent}
                type="text"
                placeholder="Name of the dish"
                className="redux-field"
                validate={[REQUIRED, TEXT_VALIDATOR]}
              />
            </div>
          </div>
          <div className="input-field form-input">
            <label>Preparation Time</label>
            <div>
              <Field
                name="preparationTime"
                component={inputComponent}
                type="text"
                normalize={formatValue}
                placeholder="Preparation Time"
                className="redux-field"
                validate={REQUIRED}
              />
            </div>
          </div>
          <div className="select-dropdown form-input">
            <label>Dish Type</label>
            <div>
              <Field
                name="dishType"
                component={selectComponent}
                validate={REQUIRED}
                className="redux-field"
              >
                {selectedOptions.map((option) => (
                  <option value={option.value} key={option.value}>
                    {option.text}
                  </option>
                ))}
              </Field>
            </div>
          </div>
          {this.renderConditionalFields(
            dishTypeValue,
            inputComponent,
            selectComponent
          )}

          <div className="btn-container">
            <button
            className="btn-primary"
            type="submit"
            disabled={pristine || submitting}
            >
              Submit
            </button>
            <button
            className="btn-primary"
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
            </button>
          </div>
        </form>
      </div>
    );
  }
}

FormComponent = reduxForm({
  form: FORM_NAME,
  fields: ["name", "preparationTime"],
})(FormComponent);

const selector = formValueSelector(FORM_NAME);
FormComponent = connect((state) => {
  const dishTypeValue = selector(state, "dishType");

  return {
    dishTypeValue,
  };
})(FormComponent);

export default FormComponent;
