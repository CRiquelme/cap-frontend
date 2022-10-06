import { Dialog } from 'primereact/dialog';
import AddResource from '@components/resources-list/AddResource';

const AddNewResourceModal = ({ dialogHandlers }) => {
  return (
    <Dialog header="Nuevo recurso" visible={true} style={{ width: '50vw' }} onHide={dialogHandlers.onHide}>
      <AddResource onHide={dialogHandlers.onHide} onSave={dialogHandlers.onSave} />
    </Dialog>
  );
};

export default AddNewResourceModal;
