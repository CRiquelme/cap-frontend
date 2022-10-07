import React, { useState, useRef } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import styles from '@styles/ResourceEvaluations.module.scss';

const AddEvaluation = ({ handleSubmit, defaultOptions }) => {
  const [evaluation, setEvaluation] = useState(defaultOptions.evaluation);
  const [comment, setComment] = useState(defaultOptions.comment);
  const [evaluated, setEvaluated] = useState(defaultOptions.evaluated);

  const handleErase = () => setComment('');
  const toast = useRef(null);
  let title = evaluated ? 'Tu evaluación' : 'Agregar comentario';

  function showSuccess() {
    toast.current.show({ severity: 'success', summary: 'Tu evaluación quedó registrada', detail: 'Gracias por contribuir!' });
  }

  return (
    <Card title={title}>
      <Rating value={evaluation} onChange={(e) => setEvaluation(e.value)} cancel={false} readOnly={evaluated} className={styles.inputRating} />
      <InputTextarea rows={4} cols={80} value={comment} onChange={(e) => setComment(e.target.value)} disabled={evaluated} autoResize maxlength="800" />
      <div className="dialog-demo">
        <Button type="button" label="Borrar" icon="pi pi-times" className="p-button-text" onClick={() => handleErase()} disabled={evaluated} />
        <Button
          type="submit"
          label="Guardar evaluación"
          icon="pi pi-check"
          onClick={() => {
            handleSubmit(evaluation, comment), setEvaluated(true), showSuccess();
          }}
          disabled={evaluated}
        />
      </div>
      <Toast ref={toast} position="bottom-center" />
    </Card>
  );
};

export default AddEvaluation;
