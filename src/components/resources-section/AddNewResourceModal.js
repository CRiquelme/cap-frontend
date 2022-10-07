import { Dialog } from 'primereact/dialog';
import AddResourceForm from '@components/resources-section/AddResourceForm';
import useCurrentUser from '@hooks/useCurrentUser';

const AddNewResourceModal = ({ handlers }) => {
  const currentUser = useCurrentUser();

  const save = (values) => {
    const body = JSON.stringify({
      name: values.name,
      url: values.url,
      user: currentUser.id,
    });

    handlers.onSave(body);
  };

  return (
    <Dialog header="Nuevo recurso" visible={true} style={{ width: '50vw' }} onHide={handlers.onHide}>
      <AddResourceForm onHide={handlers.onHide} onSubmit={save} />
    </Dialog>
  );
};

export default AddNewResourceModal;
