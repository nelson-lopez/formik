import { FieldProps, getIn } from "formik";
import React from "react";
import { FormGroup, Input, Alert } from "reactstrap";

export const TextFormField: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <FormGroup>
      <Input type="text"
        name={field.name}
        id={field.name}
        onChange={form.validateOnChange}
        {...field}
        {...props}
      />
      {errorText ? <Alert color="danger">{errorText}</Alert> : ''}
    </FormGroup >
  );
};