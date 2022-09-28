import LearningUnitItem from 'components/LearningUnitItem';

const LearningUnitList = ({ learningUnits }) => {
  return (
    <div className="card">
      {learningUnits.map((learningUnit) => (
        <LearningUnitItem key={learningUnit.id} unit={learningUnit} />
      ))}
    </div>
  );
};

export default LearningUnitList;
