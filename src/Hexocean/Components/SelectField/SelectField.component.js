/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { Field } from "redux-form";
import { PureComponent } from "react";
import '../../Style/Inputs.css';

/** @namespace Hexocean/Component/Select/Component */
export class SelectComponent extends PureComponent {
  render() {
    const { fieldLabel, fieldName, componentType, validators, min, max } =
      this.props;

    let data = [];
    let i;

    for (i = min; i <= max; i++) {
      data.push({ value: i, text: i });
    }

    return (
      <div className="select-dropdown form-input">
        <label>{fieldLabel}</label>
        <div>
          <Field
            name={fieldName}
            component={componentType}
            validate={validators}
            className="redux-field"
          >
            {data.map((option) => (
              <option value={option.value} key={option.value}>
                {option.text}
              </option>
            ))}
          </Field>
        </div>
      </div>
    );
  }
}

export default SelectComponent;
