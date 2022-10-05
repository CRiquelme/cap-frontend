import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from 'primereact/button';
import * as yup from 'yup';
import styles from '@styles/Modal.module.scss';
import useCurrentUser from '@hooks/useCurrentUser';

const AddResource = ({ onHide, onSave, learningUnitId, mutate }) => {
  const currentUser = useCurrentUser();
  const SignupSchema = yup.object().shape({
    name: yup.string().required('Requerido').min(2, 'Mínimo 2 caracteres').max(50, 'Máximo 50 caracteres'),
    url: yup
      .string()
      .required('Requerido')
      .min(2, 'Mínimo 2 caracteres')
      .max(50, 'Máximo 50 caracteres')
      .matches(/^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm, 'Por favor, ingresa una url válida'),
  });
  const handleSubmit = async (values) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: values.name,
        url: values.url,
        user: currentUser.id,
      }),
    };
    const response = await fetch('http://localhost:3001/api/learning_units/' + learningUnitId + '/resources', requestOptions);
    await response.json();
    mutate();
    onSave('displayBasic');
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          url: '',
          user_id: '',
        }}
        onSubmit={handleSubmit}
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
              <Button type="button" label="Salir" icon="pi pi-times" onClick={() => onHide('displayBasic')} className="p-button-text" />
              <Button type="submit" label="Guardar" icon="pi pi-check" />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddResource;
