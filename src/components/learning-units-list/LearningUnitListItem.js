import { Card } from 'primereact/card';
import Image from 'next/image';
import styles from '@styles/LearningUnitsList.module.scss';
import profilePic from '@utils/images/unit.jpeg';
import LinkButton from './LinkButton';
import { CompleteLearningUnitToggle } from './CompleteLearningUnitToogle';

function LearningUnitItem({ unit }) {
  return (
    <Card className={styles.cardFull}>
      <div className={styles.productListItem}>
        <Image className={styles.img} src={profilePic} alt={unit.name} />
        <div className={styles.productListDetail}>
          <div className={styles.productName}>{unit.name}</div>
          <LinkButton url={`/learning-units/${unit.id}`} />
          <CompleteLearningUnitToggle unit_id={unit.id} />
        </div>
      </div>
    </Card>
  );
}

export default LearningUnitItem;
