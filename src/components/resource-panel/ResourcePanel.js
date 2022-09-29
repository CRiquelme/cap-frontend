import { Panel } from 'primereact/panel';

const ResourcePanel = ({ resource }) => {
  return (
    <Panel header={resource.name}>
      <p id="resource-url">{resource.url}</p>
    </Panel>
  );
};
export default ResourcePanel;
