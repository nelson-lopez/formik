import React, { useState } from 'react';
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik';
import { TextFormField } from './FormFields/TextField';
import { Row, Col, Label, Card, CardBody, CardTitle, Button } from 'reactstrap';
import { SelectFormField } from './FormFields/SelectFormField';

function App() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    email: '',
    state: ''
  })

  console.log(formValues)
  const schema = yup.object({
    firstName: yup
      .string()
      .required('First name is a required field')
      .min(3, 'First name is too short')
      .max(50, 'First name is too long'),
    email: yup
      .string()
      .email('Must be a valid Email')
      .required('Email is required')
  });


  return (
    <Formik
      validationSchema={schema}
      initialValues={formValues}
      onSubmit={(value) => {
        setFormValues(value)
      }}
    >
      {({ isValidating }) => (
        <Form >
          <div className="form-page" >
            <div className="form-page-header d-flex justify-content-between">
              <Card>
                <CardBody>
                  <CardTitle>Address Details</CardTitle>
                  <Row form>
                    <Col md={12}>
                      <Label>First Name</Label>
                      <Field
                        label="Username"
                        name="firstName"
                        // Mount generic Text Input component and inject Formik Props and Field Inputs
                        component={TextFormField}
                      />
                      <Label>Email</Label>
                      <Field
                        label="Email"
                        name="email"
                        component={TextFormField} />
                      <Label>Select State</Label>
                      <Field
                        label="State"
                        name="state"
                        options={[
                          { label: "US", value: "US" },
                          { label: "NJ", value: "NJ" }
                        ]}
                        // Mount generic Select component and inject Formik Props and Field Inputs
                        component={SelectFormField}
                      />
                    </Col>
                    <Button type="submit" disabled={isValidating}>Submit</Button>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};


export default App;
