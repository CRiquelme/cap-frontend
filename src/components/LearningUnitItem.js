import { Checkbox } from 'primereact/checkbox';

function LearningUnitItem({ unit }) {
  console.log(unit);
  return (
    <div>
      <h1>{unit.id}</h1>
      <h1>{unit.name}</h1>
      <Checkbox checked="true"></Checkbox>
    </div>
  );
}

export default LearningUnitItem;
