import LearningUnitItem from './LearningUnitItem';

const LearningUnitList = ({ learningUnits }) => {
  return (
    <div className="card">
      {learningUnits.map((learningUnit) => {
        <LearningUnitItem id={learningUnit.id} name={learningUnit.name} />;
      })}
    </div>
  );
};

export default LearningUnitList;
