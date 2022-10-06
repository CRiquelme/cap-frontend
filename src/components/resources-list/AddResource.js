import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from 'primereact/button';
import * as yup from 'yup';
import styles from '@styles/Modal.module.scss';

const AddResource = ({ onHide, onSave }) => {
  const SignupSchema = yup.object().shape({
    name: yup.string().required('Requerido').min(2, 'Mínimo 2 caracteres').max(50, 'Máximo 50 caracteres'),
    url: yup
      .string()
      .required('Requerido')
      .min(2, 'Mínimo 2 caracteres')
      .max(250, 'Máximo 250 caracteres')
      .matches(/^(http(s)?:\/\/)[\w.-]+(?:.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm, 'Por favor, ingresa una url válida'),
  });

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          url: '',
          user_id: '',
        }}
        onSubmit={onSave}
        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name" className={styles.label}>
                Nombre
              </label>
              <Field name="name" id="name" type="text" className={styles.pInputtext} />
              {errors.name && touched.name ? <div className={styles.error}>{errors.name}</div> : null}
            </div>
            <div>
              <label htmlFor="url" className={styles.label}>
                Url
              </label>
              <Field name="url" id="url" type="text" className={styles.pInputtext} />
              {errors.url && touched.url ? <div className={styles.error}>{errors.url}</div> : null}
            </div>
            <div className="dialog-demo">
              <Button type="button" label="Salir" icon="pi pi-times" onClick={onHide} className="p-button-text" />
              <Button type="submit" label="Guardar" icon="pi pi-check" />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddResource;
