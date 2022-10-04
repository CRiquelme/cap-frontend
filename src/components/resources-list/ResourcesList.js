import React, {useState} from 'react';
import ResourcesListItem from '@components/resources-list/ResourcesListItem';
import AddResource from '@components/resources-list/AddResource';
import { Dialog } from 'primereact/dialog';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import useResources from '@hooks/useResources';
import useLearningUnit from '@hooks/useLearningUnit';
import styles from '@styles/ResourcesList.module.scss';
import '@styles/ResourcesList.module.scss';

const ResourcesList = ({ learningUnitId }) => {
  const { learningUnit } = useLearningUnit(learningUnitId);
  const [displayBasic, setDisplayBasic] = useState(false);
  const [saveResource, setSaveResource] = useState(false);
  const {resources, isLoadingResources, isErrorResources} = useResources({ learningUnitId });
  const dialogFuncMap = { 'displayBasic': setDisplayBasic };

  // if(isLoadingResources) return 'loading';
  // if(isErrorResources) return 'error';

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
    setSaveResource(true);
  };

  const renderFooter = (name) => {
    return (
      <div className="dialog-demo">
        <Button label="Salir" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
        <Button label="Guardar" icon="pi pi-check" onClick={() => onSave(name)} />
      </div>
    );
  };

  const header = (
    <div className={styles.resourceHeader}>
      {learningUnit?.name}
      <Button icon="pi pi-plus" onClick={() => onClick('displayBasic')} />
    </div>
  );

  const renderGridItem = (resource) => <ResourcesListItem resourceUnits={resource} />

  const itemTemplate = (resource, layout) => {
    if (!resource) return;
    if (layout === 'grid') return renderGridItem(resource);
  };

  return <>
    <Dialog header="Nuevo recurso" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
      <AddResource saveResource={saveResource} />
    </Dialog>
    <DataView value={resources} layout="grid" header={header} itemTemplate={itemTemplate} paginator rows={9} />
  </>
};

export default ResourcesList;
