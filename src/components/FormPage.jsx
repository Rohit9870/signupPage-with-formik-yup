import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage.css';
import sideImage from '../assets/pexels-photo.jpeg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Email must be regex@gmail.com').required('Required'),
  password: Yup.string().matches(/^r..M.@..9/, 'Password must start from r__M_@__9').required('Required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const FormPage = () => {
  const navigate = useNavigate();

  return (
    <section className="modal-section">
      <div className="container">
        <div className="modal">
          <div className="modal-container">
            <div className="modal-left">
              <h1 className="modal-title">Welcome!</h1>
              <Formik
                initialValues={{ name: '', email: '', password: '', confirm_password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                    navigate('/welcome'); // Navigate to Welcome Page on success
                  }, 400);
                }}
              >
                {({ isSubmitting, isValid, dirty }) => (
                  <Form>
                    <div className="input-block">
                      <label htmlFor="name" className="input-label">Name</label>
                      <Field type="text" name="name" id="name" placeholder="Name"/>
                      <ErrorMessage name="name" component="div" className="form-error" />
                    </div>

                    <div className="input-block">
                      <label htmlFor="email" className="input-label">Email</label>
                      <Field type="email" name="email" id="email" placeholder="Email" />
                      <ErrorMessage name="email" component="div" className="form-error" />
                    </div>

                    <div className="input-block">
                      <label htmlFor="password" className="input-label">Password</label>
                      <Field type="password" name="password" id="password" placeholder="Password" />
                      <ErrorMessage name="password" component="div" className="form-error" />
                    </div>

                    <div className="input-block">
                      <label htmlFor="confirm_password" className="input-label">Confirm Password</label>
                      <Field type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" />
                      <ErrorMessage name="confirm_password" component="div" className="form-error" />
                    </div>

                    <div className="modal-buttons">
                      <button className="input-button" type="submit" disabled={isSubmitting || !isValid || !dirty}>
                        Sign Up
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>

            <div className="modal-right">
              <img src={sideImage} alt="Side" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormPage;
