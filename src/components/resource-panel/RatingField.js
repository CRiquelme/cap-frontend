import { Rating } from 'primereact/rating';
import { useState } from 'react';
import { endpoints } from 'utils/endpoints';

const RatingField = ({ resource }) => {
  const [evaluation, setEvaluation] = useState(resource.current_evaluation);

  async function handleNewEvaluation(new_evaluation) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ evaluation: new_evaluation }),
    };
    const response = await fetch(endpoints('resourceEvaluation', resource.id), requestOptions);
    const data = await response.json();
    setEvaluation(data.evaluation);
    resource.update_evaluation();
  }

  return <Rating value={evaluation} onChange={(e) => handleNewEvaluation(e.value)} cancel={false} />;
};

export default RatingField;
