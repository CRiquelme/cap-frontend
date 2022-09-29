import { Panel } from 'primereact/panel';


const ResourcePanel = ({ resource }) => {

  const template = (options) => {
    const className = `${options.className} justify-content-start`;
    const titleClassName = `${options.titleClassName} pl-1`;

    return (
        <div className={className}>
            <span className={titleClassName}>
                { options.name }
            </span>
        </div>
    )
}


  return (
    <Panel header={resource.name}>
      <p id="resource-url">{ resource.url }</p>
    </Panel>
  )
};
export default ResourcePanel;
