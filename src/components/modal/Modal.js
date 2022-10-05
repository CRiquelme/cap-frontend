import React, {useState} from 'react'
import { Dialog } from 'primereact/dialog';
import AddResource from '@components/resources-list/AddResource';

const Modal = ({learningUnitId, displayBasicClick}) => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [saveResource, setSaveResource] = useState(false);
  const dialogFuncMap = { displayBasic: setDisplayBasic };

  console.log(displayBasicClick);
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
    setSaveResource(false);
  };
  const onSave = (name) => {
    dialogFuncMap[`${name}`](false);
    setSaveResource(true);
  };
  return (
    <>
      <Dialog header="Nuevo recurso" visible={displayBasic} style={{ width: '50vw' }} onHide={() => onHide('displayBasic')}>
        <AddResource saveResource={saveResource} onHide={onHide} onSave={onSave} learningUnitId={learningUnitId} />
      </Dialog>
    </>
  )
}

export default Modal