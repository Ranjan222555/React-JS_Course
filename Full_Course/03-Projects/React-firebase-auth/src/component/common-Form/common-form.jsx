import CommonInput from "../common-input/common-input";
import React from "react";

const FormType = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

function CommonForm({
  formControls = [],
  buttonText,
  formData,
  setformData,
  onSubmit,
}) {
  function renderFormElement(getFormControl, getFormData) {
    let element = null;

    switch (getFormControl.componentType) {
      case FormType.INPUT:
        element = (
          <CommonInput
            type={getFormControl.type}
            placeholder={getFormControl.placeholder}
            value={getFormData[getFormControl.name]}
            name={getFormControl.name}
            autoComplete={getFormControl.autoComplete}
            onChange={(event) =>
              setformData({
                ...formData,
                [getFormControl.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        element = (
          <CommonInput
            type={getFormControl.type}
            placeholder={getFormControl.placeholder}
            value={getFormData[getFormControl.name]}
            name={getFormControl.name}
            onChange={(event) =>
              setformData({
                ...formData,
                [getFormControl.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  }
  return (
    <form onSubmit={onSubmit}>
      {formControls.map((singleFormcontrol, index) => (
        <div key={index}>{renderFormElement(singleFormcontrol, formData)}</div>
      ))}

      <button type="submit">{buttonText || "submit"}</button>
    </form>
  );
}
export default CommonForm;
