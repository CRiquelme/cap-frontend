import React from 'react';
import { Rating } from 'primereact/rating';

const Average = ({ average }) => {
  return (
    <>
      {average !== 'NaN' ? (
        <>
          <span>{average}</span>
          <Rating value={average} readOnly cancel={false} />
        </>
      ) : (
        <span>Sin evaluación</span>
      )}
    </>
  );
};

export default Average;
