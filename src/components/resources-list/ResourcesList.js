import React from 'react';
import { DataView } from 'primereact/dataview';
import ResourcesListItem from './ResourcesListItem';
import useLearningUnit from '@hooks/useLearningUnit';
import { useRouter } from 'next/router';
import useResources from '@hooks/useResources';
import '@styles/ResourcesList.module.scss';

const ResourcesList = () => {
  const router = useRouter();
  let learningUnitIdQuery = router.query.id;
  let learningUnitId = router ? learningUnitIdQuery : null;
  const { learningUnit } = useLearningUnit(learningUnitId);

  const { resources, isLoadingResources, isErrorResources } = useResources();

  if (isLoadingResources) return 'loading';
  if (isErrorResources) return 'error';

  const renderGridItem = (resource) => <ResourcesListItem resourceUnits={resource} />;

  const itemTemplate = (resource, layout) => {
    if (!resource) return;
    if (layout === 'grid') return renderGridItem(resource);
  };

  return <DataView value={resources} layout="grid" header={learningUnit ? learningUnit.name : null} itemTemplate={itemTemplate} paginator rows={9} />;
};

export default ResourcesList;
