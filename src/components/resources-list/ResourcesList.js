import React from 'react'
import { DataView } from 'primereact/dataview';
import ResourcesListItem from './ResourcesListItem';
import useLearningUnit from '@hooks/useLearningUnit';
import '@styles/ResourcesList.module.scss';

const ResourcesList = ({resources, learningUnitId}) => {
  const renderGridItem = (resource) => <ResourcesListItem resourceUnits={resource} />;

  const { learningUnit } = useLearningUnit(learningUnitId);

  const itemTemplate = (resource, layout) => {
    if(!resource) return;
    if(layout === 'grid') return renderGridItem(resource);
  };

  return (
      <DataView
        value={resources}
        layout="grid"
        header={learningUnit ? learningUnit.name : null}
        itemTemplate={itemTemplate}
        paginator rows={9}
      />
  )
};

export default ResourcesList