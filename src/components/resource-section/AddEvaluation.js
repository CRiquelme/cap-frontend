import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { endpoints } from 'utils/endpoints';

const AddEvaluation = ({ myEvaluation }) => {
  const defaultOptions = {
    evaluation: myEvaluation.evaluation? myEvaluation.evaluation : 1,
    evaluated: myEvaluation.evaluation? true : false,
  }

  const [evaluation, setEvaluation] = useState(defaultOptions.evaluation);
  const [comment, setComment] = useState(myEvaluation.comment);
  const [evaluated, setEvaluated] = useState(defaultOptions.evaluated);

  function handleErase() {
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

  let title = evaluated ? "Tu evaluación" : "Agregar comentario";

  return (
    <Card title={title}>
      <Rating value={evaluation} onChange={(e) => setEvaluation(e.value)} cancel={false} readOnly={evaluated} />
      <InputTextarea rows={5} cols={100} value={comment} onChange={(e) => setComment(e.target.value)} disabled={evaluated} autoResize maxlength="800" />
      <div className="dialog-demo">
        <Button type="button" label="Borrar" icon="pi pi-times" className="p-button-text" onClick={() => handleErase()} disabled={evaluated} />
        <Button type="submit" label="Guardar evaluación" icon="pi pi-check" onClick={() => handleSubmit(comment)} disabled={evaluated} />
      </div>
    </Card>
  );
};

export default AddEvaluation;
