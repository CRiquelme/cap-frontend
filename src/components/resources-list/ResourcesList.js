import React, { useState } from 'react';
import ResourcesListItem from '@components/resources-list/ResourcesListItem';
import AddResource from '@components/resources-list/AddResource';
import { Dialog } from 'primereact/dialog';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';

import styles from '@styles/ResourcesList.module.scss';
import '@styles/ResourcesList.module.scss';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';

const ResourcesList = ({ learningUnitId }) => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [saveResource, setSaveResource] = useState(false);
  const router = useRouter();

  const { data: learningUnit, isLoading: isLoadingUnit, isError: isErrorUnit } = useGet(endpoints('learningUnit', learningUnitId));
  const { data: resources, isLoading: isLoadingResources, isError: isErrorResources, mutate: mutateResources } = useGet(endpoints('learningUnitResources', learningUnitId));

  if (isLoadingResources || isLoadingUnit) return 'loading';
  if (isErrorResources || isErrorUnit) return 'error';

  const dialogFuncMap = { displayBasic: setDisplayBasic };

  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);
    setSaveResource(false);
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
    setSaveResource(false);
  };
  const onSave = (name) => {
    dialogFuncMap[`${name}`](false);
    setSaveResource(false);
  };

  const header = (
    <div className={styles.resourceHeader}>
      {learningUnit?.name}
      <div className={styles.navButtons}>
        <Button label="Volver" icon="pi pi-arrow-left" onClick={() => router.back()} />
        <Button icon="pi pi-plus" onClick={() => onClick('displayBasic')} />
      </div>
    </div>
  );

  const renderGridItem = (resource) => <ResourcesListItem resource={resource} />;

  const itemTemplate = (resource, layout) => {
    if (!resource) return;
    if (layout === 'grid') return renderGridItem(resource);
  };

  return (
    <>
      <Dialog header="Nuevo recurso" visible={displayBasic} onHide={() => onHide('displayBasic')}>
        <AddResource saveResource={saveResource} onHide={onHide} onSave={onSave} learningUnitId={learningUnitId} mutate={mutateResources} />
      </Dialog>
      <DataView value={resources} layout="grid" header={header} itemTemplate={itemTemplate} paginator rows={8} />
    </>
  );
};

export default ResourcesList;
