import { Button } from 'primereact/button';

const LinkButton = ({ url }) => {
  if (!url) return <></>;

  return (
    <p>
      <a href={url} target="blank">
        <Button icon="pi pi-external-link" label={'Ir a recurso'}></Button>
      </a>
    </p>
  );
};

export default LinkButton;
