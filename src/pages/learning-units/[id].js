import React from 'react'
import ResourcesList from '@components/resources-list/ResourcesList'
import { Panel } from 'primereact/panel';
import { useRouter } from 'next/router';
import useResources from '@hooks/useResources';
import '@styles/ResourcesList.module.scss';

const resources = () => {
  const router = useRouter();
  let learningUnitIdQuery = router.query.id;
  let learningUnitId = router ? learningUnitIdQuery : null;

  const { resources, isLoadingResources, isErrorResources } = useResources(learningUnitId);

  if (isLoadingResources)  return 'loading';
  if (isErrorResources) return 'error';

  return (
    <Panel header={resources ? resources.name : null}>
      <ResourcesList resources={resources} learningUnitId={learningUnitId} />
    </Panel>
  )
}

export default resources;