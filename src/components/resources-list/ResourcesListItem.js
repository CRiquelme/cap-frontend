import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import styles from '@styles/ResourcesList.module.scss';
import Link from 'next/link';
import useGet from '@hooks/useGet';
import Image from 'next/image';
import { endpoints } from '@utils/endpoints';
import profilePic from '@utils/images/unit.jpeg';

const ResourcesListItem = ({ resource }) => {
  const { resourceAverage } = useGet(endpoints(resourceAverage, resource.id));

  return (
    <div className="col-12 md:col-3">
      <div className={`${styles.resourceGridItem}`}>
        <div className={`${styles.resourceListItem}`}>
          <Image className={styles.img} src={profilePic} alt={resource.name} />
          <div className="product-list-detail">
            <div className={styles.resourceName}>{resource.name}</div>
            <div className={styles.resourceValidation}>
              {resourceAverage?.average_evaluation !== 'Sin evaluación' ? (
                <>
                  <span>{resourceAverage?.average_evaluation}</span>
                  <Rating value={resourceAverage?.average_evaluation} readOnly cancel={false} />
                </>
              ) : (
                <span>Sin evaluación</span>
              )}
            </div>
            <div className={styles.resourceUrl}>
              <i className="pi pi-link"></i> <Link href={resource.url}>{resource.url}</Link>
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
