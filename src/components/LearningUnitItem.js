import { Checkbox } from 'primereact/checkbox';

function LearningUnitItem(props) {
  return (
    <div>
      <h1>{props.id}</h1>
      <h1>{props.name}</h1>
      <Checkbox checked="true"></Checkbox>
    </div>
  );
}

export default LearningUnitItem;
