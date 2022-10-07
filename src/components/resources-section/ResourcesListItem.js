import { Button } from 'primereact/button';
import Average from './Average';
import styles from '@styles/ResourcesList.module.scss';
import Link from 'next/link';
import useGet from '@hooks/useGet';
import Image from 'next/image';
import { endpoints } from '@utils/endpoints';
import profilePic from '@utils/images/resource.jpg';

const ResourcesListItem = ({ resource }) => {
  const { data: resourceAverage } = useGet(endpoints('resourceAverage', resource.id));

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
              <Average average={resourceAverage?.average_evaluation} />
            </div>
            <div className={styles.resourceUrl}>
              <i className="pi pi-link"></i> <Link href={resource.url}>Enlace del recurso</Link>
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
