import { Dialog } from 'primereact/dialog';
import AddResource from './AddResource';

const AddNewResourceModal = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [saveResource, setSaveResource] = useState(false);

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

  return (
    <Dialog header="Nuevo recurso" visible={displayBasic} style={{ width: '50vw' }} onHide={() => onHide('displayBasic')}>
      <AddResource saveResource={saveResource} onHide={onHide} onSave={onSave} learningUnitId={learningUnitId} mutate={mutateResources} />
    </Dialog>
  );
};

export default AddNewResourceModal;
