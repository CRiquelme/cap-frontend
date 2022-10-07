import { Dialog } from 'primereact/dialog';
import AddResourceForm from '@components/resources-section/AddResourceForm';
import useCurrentUser from '@hooks/useCurrentUser';

const AddNewResourceModal = ({ dialogHandlers, learningUnitId }) => {
  const currentUser = useCurrentUser();
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
      dialogHandlers.onHide();
      dialogHandlers.mutate();
    });
  };

  return (
    <Dialog header="Nuevo recurso" visible={true} style={{ width: '50vw' }} onHide={dialogHandlers.onHide}>
      <AddResourceForm onHide={dialogHandlers.onHide} onSave={saveResourceHandler} />
    </Dialog>
  );
};

export default AddNewResourceModal;
