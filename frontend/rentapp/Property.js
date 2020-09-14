import React from 'react';
import PropertyList from './PropertyList';
import PropertySearchBar from './PropertySearchBar';
import AddProperty from './AddProperty';
import { withRouter } from 'react-router-dom';

class Property extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: undefined,
    };
  }

  setFilter = (dataFromChild) => {
    this.setState({ filter: dataFromChild });
  };

  render() {
    return (
      <div>
        <PropertySearchBar callbackFromParent={this.setFilter} />
        <AddProperty />
        <PropertyList filter={this.state.filter} />
      </div>
    );
  }
}
/*
function Property() {
  let { path } = useRouteMatch();
  const [filter, setFilter] = useState(undefined);

  return (
    
  );
}
*/

export default withRouter(Property);
