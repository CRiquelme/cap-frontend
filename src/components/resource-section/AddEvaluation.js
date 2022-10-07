import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { endpoints } from 'utils/endpoints';

const AddEvaluation = ({ myEvaluation }) => {
  const [evaluation, setEvaluation] = useState(undefined);
  const [comment, setComment] = useState('');
  const [evaluated, setEvaluated] = useState(myEvaluation.hasEvaluated);

  function handleErase() {
    setEvaluation('');
    setComment('');
  }

  async function handleSubmit(comment) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ evaluation: evaluation, comment: comment }),
    };
    const response = await fetch(endpoints('resourceEvaluation', myEvaluation.resourceId), requestOptions);
    await response.json();
    myEvaluation.updateEvaluations();
    myEvaluation.updateAverage();
    setEvaluated(true);
  }

  if (evaluated) return <></>;

  return (
    <Card title="Agregar comentario">
      <Rating value={evaluation} onChange={(e) => setEvaluation(e.value)} cancel={false} />
      <InputTextarea rows={5} cols={100} value={comment} onChange={(e) => setComment(e.target.value)} autoResize maxlength="800" />
      <div className="dialog-demo">
        <Button type="button" label="Borrar" icon="pi pi-times" className="p-button-text" onClick={() => handleErase()} />
        <Button type="submit" label="Guardar evaluación" icon="pi pi-check" onClick={() => handleSubmit(comment)} />
      </div>
    </Card>
  );
};

export default AddEvaluation;
