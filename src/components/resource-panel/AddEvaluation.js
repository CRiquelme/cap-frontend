import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const AddEvaluation = () => {
  const [evaluation, setEvaluation] = useState(undefined)
  const [value, setValue] = useState("")

  const handleErase = (() => {})
  const handleSubmit = (() => {})
  
  return (
    <Card title="Title" subTitle="SubTitle">
      <Rating value={evaluation} onChange={(e) => setEvaluation(e.value)} cancel={false}/>
      <InputTextarea rows={5} cols={100} value={value} onChange={(e) => setValue(e.value) } autoResize maxlength="800" />
      <div className="dialog-demo">
        <Button type="button" label="Borrar" icon="pi pi-times" className="p-button-text" onClick={() => handleErase()} />
        <Button type="submit" label="Guardar evaluación" icon="pi pi-check" onClick={() => handleSubmit()} />
      </div>
    </Card>
  )
}

export default AddEvaluation;
