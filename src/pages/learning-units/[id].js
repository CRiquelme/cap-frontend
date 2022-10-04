import React from 'react';
import ResourcesList from '@components/resources-list/ResourcesList';
import { useRouter } from 'next/router';
import '@styles/ResourcesList.module.scss';

const Resources = () => {
  const router = useRouter();
  let learningUnitIdQuery = router.query.id;
  let learningUnitId = router ? learningUnitIdQuery : null;

  return <ResourcesList learningUnitId={learningUnitId} />;
};

export default Resources;
