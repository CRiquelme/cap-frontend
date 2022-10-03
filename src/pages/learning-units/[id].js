import React from 'react';
import ResourcesList from '@components/resources-list/ResourcesList';
// import useResources from '@hooks/useResources';
import { Panel } from 'primereact/panel';
import '@styles/ResourcesList.module.scss';

const resources = () => {
  return (
    <Panel>
      <ResourcesList resources={resources} />
    </Panel>
  );
};

export default resources;
