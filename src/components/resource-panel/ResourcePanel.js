import { Panel } from 'primereact/panel';
import AverageRating from './AverageRating';
import RatingField from './RatingField';
import LinkButton from './LinkButton';

const ResourcePanel = ({ resource, current_evaluation, current_average, reload_average }) => {
  return (
    <Panel header={resource.name}>
      <AverageRating average={current_average} />
      <RatingField current_evaluation={current_evaluation} resource_id={resource.id} reload_average={reload_average} />
      <LinkButton url={resource.url} />
    </Panel>
  );
};
export default ResourcePanel;
