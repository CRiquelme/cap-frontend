import { Panel } from 'primereact/panel';
import AverageRating from './AverageRating';
import LinkButton from './LinkButton';

const ResourcePanel = ({ resource }) => {
  return (
    <Panel header={resource.name}>
      <AverageRating average={resource.average_evaluation} />
      <LinkButton url={resource.url} />
    </Panel>
  );
};
export default ResourcePanel;
