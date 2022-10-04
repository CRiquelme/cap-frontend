import { Button } from 'primereact/button';
import Link from 'next/link';

const LinkButton = ({ url }) => {

  if (!url) {
    return <></>
  }
  return (
    <p>
      <Link href={url}>
        <Button icon="pi pi-external-link" label={'Go to ' + url} disabled={false}></Button>
      </Link>
    </p>
  );
};

export default LinkButton;
