import ResourcesListItem from '@components/resources-section/ResourcesListItem';
import { DataView } from 'primereact/dataview';
import '@styles/ResourcesList.module.scss';

const ResourcesList = ({ resources }) => {
  const renderGridItem = (resource) => <ResourcesListItem resource={resource} />;

  return (
    <>
      <DataView value={resources} layout="grid" itemTemplate={renderGridItem} paginator rows={8} sortOrder={-1} sortField='average_evaluation'/>
    </>
  );
};

export default ResourcesList;
