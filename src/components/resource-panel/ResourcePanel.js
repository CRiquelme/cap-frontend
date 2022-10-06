import { Panel } from 'primereact/panel';
import AverageRating from './AverageRating';
import RatingField from './RatingField';
import LinkButton from './LinkButton';

const ResourcePanel = ({ resource }) => {
  return (
    <Panel header={resource.name}>
      <AverageRating average={resource.average_evaluation} />
      <RatingField resource={resource} />
      <LinkButton url={resource.url} />
    </Panel>
  );
};
export default ResourcePanel;
