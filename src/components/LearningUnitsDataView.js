import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import styles from '@styles/DataViewDemo.module.scss';
import Image from 'next/image';
import profilePic from '/src/components/unit.jpeg';

const LearningUnitsDataView = ({ learningUnits }) => {
  const renderListItem = (unit) => {
    return (
      <div className="col-12">
        <div className={styles.productListItem}>
          <Image className={styles.img} src={profilePic} alt={unit.name} />
          <div className={styles.productListDetail}>
            <div className={styles.ProductName}>HOLA {unit.name}</div>
            <div className={styles.productDescription}>{unit.name}</div>
            <i className={styles.productCategoryIcon}></i>
            <span className={styles.productCategory}>{unit.name}</span>
          </div>
          <div className={styles.productListAction}>
            <span className={styles.productPrice}>$10</span>
            <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={true}></Button>
            <span className={`product-badge status-${unit.name.toLowerCase()}`}>{unit.name}</span>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (unit, layout) => {
    if (!unit) {
      return;
    }

    if (layout === 'list') return renderListItem(unit);
    // else if (layout === 'grid') return renderGridItem(unit);
  };

  const renderHeader = () => {
    return (
      <div className="grid grid-nogutter">
        <div className="col-6" style={{ textAlign: 'left' }}>
          {/* <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} /> */}
        </div>
        <div className="col-6" style={{ textAlign: 'right' }}>
          {/* <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} /> */}
        </div>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div>
      <div className="card">
        <DataView value={learningUnits} layout="list" header={header} itemTemplate={itemTemplate} paginator rows={9} />
      </div>
    </div>
  );
};

export default LearningUnitsDataView;
