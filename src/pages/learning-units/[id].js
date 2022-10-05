import React from 'react';
import ResourcesList from '@components/resources-list/ResourcesList';
import { useRouter } from 'next/router';
import '@styles/ResourcesList.module.scss';

const LearningUnitPage = () => {
  const router = useRouter();
  let learningUnitId = router.query.id;

  return <ResourcesList learningUnitId={learningUnitId} />;
};

export default LearningUnitPage;
