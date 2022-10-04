import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Formik, Field, Form } from 'formik';
import styles from '@styles/Modal.module.scss';

const AddResource = () => {
  const [valueName, setValueName] = useState('');
  const [valueUrl, setValueUrl] = useState('');

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          url: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div>
            <h5>Nombre</h5>
            <Field name="name" type="text" className={styles.pInputtext} autoFocus />
          </div>
          <div>
            <h5>Url</h5>
            <Field name="url" type="text" className={styles.pInputtext} />
          </div>
          {/* <button type="submit">Submit</button> */}
        </Form>
      </Formik>



      {/* <div>
        <h5>Nombre</h5>
        <InputText className={styles.pInputtext} value={valueName} onChange={(e) => setValueName(e.target.value)} autoFocus />
      </div>
      <div>
        <h5>Url</h5>
        <InputText className={styles.pInputtext} value={valueUrl} onChange={(e) => setValueUrl(e.target.value)} />
      </div> */}
    </>
  )
}

export default AddResource