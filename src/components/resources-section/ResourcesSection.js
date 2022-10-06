import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import ResourcesList from '@components/resources-section/ResourcesList';
import AddNewResourceModal from '@components/resources-section/AddNewResourceModal';
import styles from '@styles/ResourcesList.module.scss';

const ResourcesSection = ({ learningUnitId }) => {
  const router = useRouter();
  const [displayBasic, setDisplayBasic] = useState(false);

  const { data: learningUnit, isLoading: isLoadingUnit, isError: isErrorUnit } = useGet(endpoints('learningUnit', learningUnitId));

  const { data: resources, isLoading: isLoadingResources, isError: isErrorResources, mutate: mutateResources } = useGet(endpoints('learningUnitResources', learningUnitId));

  if (isLoadingUnit || isLoadingResources) {
    return <Skeleton shape="rectangle" width="100%" height="100%" />;
  }
  if (isErrorUnit || isErrorResources) {
    return 'error';
  }

  const showDialogHandler = () => setDisplayBasic(true);
  const hideDialogHandler = () => setDisplayBasic(false);

  const dialogHandlers = {
    onHide: hideDialogHandler,
    mutate: mutateResources,
  };

  const header = () => {
    return (
      <div className={styles.resourceHeader}>
        {learningUnit?.name}
        <div className={styles.navButtons}>
          <Button label="Volver" icon="pi pi-arrow-left" onClick={() => router.back()} />
          <Button icon="pi pi-plus" onClick={showDialogHandler} />
        </div>
      </div>
    );
  };

  return (
    <Panel header={header}>
      {displayBasic && <AddNewResourceModal dialogHandlers={dialogHandlers} learningUnitId={learningUnitId} />}
      <ResourcesList resources={resources} learningUnitId={learningUnitId} />
    </Panel>
  );
};

export default ResourcesSection;
