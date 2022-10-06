import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import ResourcesList from '@components/resources-list/ResourcesList';
import { Panel } from 'primereact/panel';
import { Skeleton } from 'primereact/skeleton';
import styles from '@styles/ResourcesList.module.scss';
import { Button } from 'primereact/button';
import AddResource from '@components/resources-list/AddResource';
import { Dialog } from 'primereact/dialog';
import '@styles/ResourcesList.module.scss';

const LearningUnitPage = () => {
  // Inicializo Router
  const router = useRouter();
  let learningUnitId = router.query.id;

  // Inicializo states para manejar el Dialog con Hooks
  const [displayBasic, setDisplayBasic] = useState(false);
  const dialogFuncMap = { displayBasic: setDisplayBasic };

  const [saveResource, setSaveResource] = useState(false);

  // Requests de Data
  const { data: learningUnit, isLoading: isLoadingUnit, isError: isErrorUnit } = useGet(endpoints('learningUnit', learningUnitId));

  const { data: resources, isLoading: isLoadingResources, isError: isErrorResources, mutate: mutateResources } = useGet(endpoints('learningUnitResources', learningUnitId));

  // Loading and Data check
  if (isLoadingUnit || isLoadingResources) {
    return <Skeleton shape="rectangle" width="100%" height="100%" />;
  }
  if (isErrorUnit || isErrorResources) {
    return 'error';
  }

  // handler del botón
  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);
    setSaveResource(false);
  };

  // handler del Modal
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
    setSaveResource(false);
  };
  const onSave = (name) => {
    dialogFuncMap[`${name}`](false);
    setSaveResource(false);
  };

  // TODO: FIX BUTTONS
  const header = () => {
    return (
      <div className={styles.resourceHeader}>
        {learningUnit?.name}
        <div className={styles.navButtons}>
          <Button label="Volver" icon="pi pi-arrow-left" onClick={() => router.back()} />
          <Button icon="pi pi-plus" onClick={() => onClick('displayBasic')} />
        </div>
      </div>
    );
  };

  return (
    <Panel header={header}>
      <Dialog header="Nuevo recurso" visible={displayBasic} style={{ width: '50vw' }} onHide={() => onHide('displayBasic')}>
        <AddResource saveResource={saveResource} onHide={onHide} onSave={onSave} learningUnitId={learningUnitId} mutate={mutateResources} />
      </Dialog>
      <ResourcesList resources={resources} learningUnitId={learningUnitId} mutateResources={mutateResources} />
    </Panel>
  );
};

export default LearningUnitPage;
