import React from 'react'
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import useResourceAverage from '@hooks/useResourceAverage';
import styles from '@styles/ResourcesList.module.scss';
import Link from 'next/link';

const ResourcesListItem = ({resourceUnits}) => {
  const { resourceAverage } = useResourceAverage(resourceUnits.id);

  return (
    <div className='col-12 md:col-3'>
      <div className={`${styles.resourceGridItem}`}>
        <div className={`${styles.resourceListItem}`}>
          <img src={`images/product/${resourceUnits.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={resourceUnits.name} />
          <div className="product-list-detail">
            <div className={styles.resourceName}>{resourceUnits.name}</div>
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
              <i className="pi pi-link"></i> <Link href={resourceUnits.url}>{resourceUnits.url}</Link>
            </div>
            <div className={styles.resourceLink}>
              <Link href={`/resources/${resourceUnits.id}`}>
                <Button label="Ver recurso" icon="pi pi-book" className="p-button-outlined p-button-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ResourcesListItem