import { Button } from 'primereact/button';
import Average from './Average';
import styles from '@styles/ResourcesList.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '@utils/images/resource.jpg';

const ResourcesListItem = ({ resource }) => {
  return (
    <div className="col-12 md:col-3">
      <div className={`${styles.resourceGridItem}`}>
        <div className={`${styles.resourceListItem}`}>
          <Link href={`/resources/${resource.id}`}>
            <Image className={styles.img} src={profilePic} alt={resource.name} />
          </Link>
          <div className="product-list-detail">
            <div className={styles.resourceName}>
              <Link href={`/resources/${resource.id}`}>{resource.name}</Link>
            </div>
            <div className={styles.resourceValidation}>
              <Average average={parseFloat(resource.average_evaluation).toFixed(1)} />
            </div>
            <div className={styles.resourceUrl}>
              <i className="pi pi-link"></i>{' '}
              <a href={resource.url} target="_blank" rel="noreferrer">
                Enlace del recurso
              </a>
            </div>
            <div className={styles.resourceLink}>
              <Link href={`/resources/${resource.id}`}>
                <Button label="Ver recurso" icon="pi pi-book" className="p-button-outlined p-button-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesListItem;
