import { Card } from 'primereact/card';
import Image from 'next/image';
import styles from '@styles/LearningUnitsList.module.scss';
import { CompleteLearningUnitToggle } from './CompleteLearningUnitToogle';
import { endpoints } from '@utils/endpoints';
import useGet from '@hooks/useGet';
import { Skeleton } from 'primereact/skeleton';
import Link from 'next/link';

function LearningUnitItem({ unit }) {
  const completedLearningUnitEndpoint = endpoints('isLearningUnitCompleted', unit.id);

  const { data: isCompleted, isLoading, isError, mutate } = useGet(completedLearningUnitEndpoint);

  const changeHandler = (clicked) => {
    const requestOptions = {
      method: clicked.value ? 'POST' : 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(completedLearningUnitEndpoint, requestOptions).then((response) => {
      if (response.ok) {
        mutate();
      }
    });
  };

  if (isLoading) {
    return <Skeleton shape="rectangle" width="50%" />;
  }
  if (isError) {
    return 'error';
  }

  return (
    <Card className={styles.cardFull}>
      <div className={styles.productListItem}>
        <Link href={`/learning-units/${unit.id}`}>
          {/* <Image layout="fill" className={styles.img} src={profilePic} alt=""></Image> */}
          <Image
            width="235"
            height="150"
            className={styles.img}
            src={
              "https://img.freepik.com/vector-gratis/mujeres-felices-aprendiendo-idioma-linea-aislado-ilustracion-vectorial-plana-personajes-femeninos-dibujos-animados-que-toman-lecciones-individuales-traves-messenger-concepto-educacion-tecnologia-digital_74855-10088.jpg?w=2000&t=st=1665151875~exp=1665152475~hmac=e788b587fbbe1bdd29332d55dc1a5965dd181962a0ee5719dc83ef09c895f0b4img.freepik.com/vector-gratis/mujeres-felices-aprendiendo-idioma-linea-aislado-ilustracion-vectorial-plana-personajes-femeninos-dibujos-animados-que-toman-lecciones-individuales-traves-messenger-concepto-educacion-tecnologia-digital_74855-10088.jpg?w=2000&t=st=1665151875~exp=1665152475~hmac=e788b587fbbe1bdd29332d55dc1a5965dd181962a0ee5719dc83ef09c895f0b4'"
            }
            alt={unit.name}
          />
        </Link>
        <div className={styles.productListDetail}>
          <div className={styles.productName}>
            <span>Learning unit</span>
            <div>
              <i className="pi pi-link">&nbsp;</i>
              <Link href={`/learning-units/${unit.id}`}>{unit.name}</Link>
            </div>
          </div>
          <CompleteLearningUnitToggle completed={isCompleted.completed} onChangeHandler={changeHandler} />
        </div>
      </div>
    </Card>
  );
}

export default LearningUnitItem;
