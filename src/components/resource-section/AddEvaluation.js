import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import styles from '@styles/ResourceEvaluations.module.scss';

const AddEvaluation = ({ formOptions }) => {
  const [evaluation, setEvaluation] = useState(formOptions.evaluation);
  const [comment, setComment] = useState(formOptions.comment);
  const [evaluated, setEvaluated] = useState(formOptions.evaluated);

  const handleErase = () => {
    setComment('');
    setEvaluation('');
  };
  let title = evaluated ? 'Tu evaluación' : 'Agregar comentario';

  const handleSubmit = () => {
    formOptions.handleSubmitForm(evaluation, comment);
    setEvaluated(true);
  };

  return (
    <Card title={title}>
      <Rating value={evaluation} onChange={(e) => setEvaluation(e.value)} cancel={false} readOnly={evaluated} className={styles.inputRating} />
      <InputTextarea rows={4} cols={80} value={comment} onChange={(e) => setComment(e.target.value)} disabled={evaluated} autoResize maxlength="800" />
      <div className="dialog-demo">
        <Button type="button" label="Borrar" icon="pi pi-times" className="p-button-text" onClick={() => handleErase()} visible={!evaluated} />
        <Button type="submit" label="Guardar evaluación" icon="pi pi-check" onClick={handleSubmit} visible={!evaluated} disabled={evaluation < 1} />
      </div>
      <Toast ref={formOptions.toast} position="bottom-center" />
    </Card>
  );
};

export default AddEvaluation;
