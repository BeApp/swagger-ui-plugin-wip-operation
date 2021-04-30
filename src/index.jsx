import './wip-operation.css'

export const WipOperationPlugin = (system) => {
  return {
    wrapComponents: {
      operation: (Original, { React }) => (props) => {
        const operationProps = props.operation
        const opPath = operationProps.get('path');
        const opMethod = operationProps.get('method');
        const operation = props.specSelectors.operationWithMeta(opPath, opMethod);
        const isWip = operation.get('x-wip') || false;

        if (isWip) {
          return <div className="opblock-wip" title="Work In Progress">
            <Original {...props} />
          </div>
        }

        return <Original {...props} />
      },
    },
  }
}
