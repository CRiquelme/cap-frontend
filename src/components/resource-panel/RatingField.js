import { Rating } from 'primereact/rating';
import { useState } from 'react';

const RatingField = ({ current_evaluation, resource_id, reload_average }) => {
  const [evaluation, setEvaluation] = useState(current_evaluation);

  async function handleNewEvaluation(new_evaluation) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ evaluation: new_evaluation }),
    };
    const response = await fetch('http://localhost:3001/api/resources/' + resource_id + '/evaluation', requestOptions);
    const data = await response.json();
    setEvaluation(data.evaluation);
    reload_average();
  }

  return <Rating value={evaluation} onChange={(e) => handleNewEvaluation(e.value)} cancel={false} />;
};

export default RatingField;
