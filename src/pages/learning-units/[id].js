import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useCurrentUser from '@hooks/useCurrentUser';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Panel } from 'primereact/panel';
import { Skeleton } from 'primereact/skeleton';
import { Button } from 'primereact/button';
import ResourcesList from '@components/resources-list/ResourcesList';
import AddNewResourceModal from '@components/resources-list/AddNewResourceModal';
import styles from '@styles/ResourcesList.module.scss';

const LearningUnitPage = () => {
  const router = useRouter();
  let learningUnitId = router.query.id;
  const currentUser = useCurrentUser();

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

  const saveResourceHandler = (values) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: values.name,
        url: values.url,
        user: currentUser.id,
      }),
    };
    fetch('http://localhost:3001/api/learning_units/' + learningUnitId + '/resources', requestOptions).then(() => {
      hideDialogHandler();
      mutateResources();
    });
  };

  const dialogHandlers = {
    onHide: hideDialogHandler,
    onSave: saveResourceHandler,
  };

  // TODO: FIX BUTTONS
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
      {displayBasic && <AddNewResourceModal dialogHandlers={dialogHandlers} />}
      <ResourcesList resources={resources} learningUnitId={learningUnitId} />
    </Panel>
  );
};

export default LearningUnitPage;
