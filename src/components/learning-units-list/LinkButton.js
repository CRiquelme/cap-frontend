import Link from 'next/link';
import { Button } from 'primereact/button';

const LinkButton = ({ url }) => {
  return (
    <div>
      <Link href={url}>
        <Button icon="pi pi-external-link" label="Go to Learning Unit" disabled={false}></Button>
      </Link>
    </div>
  );
};

export default LinkButton;
