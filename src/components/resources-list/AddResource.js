import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import styles from '@styles/Modal.module.scss';

const AddResource = () => {
  const [valueName, setValueName] = useState('');
  const [valueUrl, setValueUrl] = useState('');

  return (
    <form>
      <div>
        <h5>Nombre</h5>
        <InputText className={styles.pInputtext} value={valueName} onChange={(e) => setValueName(e.target.value)} autoFocus />
      </div>
      <div>
        <h5>Url</h5>
        <InputText className={styles.pInputtext} value={valueUrl} onChange={(e) => setValueUrl(e.target.value)} />
      </div>
    </form>
  )
}

export default AddResource