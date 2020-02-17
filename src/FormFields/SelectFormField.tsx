import { FieldProps, getIn } from "formik";
import React from "react";
import { FormGroup, Input, Alert } from 'reactstrap';

export const SelectFormField: React.FC<
  FieldProps & {
    label?: string;
    options: Array<{ label: string; value: string }>;
  }
> = ({ field, form, label, options, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <FormGroup>
      <Input type="select" name="stateSelect"
        {...field}
        {...props}
      >
        <option>-- Select Country --</option>
        <option value={"US"}>US</option>
        <option value={"NJ"}>NJ</option>
        }
      </Input>
      {errorText ? <Alert color="danger">{errorText}</Alert> : ''}
    </FormGroup>
  );
};