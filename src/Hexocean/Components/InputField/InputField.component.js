/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { Field } from "redux-form";
import { PureComponent } from "react";
import '../../Style/Inputs.css';

/** @namespace Hexocean/Component/Input/Component */
export class InputComponent extends PureComponent {
  render() {
    const {
      fieldLabel,
      fieldType,
      fieldName,
      componentType,
      fieldPlaceholder,
      validators,
    } = this.props;

    return (
      <div className="input-field form-input">
        <label>{fieldLabel}</label>
        <div>
          <Field
            name={fieldName}
            component={componentType}
            type={fieldType}
            placeholder={fieldPlaceholder}
            validate={validators}
            className="redux-field"
          />
        </div>
      </div>
    );
  }
}

export default InputComponent;
